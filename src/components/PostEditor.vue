<template>
     <PostWriter :post="post" @save="handleSave"/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PostWriter from "@/components/PostWriter.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store";
import { Post } from "@/types";

export default defineComponent({
  name: "PostEditor",
  components: {
    PostWriter,
  },
  async setup(props, ctx){
     const route = useRoute();
     const router = useRouter();
     const store = useStore();

     const id = route.params.id as string;
     // データをロード
     if(!store.getState().posts.loaded) {
       await store.fetchPosts();
     }
     const post = store.getState().posts.all[id]

     const handleSave = async (post: Post) => {
        await store.updatePost(post);
        router.push("/")
     }

     return { post, handleSave }
  }
})
</script>