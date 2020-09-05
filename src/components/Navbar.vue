<template>
    <nav class="navbar is-primary topNav">
      <div class="container">
          <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                 <i class="fa fa-home"></i>
              </router-link>
          </div>
          <div class="navbar-menu" id="topNav">
             <div class="navbar-start">
                 <router-link class="navbar-item" to="/">ブログ</router-link>
             </div>
             <div class="navbar-end">
                 <div class="navbar-item">
                   <div class="field is-grouped">
                       <!-- 新規アカウント追加 -->
                       <div class="control">
                           <router-link to="/register" class="button is-small">
                             <span class="icon">
                                 <i class="fa fa-user-plus"></i>
                             </span>
                             <span>登録</span>
                           </router-link>
                       </div>
                       <!-- ログイン -->
                       <div class="control">
                           <router-link to="/login" class="button is-small is-link">
                             <span class="icon">
                                 <i class="fa fa-user"></i>
                             </span>
                             <span>ログイン</span>
                           </router-link>
                       </div>                       
                   </div>
                 </div>
             </div>
          </div>
      </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Navbar",
    components: {}
})
</script>