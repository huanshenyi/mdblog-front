import { mount } from "@vue/test-utils";
import PostWriter from "@/components/PostWriter.vue";
import { basePost } from "@/mock";

describe("blogのwriterページのテスト", ()=>{
    it("テストblogの記入機能", ()=>{
         const wrapper = mount(PostWriter, {
           props: {
               post: {...basePost}
           }
         });
         wrapper.find('[data-test="post-title"]').setValue("test!!!");
         wrapper.find<HTMLDivElement>('[data-test="markdown"]').element.innerText = "## test内容";
         wrapper.find<HTMLDivElement>('[data-test="markdown"]').trigger("input");
         wrapper.find("[data-test='submit-post']").trigger("click")
         console.log(wrapper.emitted().save)
    })
})