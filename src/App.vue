<template>
  <section class="section">
    <div class="container">
      <Suspense>
        <template #default>
          <timeline/>
        </template>
        <template #fallback>
          <Progress/>
        </template>
      </Suspense>
    </div>
  </section>
</template>

<script lang="ts">
import  { defineComponent } from 'vue';
import Timeline from './components/Timeline.vue';
import Progress from "./components/Progress.vue";

export default defineComponent({
  name: 'App',
  components: {
    Timeline,
    Progress
  }
})
</script>

<style>

</style>
