<template>
    <div class="banner">
       <div class="columns is-12">
        <div class="book-card">
            <div class="book-info">
                <div class="poster">
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/449cc29621c44984a04691628381e4c5~tplv-k3u1fbpfcp-zoom-1.image" alt="">
                </div>
                <div class="info"></div>
            </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
    name: 'Book',
    components: {},
    setup(){
      const route = useRoute();
      const id = route.params.id as string;
      return {
          id
          }
    }
})
</script>
<style scoped>
.banner{
}
.book-card{
    max-width: 720px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    background-color: #fff;
}
.book-info{
    padding: 20px;
}
.poster{
    width: 130px;
    height: 182px;
    border-radius: 2px;
    background-repeat: no-repeat;
    float: left;
    margin-right: 20px;
}
.info {
    margin-left: 150px;
    font-size: 14px;
    min-height: 182px;
}
</style>