<template>
    <div class="card">
        <!-- ユーザーcardの上の部分 -->
        <div class="card-content">
             <div class="media">
                <!-- 上の左-->  
               <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
               </div>
               <!-- 上の右 -->
               <div class="media-content">
                  <p class="title is-6">Username</p>
                  <p class="subtitle is-6">@プロフィールurl</p>
               </div> 
             </div>
        </div>
        <div class="card-footer">
           <div class="card-footer-item">Save</div>
           <div class="card-footer-item">Save</div>
           <div class="card-footer-item">Save</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "AuthCard",
    props:{
      
    },
    setup(props, ctx){
        
    }
})
</script>
<style scoped>
.card{
    margin-top: 20px;
}
</style>