<template>
    <div class="editor-email">
      <div class="titles">
          <a href="">icon </a>
          <a href="">username</a>
          <span>/</span>
          <span>メールアドレスと通知</span>
      </div>
      <!-- formのスタート -->
      <div class="columns">
         
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "EditorEmail",
    components: {},
    setup() {

    }
})
</script>
<style scoped>
.editor-email{
    flex-grow: 1;
    min-width: 0;
    margin-left: 16px;
    background-color: #fff;
    border: 1px solid transparent;
    padding: 16px;
}
.titles{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 24px;
    margin-bottom: 32px;
}
</style>