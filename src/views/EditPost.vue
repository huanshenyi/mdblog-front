<template>
    <Suspense>
        <template #default>
          <PostEditor />
        </template>
        <template #fallback>
            <Progress />
        </template>
    </Suspense>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Progress from "@/components/Progress.vue";
import PostEditor from "@/components/PostEditor.vue";

export default defineComponent({
    name: "EditPost",
    components: {
        Progress,
        PostEditor
    }
})
</script>