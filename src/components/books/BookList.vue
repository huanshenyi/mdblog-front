<template>
    <div class="book-list">
        <div class="item" v-for="(item, index) in mokeList" :key="index">
            <!-- 表紙画像 --> 
            <div class="poster">
                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image" alt="">
            </div>
            <!-- 詳細データ -->
            <div class="info">
                <div class="title"><span>Go言語何か</span></div>
                <div class="desc">从零开始教你使用Go语言构建一个web应用程序。</div>
                <div class="author"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: "BookList",
    components: {},
    setup(){
        const mokeList = ref([1,2,3])
        return {
            mokeList
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
</style>