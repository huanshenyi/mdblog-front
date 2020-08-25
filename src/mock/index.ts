import moment from 'moment';
import { Post } from "@/types";

export const basePost: Post = {
    id: 1,
    title: "テストtitle",
    markdown: "テスト内容",
    html: "<p>テスト入力</p>",
    authorId: 1,
    created: moment(),
};

export const todayPost: Post = {
    ...basePost,
    id: 1,
    title: "今日テストtitle",
};

export const thisWeek: Post = {
    ...basePost,
    id: 2,
    title: "今週テストtitle",
    created: moment().subtract(2, "days"),
};

export const  thisMonth: Post = {
    ...basePost,
    id: 3,
    title: "今月テストtitle",
    created: moment().subtract(2, "weeks")
};