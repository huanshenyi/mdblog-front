<template>
   <div class="columns">
       <div class="">
            <ul class="list">
                <li v-for="item in mokeList" :key="item.id" class="topic-item">
                    <img :src="item.avatar" :alt="item.title" class="icon">
                    <div class="content">
                        <h5>{{item.title}}</h5>
                        <p>{{item.description}}</p>
                        <a href="#">チャンネルに入る</a>
                    </div>
                </li>
            </ul>
       </div>
   </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ChannelProps {
    id: number,
    title: string,
    avatar: string,
    description: string,
}

export default defineComponent({
    name: "ChannelList",
    props: {
        list: {
            type: Array as PropType<ChannelProps[]>,
            required: true,
        }
    },
    components: {},
    setup(props, ctx){
        // テスト用データ
        const mokeList:ChannelProps[] = [
          {
              id:1,
              title: "チャンネル1",
              description: "チャンネル1の内容",
              avatar:"https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png"
          },
          {
              id:2,
              title: "チャンネル2",
              description: "チャンネル2の内容",
              avatar:"https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png"
          },
          {
              id:3,
              title: "チャンネル3",
              description: "チャンネル3の内容",
              avatar:"https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png"
          }
        ]

        return {mokeList}
    }
})
</script>
<style scoped>
.list{
    display: flex;
    flex-direction: row;
    max-width: 1368px;
    flex-wrap: wrap;
}
.topic-item{
    display: flex;
    flex-grow: 0;
    padding: 1.5rem 1.2rem;
    align-items: flex-start;
}
.icon{
    position: relative;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    margin-right: 2%;
    background-size: cover;
    background-repeat: no-repeat;
}
.content{
    color: #8a9aa9;
    width: 12rem;
    max-width: 12rem;
    letter-spacing: normal;
    text-align: left;
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
}
</style>