<template>
   <div class="card">
      <!-- 内容切替のタグ --> 
      <div class="tabs">
        <ul>
            <li class="is-active"><a>アクティブ</a></li>
            <li><a>記事</a></li>
            <li><a>いいねした記事</a></li>
            <li><a >下書き一覧</a></li>
            <li><a>ミニブック</a></li>
        </ul>
      </div>
      <div class="card-content">
         <div class="content">
            <div class="activity-item">
                <div class="source-header"></div>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "UserActive",
    components: {},
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