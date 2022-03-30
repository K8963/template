import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/userLogin.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
