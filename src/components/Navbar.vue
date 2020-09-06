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
                       <p class="control">
                           <button class="button is-small" @click="modal.showModal">
                             <span class="icon">
                                 <i class="fa fa-user-plus"></i>
                             </span>
                             <span>新規登録</span>
                           </button>
                       </p>
                       <!-- ログイン -->
                       <p class="control">
                           <button class="button is-small is-link">
                             <span class="icon">
                                 <i class="fa fa-user"></i>
                             </span>
                             <span>ログイン</span>
                           </button>
                       </p>                       
                   </div>
                 </div>
             </div>
          </div>
      </div>
      <teleport to="#modal" v-if="modal.visible">
          <!-- コンポネント追加(動的のも可能) -->
          ログイン
      </teleport>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useModal } from "@/utils/useModal";

export default defineComponent({
    name: "Navbar",
    components: {},
    setup() {
        return { modal: useModal() }
    }
})
</script>