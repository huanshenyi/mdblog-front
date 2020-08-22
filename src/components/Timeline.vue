<template>
    <nav class="is-primary panel">
        <p class="panel-tabs">
            <a
             :class="[period === selectedPeriod ? 'is-active': ''] "
             @click="setPeriod(period)"
             data-test="period" v-for="(period, index) in periods"
             :key="index"
             >{{ period }}</a>
        </p>
    </nav>  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Period } from "@/types";

export default defineComponent({
    name: 'timeline',
    components: {
       
    },
    setup(){
      // 記事のタグバー用リスト
      const periods: Period[] = ["今日", "今週", "今月"];
      const selectedPeriod = ref<Period>("今日");

      // tabの切り替え
      const setPeriod = (period:Period)=> {
          selectedPeriod.value = period
      }

      return { periods, selectedPeriod, setPeriod }; 
    },
})
</script>

<style scope="">

</style>