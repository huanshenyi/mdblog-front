import { Moment } from 'moment';

// TimeLineページで使用、今後修正予定
export type Period = "今日" | "今週" | "今月";

export interface Post {
    id: number,
    title: string,
    markdown: string,
    html: string,
    authorId: number,
    created: Moment
}