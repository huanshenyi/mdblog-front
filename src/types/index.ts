import { Moment } from 'moment';
import { Periodtest } from './Timeline-type'

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

export interface User {
    id: number,
    username: string,
    email?: string,
    password: string,
    password2?: string,
    rule?: string,
}

// export {
//     Periodtest
// }