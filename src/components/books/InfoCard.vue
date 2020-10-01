<template>
    <div class="book-card">
       <a href="" class="author">
         <img src="http://s3.pstatp.com/toutiao/xitu_juejin_web/img/author.c5d975e.png" alt="">
         <div class="items title">作者になる</div>
       </a>
       <div>|</div>
       <a href="" class="feedback">
         <img src="http://s3.pstatp.com/toutiao/xitu_juejin_web/img/feedback.1230fb5.png" alt="">
         <div class="items title">バック</div>
       </a>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "InfoCard",
    components:{},
    setup(){

    }
})
</script>
<style scoped>
.book-card{
  height: 120px;
  box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  margin-top: 8px;
  font-size: 14px;
}
.items{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #71777b;
}
.author{
  padding-left: 40px;
}
.feedback{
  padding-right: 40px;
}
</style>