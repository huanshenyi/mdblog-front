import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { nextTick } from 'vue';
import flushPromises from "flush-promises"
import * as mockData from "@/mock";

//jestでmockデータを取得
jest.mock("axios", ()=> ({
  get: (url:string) => ({
    data: [mockData.todayPost, mockData.thisWeek, mockData.thisMonth],
  })
}))

describe('Home.vue', () => {

  // it('Home非同期の処理1', () => {
  //   const wrapper = mount({
  //     template: `<Suspense><Home/></Suspense>`
  //   });
  // })
  
  it('ロード動画テスト', () => {
    const wrapper = mount(Home, {});
    expect(wrapper.find("[data-test='progress']").exists()).toBe(true);
  })

  it('Homeのaタグの存在テスト', async () => {
    const wrapper = mount(Home, {});
    await flushPromises();
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  })

  it("Homeのaタグの切替機能のテスト", async () => {
    const wrapper = mount(Home, {});
    await flushPromises();
    const $today = wrapper.findAll("[data-test='period']")[0];
    expect($today.classes()).toContain("is-active");

    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    // 今週のタグをクリック
    await $thisWeek.trigger("click");
    //Domの更新を待つ
    // await nextTick();
    expect($today.classes()).not.toContain("is-active");
    expect($thisWeek.classes()).toContain("is-active");

    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    await $thisMonth.trigger("click");
    // await nextTick();
    expect($thisWeek.classes()).not.toContain("is-active");
    expect($thisMonth.classes()).toContain("is-active");

  });

  it('Homeのpostのデータロードテスト', async () => {
    const wrapper = mount(Home);
    await flushPromises();
    expect(wrapper.findAll("[data-test='post']")).toHaveLength(1);

    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    await $thisWeek.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(2);

    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    await $thisMonth.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(3);
  })
})
