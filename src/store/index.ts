import { reactive } from "vue";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import { Post, User } from "@/types";
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

 interface LoginUserState {
     ids: string[];
     all:Record<string, Post>;
     loaded: boolean;
     currentUserId?:string;
 }

 const initialLoginUserState = ():LoginUserState => ({
    ids: [],
    all: {},
    loaded: false,
    currentUserId: undefined
 })

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
    loginUser: LoginUserState;
    posts: PostsState;
}

const initialState = (): State => ({
    posts: initialPostsState(),
    loginUser: initialLoginUserState(),
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

         for (const post of response.data) {

               if(!this.state.posts.ids.includes(post.id.toString())) {
                   this.state.posts.ids.push(post.id.toString());
               }
               this.state.posts.all[post.id] = post;
         }
         this.state.posts.loaded = true;
    }

    async createPost(post: Post) {
        const response = await axios.post<Post>("/posts", post);
        this.state.posts.all[response.data.id] = response.data;
        this.state.posts.ids.push(response.data.id.toString());
    }

    // 文章の修正
    async updatePost(post: Post){
      const response = await axios.put<Post>("/posts", post);
      this.state.posts.all[response.data.id] = response.data;
    }

    // 新規アカウント
    async createUser(user:User) {
       const response = await axios.post<Post>("/users", user);
       this.state.loginUser.all[response.data.id] = response.data;
       this.state.loginUser.ids.push(response.data.id.toString());
       this.state.loginUser.currentUserId = response.data.id.toString();
       console.log(this.state);   
    }
}

const store = new Store(initialState());

export const useStore = () => store;