<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="model-content">
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
import  { defineComponent, computed } from 'vue';
import NavBar from "@/components/Navbar.vue";
import { useModal } from "@/utils/useModal.ts"

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  setup(){
     const modal = useModal();
     const style = computed( () => ({
       display: modal.visible.value ? "block" : "none",
     }));

     return { modal, style}
  }
})
</script>

<style>

</style>
