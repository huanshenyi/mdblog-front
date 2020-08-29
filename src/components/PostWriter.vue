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
                {{ markdown }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Post } from "@/types";

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

      const handleEdit = ()=>{
          //@ts-ignore
          markdown.value = contenteditable.value.innerText;
      }

      onMounted(() => {
        //@ts-ignore
        contenteditable.value.innerText = markdown.value
      })

      return { title, contenteditable, handleEdit, markdown};
    }
})
</script>