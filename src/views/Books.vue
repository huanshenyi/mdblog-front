<template>
    <div class="columns">
        <!-- booksリスト -->
        <div class="column is-three-quarters">
           <BookList/>
        </div>
        <!-- 右側内容 -->
        <div class="column is-one-quarter">
            <InfoCard/>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

import BookList from "@/components/books/BookList.vue";
import InfoCard from '@/components/books/InfoCard.vue';

export default defineComponent({
    name: "Books",
    components: {
        BookList,
        InfoCard
    },
    setup(){

    }
})
</script>
<style scoped>
</style>