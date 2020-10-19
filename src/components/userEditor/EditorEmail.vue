<template>
    <div class="editor-email">
      <div class="titles">
          <a href="">icon </a>
          <a href="">username</a>
          <span>/</span>
          <span>メールアドレスと通知</span>
      </div>
      <label class="label heading">
          <span>icon</span> メールアドレスの設定
      </label>
      <!-- formのスタート -->
      <div class="columns">
         <div class="column">
            <div class="field">
            <div class="sb-label">メールアドレス</div>
            <div class="control">
                <input class="input" type="text" placeholder="メールアドレス">
            </div>
                <p class="help">メールアドレス用のエラーメッセージ</p>
            </div> 
            <a class="button is-info is-outlined">保存する</a>
         </div>
      </div>
      <label class="label heading">
          <span>icon</span>通知設定
      </label>
      <div class="columns">
         <div class="column">
             <div class="field">
                <div class="sb-label">Qiita からのお知らせ</div>
                <div>Qiitaからお知らせが届きます。</div>
                <div class="control lb">
                    <label class="radio">
                      <input type="radio" name="answer">
                       メール
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer">
                       ウェブ
                    </label>
                </div>
            </div>
         </div>
      </div>
      <hr>
      <div class="columns">
         <div class="column">
             <div class="field">
                <div class="sb-label">編集リクエスト</div>
                <div>自分の投稿した記事に編集リクエストが送られたときに通知されます。</div>
                <div class="control lb">
                    <label class="radio">
                      <input type="radio" name="answer">
                       メール
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer">
                       ウェブ
                    </label>
                </div>
            </div>
         </div>
      </div>
      <hr>
      <div class="columns">
         <div class="column">
             <div class="field">
                <div class="sb-label">コメント</div>
                <div>購読中の記事に新しくコメントが付いたときに通知されます。</div>
                <div class="control lb">
                    <label class="radio">
                      <input type="radio" name="answer">
                       メール
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer">
                       ウェブ
                    </label>
                </div>
            </div>
         </div>
      </div>
      <hr>
      <div class="columns">
         <div class="column">
             <div class="field">
                <div class="sb-label">いいね</div>
                <div>自分の投稿した記事やコメントがいいねされたときに通知されます。</div>
                <div class="control lb">
                    <label class="radio">
                      <input type="radio" name="answer">
                       メール
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer">
                       ウェブ
                    </label>
                </div>
            </div>
         </div>
      </div>
      <hr>
      <div class="columns">
         <div class="column">
             <div class="field">
                <div class="sb-label">フォロー</div>
                <div>自分がフォローされたときに通知されます。</div>
                <div class="control lb">
                    <label class="radio">
                      <input type="radio" name="answer">
                       メール
                    </label>
                    <label class="radio">
                      <input type="radio" name="answer">
                       ウェブ
                    </label>
                </div>
            </div>
         </div>
      </div>
    <a class="button is-info is-outlined">保存する</a>              
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
hr{
    background-color: #dbdbdb;
    border: none;
    display: block;
    height: 1px;
    margin: 1.5rem 0;
}
.heading{
    display: block;
    font-weight: bold;
    color: #555;
    margin: 40px 0 8px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-top: 1px solid #e8e8e8;
}
.lb{
    padding-top: 10px;
}
.sb-label{
    flex-basis: auto;
    max-width: 100%;
    color: #333;
    font-weight: bold;
    margin-bottom: 4px;
}
</style>