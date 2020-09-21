<template>
    <div class="card">
        <header class="card-header">
          <p class="card-header-title">
              作者ランキング
          </p>
        </header>
        <div class="card-content">
            <div class="content">
                <!-- ランクインしたユーザーのリスト -->
                <ul class="user-list">
                    <li class="user-item" v-for="(key, item) in mockList" :key="item">
                        <div class="media">
                            <!-- ユーザーicon -->
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <!-- ユーザーinfo -->
                            <div class="media-content">
                                <p class="is-4">John</p>
                                <p class="is-6">@johnsmith</p>
                            </div>                          
                        </div>
                    </li>
                </ul>
            </div>  
        </div>
        <!-- userランキングのfooter -->
        <footer class="card-footer">
          <p class="card-footer-item">
             <span>
                 <a href="#">
                     more (icon必要)
                 </a>
             </span>
          </p>
        </footer>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name: "UserRanking",
    components:{},
    setup(){
      const mockList = ref([1,2,3]);
      return { mockList }

    }
})
</script>
<style scoped>
.content ul{
    /* uiフレームワークのcssを相殺用 */
    margin-left: 0; 
}
.card-content{
    /* uiフレームワークのcssを相殺用 */
    padding: 0;
}
.user-list{
    background-color: #fff;
    border: 1px solid transparent;
}
.user-item{
    list-style: none;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #e8e8e8;
}
</style>