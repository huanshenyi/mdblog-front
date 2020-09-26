<template>
    <!-- プルダウンコンポネント -->
    <div class="dropdown is-active" ref="dropdownRef">
    <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click.prevent="showitem">
            <span>{{title}}</span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="show">
        <ul class="dropdown-content">
            <slot></slot>
        </ul>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useClickOutside from '@/utils/useClickOutside';

export default defineComponent({
    name: "Dropdown",
    components: {
        
    },
    props: {
     title: {
          type: String,
          require: true,
          default: ()=>{
              return ""
          }
      },
    },
    setup(props, ctx){
       const show = ref(false);
       const dropdownRef = ref<null | HTMLElement>(null);

       const showitem = ()=>{
          show.value = !show.value
       }

       const isClickOutside = useClickOutside(dropdownRef)
       if(show.value && isClickOutside.value) {
          show.value = false
       }
       watch(isClickOutside, ()=>{
        if(show.value && isClickOutside.value) {
            show.value = false
        }
       })
       return {
           show,
           showitem,
           dropdownRef,
       }
    }
})
</script>
<style scoped>
.dropdown{
    z-index: 1;
}
</style>