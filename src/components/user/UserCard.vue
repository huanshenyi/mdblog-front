<template>
    <div>
        <!-- ユーザーデータを表示するメインブロック -->
        <div class="box">
        <article class="media">
            <div class="media-left">
            <figure class="image is-96x96">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png" alt="Image" class="icon">
            </figure>
            </div>
            <div class="media-content">
            <div class="content">
                <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <span class="">
                            <p>33</p>
                            <p>投稿</p>
                        </span>
                    </div>
                    <div class="level-item">
                        <span class="">
                            <p>1266</p>
                            <p>いいね</p>
                        </span>
                    </div>
                    <div class="level-item">
                        <span class="">
                            <p>12</p>
                            <p>フォロー</p>
                        </span>
                    </div>
                </div>
                <div class="level-right">
                   <a class="button is-info is-outlined" @click="editorUser">プロフィールを編集する</a>
                </div>
            </nav>
            </div>
        </article>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: "UserCard",
    setup(){
        const route = useRoute();
        const router = useRouter();
        const userId = route.params["id"];
        const editorUser = ()=>{
            //  router.push(`/user/editor/${userId}`);
            router.push(`/user/editor/`);
        }
        return { editorUser }
    }
})
</script>
<style scoped>
.icon{
    border-radius: 50%;
}
.level-item{
    text-align: center;
    width: 80px;
}
</style>