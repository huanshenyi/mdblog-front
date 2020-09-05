<template>
    <router-link :to="to" data-test="post" class="panel-block">
        <div>
            <a>{{ post.title }}</a>
            <div>{{ post.created.format("YYYY-MM-DD（dd）") }}</div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {Post} from "@/types";

export default defineComponent({
    name: "TimelinePost",
    props: {
        post: {
            type:Object as () => Post,
            require: true
        }
    },
    setup(props) {
       return {to: `/posts/${(props as any).post.id}`}
    }
})
</script>

<style scoped>

</style>