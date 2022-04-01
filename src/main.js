import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'

createSSRApp(App).use(router).mount('#app')