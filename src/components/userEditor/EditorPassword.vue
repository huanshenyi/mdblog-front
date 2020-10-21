<template>
    <div class="editor-password">
      <div class="titles">
          <a href="">icon </a>
          <a href="">username</a>
          <span>/</span>
          <span>パスワード</span>
      </div>
      <div class="columns">
          <!-- 名前 -->
          <div class="column">
            <div class="field">
                <label class="label">パスワード変更用のメールをメールアドレスへ送信</label>
                <div class="control">
                    <a class="button is-info is-outlined">メール送信</a>
                </div>
            </div>
          </div>
      </div>           
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "EditorPassword",
    setup(){

    }
})
</script>
<style scoped>
.editor-password{
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