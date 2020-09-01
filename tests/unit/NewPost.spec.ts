import {mount} from "@vue/test-utils";
import NewPost from "@/views/NewPost.vue";
import { useStore } from "@/store";
import { Post } from '@/types';

const mockRoutest:any[] = [];

jest.mock("vue-router", ()=>({
    useRouter: () => ({
        push: (url:string) => {
          mockRoutest.push(url);
        },
    })
}));

jest.mock("axios", () => ({
    post: (url:string, payload: Post) => {
        return { data: payload};
    }
}))

describe("新規blog追加ページ", ()=>{
   it("新規blogテスト", async ()=>{
       const store = useStore();
       const wrapper = mount(NewPost, {
           global: {
               provide: {store}
           }
       });
       expect(store.getState().posts.ids).toHaveLength(0);
       await wrapper.find("[data-test='submit-post']").trigger("click");
       await wrapper.vm.$nextTick();
       expect(store.getState().posts.ids).toHaveLength(1);
       expect(mockRoutest).toEqual(["/"]);
       
   })
});