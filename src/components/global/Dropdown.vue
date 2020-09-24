<template>
    <!-- プルダウンコンポネント -->
    <div class="dropdown is-active">
    <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click.prevent="showitem">
            <span>{{title}}</span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="show">
        <div class="dropdown-content">
        <a href="#" class="dropdown-item">
            マイページ
        </a>
        <a class="dropdown-item">
            下書一覧
        </a>
        <a href="#" class="dropdown-item">
           ミニブック
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item">
            ログアウト
        </a>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue'
export default defineComponent({
    name: "Dropdown",
    props: {
     title: {
          type: String,
          require: false,
          default: ()=>{
              return "defaultTitle"
          }
      },
    },
    setup(props, ctx){
       const show = ref(false);
       const showitem = ()=>{
          show.value = !show.value
       }
       return { show, showitem}
    }
})
</script>
<style scoped>
.dropdown{
    z-index: 1;
}
</style>