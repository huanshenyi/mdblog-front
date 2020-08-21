<template>
    <nav class="is-primary panel">
        <p class="panel-tabs">
            <a href="" v-for="(period, index) in periods" :key="index">{{ period }}</a>
        </p>
    </nav>  
</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue';
import { Period } from "@/types";

export default defineComponent({
    name: 'timeline',
    components: {
       
    },
    setup(){
      // 記事のタグバー用リスト
      const periods: Period[] = ["今日", "今週", "今月"];
      return { periods }; 
    },
})
</script>

<style scope="">

</style>