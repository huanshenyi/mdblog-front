import { reactive } from "vue";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import { Post } from "@/types";
import axios from "axios";

/**
 posts: {
    1: {id: 1, title: "今日", ....},
    2: {id: 2, title: "今日", ....},
    3: {id: 3, title: "今日", ....}
 } 
 */

 interface PostsState {
     ids: string[],
     all: Record<string, Post>,
     loaded: boolean;
 }

 const initialPostsState = (): PostsState => ({
     ids: [
        // todayPost.id.toString(),
        // thisWeek.id.toString(),
        // thisMonth.id.toString(),
     ],
     all: {
        // [todayPost.id]:todayPost,
        // [thisWeek.id]: thisWeek,
        // [thisMonth.id]: thisMonth
     },
     loaded: false
 })

interface State {
    posts: PostsState;
}

const initialState = (): State => ({
    posts: initialPostsState(),
})

class Store {
    protected state: State;

    constructor(initialState: State){
        this.state = reactive(initialState);
    }

    public getState(): State {
        return this.state;
    }

    async fetchPosts() {
         const response = await axios.get<Post[]>("/posts");
         const ids: string[] = [];
         // string をPost変換する
         const all: Record<number, Post> = {}
         for (const post of response.data) {
               ids.push(post.id.toString());
               all[post.id] = post;
         }
         this.state.posts = {
             ids,
             all,
             loaded: true
         }
    }
}

const store = new Store(initialState());

export const useStore = () => store;