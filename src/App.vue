<template>
  <!-- Navbarにあるteleportの内容を呼び出してます -->
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal"></div>
    </div>
    <button class="modal-close is-large" @click="modal.hideModal">
    </button>
  </div>
   
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

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FormInput
  },
  setup(){
     const modal = useModal();

     const style = computed( () => ({
       display: modal.visible.value ? "block" : "none",
     }));

     return { modal, style }
  }
})
</script>

<style scoped>
.modal-content{
  top: 10%;
}
.section{
  /* background-color: #f4f5f5; */
}
</style>
