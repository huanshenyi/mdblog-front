<template>
    <div class="banner">
        <BookCard/>
        <BookInfo/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from "vue-router";

import BookCard from "@/components/book/BookCard.vue";
import BookInfo from "@/components/book/BookInfo.vue";

export default defineComponent({
    name: 'Book',
    components: {
        BookCard,
        BookInfo
    },
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
    /* background-color: aliceblue; */
}
</style>