import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: () => import('../views/NewPost.vue')
  },
  {
    path: '/posts/:id',
    name: "ShowPost",
    component: () => import('../views/ShowPost.vue')
  },
  {
    path: '/posts/:id/edit',
    name: "EditPost",
    component: () => import('../views/EditPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
