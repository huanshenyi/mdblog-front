import { shallowMount, mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'
import { nextTick } from 'vue';

describe('Timeline.vue', () => {
  it('Timelineのaタグの存在テスト', () => {
    nextTick();
    const wrapper = mount(Timeline, {});
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  })

  it("Timelineのaタグの切替機能のテスト", async () => {
    const wrapper = mount(Timeline, {});
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

  it('Timelineのpostのデータロードテスト', async () => {
    const wrapper = mount(Timeline, {});
    expect(wrapper.findAll("[data-test='post']")).toHaveLength(1);

    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    await $thisWeek.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(2);

    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    await $thisMonth.trigger("click");

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(3);
  })
})
