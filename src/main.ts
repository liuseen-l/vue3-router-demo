import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'

const app = createApp(App)

app.use(router) // 注册路由
app.mount('#app')
