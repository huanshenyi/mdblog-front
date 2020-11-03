<template>
    <div>
        <div class="columns">
            <div class="column">
                <!-- 記事のタイトル -->
                <div class="field">
                    <!-- <div class="label">blog title</div> -->
                    <div class="control">
                        <input data-test="post-title" type="text" v-model="title" class="input" placeholder="タイトルを入力してください">            
                    </div>
                </div>
                <!-- 記事のタグ -->
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" placeholder="タグを入力ください">        
                    </div>
                </div>
            </div>
        </div>
        <!-- write && show-->
        <div class="columns">
            <div class="column is-one-half">
                <div
                 class="color-border"
                 contenteditable
                 id="markdown"
                 ref="contenteditable"
                 @input="handleEdit"
                 data-test="markdown"
                 />
            </div>
            <div class="column is-one-half">
                <div v-html="html" class="color-border"/>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <!-- ボタンの切替 -->
                <div class="dropdown is-up is-pulled-right"
                 @click="dropdownactive" :class="{'is-active': active}" ref="activeref">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span class="icon is-small">
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <a href="#" class="dropdown-item" @click="savereport">
                            下書き保存
                        </a>
                        <a href="#" class="dropdown-item" @click="postreport"> 
                            記事を投稿
                        </a>
                        <a href="#" class="dropdown-item" @click="registerpost">
                            ミニブック登録
                        </a>
                        </div>
                    </div>
                </div>
                <!-- 保存ボタン -->
                <button data-test="submit-post" class="button is-primary is-pulled-right" @click="handleSubmit">
                    {{buttonValue}}   
                </button>
                <!-- キャンセルボタン -->
                <button
                 @click="$router.go(-1)"
                 class="button is-danger"
                >
                 キャンセル
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { Post } from "@/types";
import { parse, MarkedOptions } from "marked";
import { highlightAuto } from "highlight.js"
import debounce from "lodash/debounce";
import AppVue from '@/App.vue';
import useClickOutside from '@/utils/useClickOutside';

export default defineComponent({
    name: "PostWriter",
    components: {},
    props: {
        post: {
            type: Object as () => Post,
            required: true
        },
    },
    setup(props, ctx){
      const title = ref(props.post.title);
      const contenteditable = ref<null | HTMLDivElement>(null);
      const markdown = ref(props.post.markdown);
      const html = ref("");

      const handleEdit = ()=>{
          //@ts-ignore
          markdown.value = contenteditable.value.innerText;
      };

      const options: MarkedOptions = {
          highlight: (code:string) => highlightAuto(code).value,
      }

      // 入力内容を保存
      const handleSubmit = () => {
        if (buttonValue.value == '下書き保存') {
            // 親コンポネントに渡す
            const post: Post = {
                ...props.post,
                title:title.value,
                markdown: markdown.value,
                html: html.value,
            }
            ctx.emit("save", post)
        }else if(buttonValue.value == '記事を投稿') {
            console.log('記事を投稿');
        }else if(buttonValue.value == 'ミニブック登録'){
            console.log('ミニブック登録')
        }
      }
      
      // 入力内容の延時表示
      const update = debounce((value: string) => {
          html.value = parse(value, options);
      }, 450)
      
      // immediate: true => レンダリング時に一回実行される
      watch(()=> markdown.value, (value) => update(value), {immediate: true})

      onMounted(() => {
        //@ts-ignore
        contenteditable.value.innerText = markdown.value;
      })
      // ボタン選択用のリストをアクティブ化
      const active = ref(false);
      const activeref = ref<null | HTMLElement>(null);
      const isClickOutside = useClickOutside(activeref)
      const dropdownactive = ()=> {
        active.value = !active.value;
      }
      if(active.value && isClickOutside.value) {
          active.value = false
      }
      watch(isClickOutside, ()=>{
        if(active.value && isClickOutside.value) {
            active.value = false
        }
      })
      // ボタン選択の文字変換
      const buttonValue = ref('記事を投稿');
      const savereport = ()=>{
          buttonValue.value = '下書き保存';
      }
      const postreport = ()=>{
          buttonValue.value = "記事を投稿";
      }
      const registerpost = ()=>{
          buttonValue.value = 'ミニブック登録';
      }
      
      return { 
          title, 
          contenteditable,
          handleEdit,
          markdown,
          html,
          handleSubmit,
          dropdownactive,
          active,
          activeref,
          buttonValue,
          savereport,
          postreport,
          registerpost
       };
    }
})
</script>
<style scoped lang="css">
.color-border{
   padding: 10px; 
   border:1px solid #00d1b2 ;
   border-radius: 5px;
   height: 600px;
   overflow:scroll;
   overflow-x:hidden;
}
h2 { 
   font-size: medium !important;
   font-weight: normal !important;
}
</style>