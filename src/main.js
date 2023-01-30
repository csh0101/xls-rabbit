import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import infiniteScroll from 'vue3-infinite-scroll-good'
const app = createApp(App);
app.use(router)
app.use(infiniteScroll)
app.mount('#app')




