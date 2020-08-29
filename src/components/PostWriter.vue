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
                <div contenteditable id="markdown" ref="contenteditable"/>
            </div>
            <div class="column is-one-half">
                show
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

      console.log(contenteditable.value);

      onMounted(() => {
        console.log(contenteditable.value);  
      })
      return { title, contenteditable };
    }
})
</script>