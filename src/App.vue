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
import { computed, reactive, toRefs, watch } from 'vue';
export default {
   props: { //propsはReadonly
      title: String
   },
   setup(props, context) {
      const data = reactive({
         name: 'abc',
         age: 16,
         year: computed({
           get: () => {
             return 2020 -data.age;
           },
           set: (val)=> {
             data.age = 2020 - val;
           }
         })
      });
      function changeAge(val) {
        data.age += val
        console.log(props.title);
      }

      watch(()=>props.title, (newTitle, oldTitle)=>{
           console.log(props, oldTitle);
           context.emit('title-changed')
      });

      function changeYear(val) {
        data.year = data.year + val
      }

      return {...toRefs(data), changeAge, changeYear};
   }
}
</script>

<style>
</style>
