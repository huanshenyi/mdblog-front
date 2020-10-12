<template>
    <!-- ユーザーがストックした記事 -->
    <div class="item-list">
        <div class="item" v-for="(item, index) in mokeList " :key="index">
            <!-- 投稿者のicon -->
            <figure class="userthmb image is-48x48">
            <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
            <!-- 記事の基本データ -->
            <div class="media_body">
                <div class="item-link">username がxx/yyyy/mmに投稿しました。</div>
                <div class="item-title">Golang + Gin + Dockerのホットリロード、VSCodeデバッグ環境の構築</div>
                <div class="u-flex">
                    <div class="tag-list">
                        <span class="tag">Tag label</span>
                        <span class="tag">Tag label</span>
                        <span class="tag">Tag label</span>
                    </div>
                </div>
            </div>
            <!-- 記事のいいね、コメントなど -->
            <ul class="item_link_status">
              <li>
                  <span class="not_checked">LGTM</span>
                  4
              </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: "StockList",
    components: {},
    setup(){
     const mokeList = ref([1,2,3,4]);
     return { mokeList }
    }
})
</script>
<style scoped>
.item{
    display: flex;
    padding: calc(1em*2/3);
    font-size: 12px;
    color: #444;
    border-bottom: 1px solid #ddd;
}
.userthmb{
    display: flex;
    overflow: hidden;
    border-radius: 50%;
}
.media_body{
    flex: 1 1;
    width: 0;
    min-width: 0;
}
.item-link{
    font-size: 1em;
}
.item-title{
    display: block;
    margin-bottom: .5em;
    font-size: 1.3em;
}
.u-flex{
    display: flex;
}
.tag-list{
    align-items: center;
    margin-left: 8px;
    display: inline-flex;
    flex-wrap: wrap;
    font-size: 12px;
}
.tag {
    margin: 0 1em .5em .5em;
}
.item_link_status{
    padding-left: 0;
    margin-bottom: 0;
    font-size: 1.2em;
    text-align: right;
    list-style: none;
}
.not_checked{
    display: inline-block;
    width: 40px;
    height: 9.1px;
    fill: #999; 
}
</style>