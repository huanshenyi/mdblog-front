<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <UserCard/>
        </div>
        <div class="column">
            column
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import UserCard from "@/components/user/UserCard.vue";

export default defineComponent({
    name: "User",
    components:{
        UserCard
    },
    setup(){

    }
})
</script>