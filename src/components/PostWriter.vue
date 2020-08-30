<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <div class="label">blog title</div>
                    <div class="control">
                        <input type="text" v-model="title" class="input">
                        {{title}}
                    </div>
                </div>
            </div>
        </div>
        <!-- write && show-->
        <div class="columns">
            <div class="column is-one-half">
                write
                <div
                 contenteditable
                 id="markdown"
                 ref="contenteditable"
                 @input="handleEdit"
                 />
            </div>
            <div class="column is-one-half">
                show
                <div v-html="html" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { Post } from "@/types";
import { parse, MarkedOptions } from "marked";
import { highlightAuto } from "highlight.js"
import debounce from "lodash/debounce";

export default defineComponent({
    name: "PostWriter",
    components: {},
    props: {
        post: {
            type: Object as () => Post,
            required: true
        },
    },
    setup(props){
      const title = ref(props.post.title);
      const contenteditable = ref<null | HTMLDivElement>(null);
      const markdown = ref(props.post.markdown);
      const html = ref("");

      const handleEdit = ()=>{
          //@ts-ignore
          markdown.value = contenteditable.value.innerText;
      };

      const options: MarkedOptions = {
          highlight: (code:string) => highlightAuto(code).value,
      }
      
      // 入力内容の延時表示
      const update = debounce((value: string) => {
          html.value = parse(value, options);
      }, 450)
      
      // immediate: true => レンダリング時に一回実行される
      watch(()=> markdown.value, (value) => update(value), {immediate: true})

      onMounted(() => {
        //@ts-ignore
        contenteditable.value.innerText = markdown.value;
      })

      return { title, contenteditable, handleEdit, markdown, html};
    }
})
</script>