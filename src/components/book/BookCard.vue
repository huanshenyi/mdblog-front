<template>
    <div class="columns is-12">
        <div class="book-card">
            <div class="book-info">
                <div class="poster">
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image" alt="">
                </div>
                <div class="info">
                    <div class="title-line">
                        <div class="title">
                            <span>Go语言构建Web应用实践</span>
                        </div>
                    </div>
                    <div class="media">
                        <div class="desc">从零开始教你使用Go语言构建一个web应用程序。</div>
                        <div class="author">
                        <div class="author-info">
                            <a href="" class="user">
                                <img src="https://lc-gold-cdn.xitu.io/0df32a1e33971bb75b63.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="" class="avatar">
                            </a>
                            <a href="" class="username">username</a>
                        </div>
                        <div class="author-desc">
                            <span class="desc">
                                搬砖开发工程师 @ 360
                            </span>
                        </div>
                    </div>
                    </div>
                    <!--購入ボタンなどの欄-->
                    <div class="other">
                        <div class="not-buy">
                            <div class="buy-box">
                                <button class="button--buy">
                                      購入
                                </button>
                            </div>
                            <button class="button--write">
                                     試し読み
                            </button>
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
    name: "BookCard",
    components: {},
    setup(){

    }
    
})
</script>
<style scoped>
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
.book-info{
    padding: 20px;
}
.poster{
    width: 130px;
    height: 182px;
    border-radius: 2px;
    background-repeat: no-repeat;
    float: left;
    margin-right: 20px;
}
.info {
    margin-left: 150px;
    font-size: 14px;
    min-height: 182px;
}
.title{
    font-size: 20px;
    font-weight: 700;
    color: #333;
}
.media{
    display: flex;
    flex-direction: column;
}
.desc{
    margin-top: 10px;
    min-height: 40px;
    line-height: 20px;
    overflow: hidden;
    color: #71777c;
}
.author{
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 12px;
}
.author-info{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: #333;
}
.user{
    display: flex;
    align-items: center;
    color: #000;
}
.avatar{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 8px;
}
.username{
    font-weight: 400;
    color: #333;
}
.author-desc{
    color: #71777c;
    flex-grow: 1;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.desc{
   margin-top: 10px;
    min-height: 40px;
    line-height: 20px;
    overflow: hidden;
    color: #71777c; 
}
.other{
    margin-top: 25px;
    position: relative;
}
.not-buy{
    position: relative;
    overflow: hidden;
}
.buy-box{
    float: left;
}
.button--buy{
    height: 40px;
    font-size: 16px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #007fff;
    color: #fff;
    text-align: center;
}
.button--write{
    height: 40px;
    font-size: 16px;
    padding-left: 30px;
    padding-right: 30px;
    color: #71777c;
    text-align: center;
    background-color: #fff;
    border: 1px solid #aeb6c0;
    margin-left: 5px;
}
</style>