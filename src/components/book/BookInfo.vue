<template>
    <div class="columns is-12">
       <div class="book-card">
          <!-- 内容切替のtab -->
          <div class="tabs">
            <ul>
                <li class="is-active"><a>目次</a></li>
                <li><a>紹介</a></li>
            </ul>
          </div>
          <!-- 内容紹介もしくは目次 -->
          <div class="book-content">
              <div class="book-content-head">ブック内容</div>
              <div class="book-directory"  v-for="(item, index) in mokeList" :key="index">
                <div class="section">
                    <div class="step">
                        <!-- 目次のラベル -->
                        <div class="step-btn">1</div>
                        <div class="center">
                          <div class="title">万里长征第一步（非常重要！非常重要！非常重要！此处省略一万</div>
                          <div class="sub-line">
                              <div class="statistics">
                                  <span class="duration">时长: 25分34秒</span>
                                  <span class="readed">4087次学习</span>
                                  <span class="comment">154条评论</span>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
       </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "BookInfo",
    components:{},
    setup(){
       const mokeList = [1,2,3,4]
       return {
           mokeList
       } 
    }
})
</script>
<style scoped>
.section{
  padding: 0 0 0 0;
}
.book-card{
    max-width: 720px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    background-color: #fff;
}
.book-content{
    padding: 30px 30px 0; 
}
.book-content-head{
    position: relative;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;
    line-height: 1.5;
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #ececec;
}
.section{
    position: relative;
    min-height: 70px;
}
.step{
    align-items: center;
    display: flex;
    position: relative;
}
.step-btn{
    width: 45px;
    height: 45px;
    border-width: 3px;
    font-size: 18px;
}
.center{
    flex-grow: 1;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
}
.sub-line{
    display: flex;
    align-items: center;
    margin-top: 3px;
}
.title{
    font-size: 16px;
    margin-bottom: 0;
}
.statistics{
    color: #b2bac2;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
}
.duration{
    margin-right: 12px;
}
.readed{
    margin-right: 12px;
}
.comment{
    margin-right: 12px; 
}
</style>