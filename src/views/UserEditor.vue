<template>
    <div class="columns">
         <div class="column is-one-quarter">
             <div class="settings-menu">
                <div class="menu-item">公開用プロフィール</div>
                <div class="menu-item">アカウント</div>
                <div class="menu-item">パスワード</div>
                <div class="menu-item">メールアドレスと通知</div>
             </div>
         </div>
         <div class="column">
            <Main/>
         </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Main from "@/components/userEditor/Main.vue";

export default defineComponent({
    name: "UserEditor",
    components: {
        Main
    },
    setup(){
  
    }
})
</script>
<style scoped>
.settings-menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 280px;
    position: -webkit-sticky;
    position: sticky;
    top: 1em;
    background-color: #fff;
    border: 1px solid transparent;
    padding: 16px;
}
.menu-item{
    width: 100%;
    font-weight: normal;
    padding: 8px 0;
    border-bottom: 1px solid #e8e8e8;
    color: #555;
}
</style>