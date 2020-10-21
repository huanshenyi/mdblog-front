<template>
    <div class="columns">
         <div class="column is-one-quarter">
             <div class="settings-menu">
                <router-link class="menu-item" to="/user/editor/main">公開用プロフィール</router-link>
                <router-link class="menu-item" to="/user/editor/password">パスワード</router-link>
                <router-link class="menu-item" to="/user/editor/email">メールアドレスと通知</router-link>
             </div>
         </div>
         <div class="column">
            <!-- <Main/> -->
            <router-view></router-view>
         </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from "vue-router";

// import Main from "@/components/userEditor/Main.vue";
// import EditorEmail from "@/components/userEditor/EditorEmail.vue";

export default defineComponent({
    name: "UserEditor",
    components: {
        // Main,
        // EditorEmail
    },
    setup(){
       const active:string = "";
       const route = useRoute();
       const router = useRouter();
       
       console.log(route.path);

       return {active}
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