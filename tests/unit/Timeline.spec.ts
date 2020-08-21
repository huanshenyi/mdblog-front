import { shallowMount, mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  it('Timelineのaタグの機能テスト', () => {
    const wrapper = mount(Timeline, {})
    // console.log(wrapper.html())
    // expect(1).toBe(1);
    // const periods = wrapper.findAll("a");
    // expect(periods.length).toBe(3);
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  })
})
