import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'lab1',
    component: () => import('@/views/lab1/Lab1View.vue'),
    meta: {
      title: 'Lab 1'
    }
  },
  {
    path: '/lab2',
    name: 'lab2',
    component: () => import('@/views/Lab2View.vue'),
    meta: {
      title: 'Lab 2'
    }
  },
  {
    path: '/lab3',
    name: 'lab3',
    component: () => import('@/views/Lab3View.vue'),
    meta: {
      title: 'Lab 3'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
})

export default router
