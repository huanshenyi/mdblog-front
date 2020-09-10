<template>
   <form>
    <!-- ログイン用のフォーム -->
    <FormInput type="text" name="ユーザーネーム" v-model="username" :error="usernameStatus.message" />
    <FormInput type="text" name="メールアドレス" v-model="email" :error="emailStatus.message" />
    <FormInput type="password" name="パスワード" v-model="password" :error="passwordStatus.message" />
    <FormInput type="password" name="パスワード確認" v-model="password2" :error="password2Status.message" />
    <div class="select">
        <select v-model="rule">
            <option value="user">ユーザー</option>
            <option value="visitor">ゲスト</option>
        </select>
    </div>
    <button
     class="button is-primary is-pulled-right"
     :disabled="!usernameStatus.valid || !passwordStatus.valid">
     新規追加
     </button>
   </form>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import FormInput from "@/components/FormInput.vue"
import { Status, validate, required, length } from "@/utils/validators.ts"

export default defineComponent({
    name: "Signup",
    components:{
        FormInput
    },
    setup() {
     const rule = ref("user");

     // 検証用   
     const username = ref("username");
     const usernameStatus = computed<Status>(() => {
       return validate(username.value, [
         required(),
         length({min:5, max:10})
         ]);
     })

     const email = ref("email");
     const emailStatus = computed<Status>(() => {
       return validate(email.value, [
         required(),
         length({min:5, max:10})
         ]);
     })

     const password = ref("password");
     const passwordStatus = computed<Status>(() => {
       return validate(password.value, [
         required(),
         length({min:5, max:10})
         ]);
     })

     const password2 = ref("password2");
     const password2Status = computed<Status>(() => {
       return validate(password2.value, [
         required(),
         length({min:5, max:10})
         ]);
     })          

     return { 
         username, usernameStatus,
         email, emailStatus,
         password, passwordStatus,
         password2, password2Status,
         rule
         }
    }
})
</script>
<style scoped>
form {
    background: white;
    padding: 15px;
}
</style>