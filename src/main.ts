import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import store from './store/index'
import 'element-plus/dist/index.css'
createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')
