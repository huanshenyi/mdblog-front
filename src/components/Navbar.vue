<template>
    <nav class="navbar">
        <div class="navbar-end">
            <div class="buttons">
                <router-link class="button" to="/posts/new">投稿する</router-link>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Navbar",
    components: {}
})
</script>