<template>
  <section class="section">
    <div class="container">
      <NavBar/>
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts">
import  { defineComponent } from 'vue';
import NavBar from "@/components/Navbar.vue";

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>

<style>

</style>
