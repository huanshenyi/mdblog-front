<template>
  <div id="app">
     <p>{{ name }}</p>
     <p>{{ age }} <button type="button" @click="plusOne">+</button></p>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
   setup() {
     const name = ref("abc");
     const age = ref(18);
     function plusOne(){
       age.value += 1;
     }
     return {name, age, plusOne}
   }
}
</script>

<style>
</style>
