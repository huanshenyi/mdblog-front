<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="model-content">
      <div id="modal"></div>
    </div>
    <button class="modal-close is-large" @click="modal.hideModal">
    </button>
  </div>

  <FormInput
   type="text"
   name="ユーザーネーム"
   v-model="username" :error="usernameStatus.message"/>
   
  <NavBar/>
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts">
import  { defineComponent, computed, ref } from 'vue';
import NavBar from "@/components/Navbar.vue";
import { useModal } from "@/utils/useModal.ts";
import FormInput from "@/components/FormInput.vue";
import { Status, validate, required, length} from "@/utils/validators.ts";

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FormInput
  },
  setup(){
     const modal = useModal();
     const username = ref("username");

     //検証ルール
     const usernameStatus = computed<Status>(() => {
       return validate(username.value, [
         required(),
         length({min:5, max:10})
         ]);
     })
     const style = computed( () => ({
       display: modal.visible.value ? "block" : "none",
     }));

     return { modal, style, username, usernameStatus}
  }
})
</script>

<style>

</style>
