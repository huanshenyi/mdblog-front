<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <div class="label">blog title</div>
                    <div class="control">
                        <input data-test="post-title" type="text" v-model="title" class="input">                
                    </div>
                </div>
            </div>
        </div>
        <!-- write && show-->
        <div class="columns">
            <div class="column is-one-half">
                <div
                 contenteditable
                 id="markdown"
                 ref="contenteditable"
                 @input="handleEdit"
                 data-test="markdown"
                 />
            </div>
            <div class="column is-one-half">
                <div v-html="html" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <!-- 保存ボタン -->
                <button data-test="submit-post" class="button is-primary is-pulled-right" @click="handleSubmit">
                    保存   
                </button>
                <!-- キャンセルボタン -->
                <button
                 @click="$router.go(-1)"
                 class="button is-danger"
                >
                 キャンセル
                </button>
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
    setup(props, ctx){
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

      // 入力内容を保存
      const handleSubmit = () => {
         // 親コンポネントに渡す
         const post: Post = {
             ...props.post,
             title:title.value,
             markdown: markdown.value,
             html: html.value,
         }
         ctx.emit("save", post)
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

      return { title, contenteditable, handleEdit, markdown, html, handleSubmit};
    }
})
</script>