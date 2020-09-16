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
                 <!-- ナビバーのタイトル -->
                 <router-link class="navbar-item" to="/">ブログ</router-link>
                 <!-- 記事か書籍かの機能選択用の空欄 -->
                 <div class="navbar-item"></div>
                 <div class="navbar-item"></div>
                 <div class="navbar-item"></div>
                 <div class="navbar-item"></div>
                 <!-- ナビバーのキーワード検索インプット -->
                 <div class="navbar-item">
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-rounded is-small" type="text" placeholder="キーワードを入力">
                        <span class="icon is-small is-left">
                          <i class="fa fa-search"></i>
                        </span>
                    </p>
                    </div>               
                 </div>
             </div>
             <div class="navbar-end">
                 <div class="navbar-item">
                   <div class="field is-grouped" v-if="auth">
                       <!-- ユーザー情報表示欄 -->
                       <p class="control">
                           <button
                            class="button is-small">
                             <span class="icon">
                                 <i class="fa fa-user-plus"></i>
                             </span>
                             <span>Admin</span>
                           </button>
                       </p>
                       <!-- ログアウト -->
                       <p class="control">
                           <button
                            @click="signout"
                            class="button is-small is-link">
                             <span class="icon">
                                 <i class="fa fa-user"></i>
                             </span>
                             <span>ログアウト</span>
                           </button>
                       </p>                       
                   </div>                     
                   <div class="field is-grouped" v-else>
                       <!-- 新規アカウント追加ボタン -->
                       <p class="control">
                           <button
                            @click="signup"
                            class="button is-small">
                             <span class="icon">
                                 <i class="fa fa-user-plus"></i>
                             </span>
                             <span>新規登録</span>
                           </button>
                       </p>
                       <!-- ログインボタン -->
                       <p class="control">
                           <button
                            @click="signin"
                            class="button is-small is-link">
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
          <!-- コンポネント追加(動的) -->
          <component :is="component"/>
      </teleport>
    </nav>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useModal } from "@/utils/useModal";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "Navbar",
    components: {
        // Signup,
        // Signin
    },
    setup() {
        const component = ref();
        const modal = useModal();
        const store = useStore();

        const auth = computed(() => store.getState().loginUser.currentUserId);

        const signup = () => {
            component.value = Signup;
            modal.showModal();
        }
        const signin = () => {
            component.value = Signin;
            modal.showModal();
        }
        const signout = async() => {
            await store.signOut();
        }
        return { modal, component, signup, signin, signout, auth }
    }
})
</script>