<template>
<!-- ログイン用のコンポネント -->
    <form @submit.prevent="handleSubmit">
        <FormInput type="text" name="ユーザーネーム" v-model="username" :error="usernameStatus.message"/>
        <FormInput type="password" name="パスワード" v-model="password" :error="passwordStatus.message"/>
        <div class="select">
           <select v-model="rule">
              <option value="user">ユーザー</option>
              <option value="visitor">ゲスト</option>
           </select>
        </div>
        <button 
        class="button is-primary is-pulled-right"
        :disabled="!usernameStatus.value && !passwordStatus.valid">
             ログイン
        </button>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import FormInput from "@/components/FormInput.vue";
import { Status, validate, required, length } from "@/utils/validators.ts";
import { User } from "@/types";
import { useStore } from "@/store";
import { useModal } from "@/utils/useModal";

export default defineComponent({
    name: "Signin",
    components: {
        FormInput
    },
    setup(){
      const store = useStore();
      const modal = useModal();
      const rule = ref("user");

      // 入力データのバリデータ
      const username = ref("username");
      const usernameStatus = computed<Status>(() => {
          return validate(username.value, [
              required(),
              length({min:5, max:10})
          ])
      });

      const password = ref("password");
      const passwordStatus = computed<Status>(() => {
       return validate(password.value, [
         required(),
         length({min:5, max:20})
         ]);
      })
      const handleSubmit = async (e:any) => {
          const user: User = {
              id: -1,
              username: username.value,
              password: password.value,
              rule: rule.value
          };
        //   store.login(user);
          modal.hideModal();
      }
      return {rule, username, usernameStatus, password, passwordStatus, handleSubmit}
    }
})
</script>
<style scoped>
form{
    background: white;
    padding: 15px;
}
</style>