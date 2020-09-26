/*
Dropdownの外部をクリックすると、
開いてるDropdownを閉じる機能の制御関数
*/

import { ref, onMounted, onUnmounted, Ref } from 'vue';

const useClickOutside = (elementRef:Ref<null | HTMLElement>) => {
   const isClickOutside = ref(false)
   const handler = (e:MouseEvent) => {
      if(elementRef.value) {
          if(elementRef.value.contains(e.target as HTMLElement)){
              isClickOutside.value = false
          } else {
              isClickOutside.value = true
          }
      }
   }
   onMounted(()=>{
    document.addEventListener('click', handler)
   })
   onUnmounted(()=>{
    document.removeEventListener('click', handler)
   })
   return isClickOutside;
}

export default useClickOutside