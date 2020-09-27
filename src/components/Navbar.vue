<template>
    <nav class="navbar is-white topNav">
      <div class="container">
          <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                 <!-- ホームページののロゴ --> 
                 <img src="/static/logo/logo.png" alt="">
              </router-link>
              <div class="navbar-item"></div>
          </div>
          <div class="navbar-menu" id="topNav">
             <div class="navbar-start">
                 <!-- ナビバーのタイトル -->
                 <!-- <router-link class="navbar-item" to="/">ブログ</router-link> -->
                 <!-- 記事か書籍かの機能選択用の空欄 -->
                 <router-link class="navbar-item" to="/books" :class="[isActive=='books'?'is-active':'']">ミニブック</router-link>
                 <div class="navbar-item">イベント</div>
                 <div class="navbar-item">スレッド</div>
                 <div class="navbar-item">未定</div>
             </div>
             <div class="navbar-end">
                 <div class="navbar-item">
                   <Dropdown :title="`username`">
                     <DropdownItem><a href="#" class="dropdown-item">プロフィール</a></DropdownItem>
                     <DropdownItem disabled><a href="#" class="dropdown-item">記事</a></DropdownItem>
                     <DropdownItem><a href="#" class="dropdown-item">ログアウト</a></DropdownItem>
                   </Dropdown>    
                 </div>
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
                 <!-- 場所取り、今後機能実装かもstart -->
                 <div class="navbar-item"></div>
                 <div class="navbar-item"></div>
                 <!-- 場所取り、今後機能実装かもend -->
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
import { computed, defineComponent, ref, markRaw, watch,onMounted } from 'vue';
import { useModal } from "@/utils/useModal";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";
import { useStore } from "@/store";

import Dropdown from "@/components/global/Dropdown.vue";
import DropdownItem from "@/components/global/DropdownItem.vue";
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "Navbar",
    components: {
        // Signup,
        // Signin
        Dropdown,
        DropdownItem,
    },
    setup() {
        const component = ref();
        const modal = useModal();
        const store = useStore();
        const route = useRoute();
        const isActive = ref<string>("");
        // ナビバーのボタンのアクティブ表示。
        watch(route, ()=>{
           console.log(route.path); 
           if(route.path === "/books"){
               isActive.value = "books"
           }else{
               isActive.value = "home"
           }
        })

        const auth = computed(() => store.getState().loginUser.currentUserId);

        const signup = () => {
            component.value = markRaw(Signup);
            modal.showModal();
        }
        const signin = () => {
            component.value = markRaw(Signin);
            modal.showModal();
        }
        const signout = async() => {
            await store.signOut();
        }
        return { modal, component, signup, signin, signout, auth, isActive }
    }
})
</script>
<style scoped>
nav{
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 2px 2px 5px  #f1f1f1;
}
.is-active{
    color: #148cee  !important;;
}
</style>