import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),  // hash 模式
  // history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/home', // 路由跳转可以用path
      name: 'home', // 路透跳转也可以用设置的name
      component: import(`../components/Home.vue`),
    },
    {
      path: '/center',
      name: 'center', // 
      component: import(`../components/Center.vue`),
    },
    { // 重定向，当页面url为/时，跳转到/home
      path: '/',
      redirect: '/home',
    },
  ]
})

export default router
