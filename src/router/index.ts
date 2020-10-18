import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import { useStore } from "@/store";

import UserEditor from "@/views/UserEditor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: () => import('../views/NewPost.vue'),
    // meta: {
    //   requiresAuth: true,
    // }
  },
  {
    path: '/posts/:id',
    name: "ShowPost",
    component: () => import('../views/ShowPost.vue')
  },
  {
    path: '/posts/:id/edit',
    name: "EditPost",
    component: () => import('../views/EditPost.vue'),
    // meta: {
    //   requiresAuth: true,
    // }
  },
  {
    path: '/books',
    name: 'Books',
   component: () => import('../views/Books.vue') 
  },
  {
    path: '/book/:id',
    name: "Book",
    component: () => import('../views/Book.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user/editor/',
    name: 'UserEditor',
    component: UserEditor,
    redirect: "/user/editor/main",
    children: [
       {
        path: "/user/editor/main",
        name: "Main",
        component: () => import("../components/userEditor/Main.vue")          
       },
       {
        path: "/user/editor/email",
        name: "EditorEmail",
        component: () => import("../components/userEditor/EditorEmail.vue")
       }
    ]
  },
  {
    path: '/channellist',
    name: 'ChannelList',
    component: () => import('../views/ChannelList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// ルートのフィルター
router.beforeEach((to, from, next) => {
  const store = useStore();
  if(to.meta.requiresAuth && !store.getState().loginUser.currentUserId){
    next({name:"Home"})
  }else{
    next();
  }
})

export default router
