<template>
    <div class="banner">
        <BookCard/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from "vue-router";

import BookCard from "@/components/book/BookCard.vue";

export default defineComponent({
    name: 'Book',
    components: {
        BookCard
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
}
</style>