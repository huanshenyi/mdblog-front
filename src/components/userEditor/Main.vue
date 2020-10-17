<template>
    <div class="main">
      <div class="titles">
          <a href="">icon</a>
          <a href="">username</a>
          <span>/</span>
          <span>公開用プロフィール</span>
      </div>
      <!-- ここからはform -->
      <div class="columns">
          <!-- 名前 -->
          <div class="column">
            <div class="field">
                <label class="label">名前</label>
                <div class="control">
                    <input class="input" type="text" placeholder="名">
                </div>
                <p class="help">This is a help text</p>
            </div>
          </div>
          <div class="column">
              <div class="field">
                <label class="label">&nbsp;</label>
                <div class="control">
                    <input class="input" type="text" placeholder="姓">
                </div>
                <p class="help">This is a help text</p>
              </div>
          </div>
      </div>
      <div class="columns">
          <div class="column">
             <div class="field">
                <label class="label">公開メールアドレス</label>
                <div class="control">
                    <label class="radio">
                    <input type="radio" name="question">
                    メールアドレスを全体に公開する
                    </label>
                    <p class="help">
                        誰もがあなたのメールアドレス(xx@gmail.com)を見れる状態になります。
                         <span><a href="">メールアドレスを変更</a></span>
                    </p>
                </div>
            </div>
          </div>
      </div>
      <div class="columns">
          <div class="column">
                <div class="field">
                <label class="label">サイト/ブログ</label>
                <div class="control">
                    <input class="input" type="text" placeholder="url">
                </div>
              </div>
          </div> 
      </div>
      <div class="columns">
          <div class="column">
                <div class="field">
                  <label class="label">所属している組織・企業</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="所属している組織・企業">
                  </div>
              </div>
          </div> 
      </div>
      <div class="columns">
          <div class="column">
                <div class="field">
                  <label class="label">居住地</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="居住地">
                  </div>
              </div>
          </div> 
      </div>
      <div class="columns">
          <div class="column">
            <div class="field">
            <label class="label">自己紹介</label>
            <div class="control">
                <textarea class="textarea" placeholder="自己紹介"></textarea>
            </div>
            <p class="help">200文字以内</p>
            </div>              
          </div>
      </div>
      <div class="columns">
          <div class="column">
              <button class="button is-link is-outlined">更新する</button>  
          </div>
      </div>        
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Main",
    components: {},
    setup() {

    }
})
</script>
<style scoped>
.main{
    flex-grow: 1;
    min-width: 0;
    margin-left: 16px;
    background-color: #fff;
    border: 1px solid transparent;
    padding: 16px; 
}
.titles {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 24px;
    margin-bottom: 32px;
}
</style>