<template>
   <div class="card">
      <!-- 内容切替のタグ --> 
      <div class="tabs">
        <ul>
            <li class="is-active"><a>ストック一覧</a></li>
            <li><a>マイ記事</a></li>
            <li><a>いいねした記事</a></li>
            <li><a >下書き一覧</a></li>
            <li><a>ミニブック一覧</a></li>
        </ul>
      </div>
      <div class="card-content">
         <div class="content">
            <div class="activity-item">
                <div class="source-header">
                    <StockList/>
                </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import StockList from "@/components/user/StockList.vue";

export default defineComponent({
    name: "UserActive",
    components: {
        StockList
    },
    setup() {

    }
})
</script>
<style scoped>
.card{
    margin-top: 10px;
}
.activity-item{
    border-radius: 0 0 .2rem .2rem;
}
</style>