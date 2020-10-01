<template>
    <div class="book-list">
        <div class="item" v-for="(item, index) in mokeData" :key="index">
            <!-- 表紙画像 --> 
            <div class="poster">
                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image" alt="">
            </div>
            <!-- 詳細データ -->
            <div class="info">
                <div class="title"><span>{{item.title}}</span></div>
                <div class="desc">{{item.desc}}</div>
                <div class="author">
                    <!--ユーザーデータ左側-->
                    <div class="author-info">
                        <a href="" class="user">
                            <img :src="item.avatar" alt="" class="avatar">
                            <a href="" class="username">{{item.username}}</a>
                        </a>
                    </div>
                    <!--ユーザーデータ右側-->
                    <div class="author-desc">
                        <span class="selfDescription">
                            {{item.selfDescription}}
                        </span>
                    </div>
                </div>
                <!-- 値段などの欄 -->
                <div class="other">
                  <div class="price">
                     <div class="price-text">$ {{item.price}}</div>
                  </div>
                  <div class="messages">
                     <span class="message">{{item.message}}回.</span>
                     <span class="message">
                         <span>{{item.buys}}</span>
                         <span>人購入</span>
                     </span>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { BookData } from '@/types';

export default defineComponent({
    name: "BookList",
    components: {},
    setup(){
        const mokeList = ref([1,2,3])
        const mokeData:BookData[] = reactive([
            {
            poster: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image",
            title: "Go言語のすべてだぞ",
            desc: "内容補充内容補充内容補充内容補充",
            avatar: "https://mirror-gold-cdn.xitu.io/168e096b62f70298fbd?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
            username: "作者名",
            selfDescription: "后端工程师 | 公众号 「我们都是小青",
            price: 2000,
            message: 30,
            buys: 10,
        },
        {
            poster: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image",
            title: "Go言語のすべてだぞ",
            desc: "内容補充内容補充内容補充内容補充",
            avatar: "https://mirror-gold-cdn.xitu.io/168e096b62f70298fbd?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
            username: "作者名",
            selfDescription: "后端工程师 | 公众号 「我们都是小青",
            price: 2000,
            message: 30,
            buys: 10,
        }
        ])

        return {
            mokeList,
            mokeData
        }
    }
})
</script>
<style scoped>
.book-list{
    box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
}
.item{
    display: flex;
    padding: 25px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
}
.poster{
    width: 100px;
    height: 140px;
    flex-shrink: 0;
    box-shadow: 3px 4px 12px 0 rgba(0,0,0,.2);
    overflow: hidden;
    background-color: #ccc;
}
.info{
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 14px;
    color: #2e3135;
    padding-left: 22px;
}
.title{
    color: inherit;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0;
}
.desc{
    margin-top: 5px;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #71777c;
}
.author {
    display: flex;
    align-items: center;
    margin-top: 6px;
    overflow: hidden;
    white-space: nowrap;
}
.author-info{
    flex-shrink: 0;
    display: flex;
    align-items: center;
}
.author-desc{
    color: #71777c;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.user{
    display: inline-flex;
    align-items: center;
    color: #000;
}
.avatar{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 8px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.username{
    color: #000;
    font-weight: 400;
}
.selfDescription{
    margin-left: 10px;
    margin-right: 10px;
}
.other {
    margin-top: 6px;
    display: flex;
    align-items: center;
}
.price{
    color: #ed7b11;
    font-size: 18px;
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
}
.message{
    opacity: .6;
    font-size: 13px;
    color: #71777c;
}
</style>