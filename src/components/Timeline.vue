<template>
    <div class="columns">
        <div class="column is-three-quarters">
          <!-- タイムライン -->  
          <nav class="navbar is-white">
          <div class="container">
            <div class="navbar-menu">
               <div class="navbar-start">
                <a
                    class="navbar-item"
                    :class="[period === selectedPeriod ? 'is-active': ''] "
                    @click="setPeriod(period)"
                    data-test="period" v-for="(period, index) in periods"
                    :key="index"
                    >{{ period }}
                </a>
               </div>
               <div class="navbar-end">
                 <div class="navbar-item">
                    <router-link class="button is-primary is-alt" to="/posts/new">投稿する</router-link>
                 </div>
               </div>
             </div>
            </div>
           </nav>
           <!-- ブログリスト --> 
           <TimelinePost  v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <div class="column is-one-quarter">
            <UserRanking/>
            <AuthCard/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Period, Post } from "@/types";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import moment from "moment";
import { useStore } from "@/store"

import TimelinePost from "./TimelinePost.vue";
import UserRanking from "@/components/home/UserRanking.vue";
import AuthCard from "@/components/home/AuthCard.vue";

// const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export default defineComponent({
    name: 'timeline',
    components: {
       TimelinePost,
       UserRanking,
       AuthCard
    },
    async setup(){
      // 記事のタグバー用リスト
      const periods: Period[] = ["今日", "今週", "今月"];
      const selectedPeriod = ref<Period>("今日");

      // tabの切り替え
      const setPeriod = (period:Period)=> {
          selectedPeriod.value = period
      }

      const store = useStore();

      if (!store.getState().posts.loaded){
          await store.fetchPosts();
      }
    //   console.log(store.getState());
    // acc == []
      const allPosts = store.getState().posts.ids.reduce<Post[]>((acc, id)=>{
          const post = store.getState().posts.all[id];
          return acc.concat(post);
      }, [])

      // 2ミリ秒を待つ
      //   await delay(2000);

      // show Data
      // const posts: Post[] = [todayPost, thisWeek, thisMonth];
      const posts = computed(() => allPosts.filter(post=>{
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

<style scope>

.navbar > .container .navbar-menu, .container > .navbar .navbar-menu{
 margin-right: 0px;  /* ボタンと枠の間の距離をリセット */
}
.navbar{
    border: 1px solid hsla(0,0%,59.2%,.1);
}
.is-four-fifths{
    padding-right: 10px;
}
.is-one-fifth{

}
.container{
    z-index: 0;
}
</style>