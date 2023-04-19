<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()


// 页面url修改为/home,显示/home对应的组件
function toHome() {
  // 路由跳转 && 设置参数
  router.push({
    path: '/Home',
    // query: { // ?name=xxx&age=xx
    //   id: 123,
    // },
  })
}

// 页面url修改为/home,显示/home对应的组件
function toCenter() {
  // 路由跳转 && 设置参数
  router.push({
    path: '/Center',
  })
}


</script>

<template>
  <button @click="toHome">
    跳转到Home
  </button>
  <button @click="toCenter">
    跳转到Center
  </button>
  <p>
    <router-link to="/Home">点我也可以去Home</router-link>
    <br/>
    <router-link to="/Center">点我也可以去Center</router-link>
  </p>
  <router-view></router-view>
 
</template>

<style scoped>
</style>
