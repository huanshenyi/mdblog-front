<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <UserCard/>
            <UserActive/>
        </div>
        <div class="column">
            <UserRcard/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import UserCard from "@/components/user/UserCard.vue";
import UserRcard from "@/components/user/UserRcard.vue";
import UserActive from "@/components/user/UserActive.vue";

export default defineComponent({
    name: "User",
    components:{
        UserCard,
        UserRcard,
        UserActive
    },
    setup(){

    }
})
</script>