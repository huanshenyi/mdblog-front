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
        <a v-for="post in posts" :key="post.id" class="panel-block">
            <div>
                <a href="">{{ post.title }}</a>
                <div>{{ post.created.format("yyyy-MM-dd") }}</div>
            </div>
        </a>
    </nav>  
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Period, Post } from "@/types";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import moment from "moment";

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

      // show Data
      // const posts: Post[] = [todayPost, thisWeek, thisMonth];
      const posts = computed(() => [todayPost, thisWeek, thisMonth].filter(post=>{
          if(selectedPeriod.value === "今日" &&
             post.created.isAfter(moment().subtract(1, "day"))){
              return true;
          }
          
          if (selectedPeriod.value == "今週" && post.created.isAfter(moment().subtract(7, "day"))){
              return true;
          }
          if (selectedPeriod.value == "今月" && post.created.isAfter(moment().subtract(7, "month"))){
              return true;
          }
      }));

      return { periods, selectedPeriod, setPeriod, posts }; 
    },
})
</script>

<style scope="">

</style>