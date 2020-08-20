<template>
  <div id="app">
     <p>{{ name }}</p>
     <p>
       <button type="button" @click="changeAge(-1)">-</button>
          年齢{{ age }}
       <button type="button" @click="changeAge(1)">+</button>
       </p>
       <p>
         <button type="button" @click="changeYear(-1)">-</button>
         生まれ: {{ year }}
         <button type="button" @click="changeYear(1)">+</button>
       </p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
   setup() {
     const name = ref("abc");
     const age = ref(18);
     const year = computed({
       get: ()=> {
          return 2020 - age.value     
       },
       
       set: (val) => {
         age.value =  2020 - val
       }
     });
     function changeAge(val){
       age.value += val;
     }
     function changeYear(val){
       year.value = year.value + val;
     }
     return {name, age, changeAge, year, changeYear}
   }
}
</script>

<style>
</style>
