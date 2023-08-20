import { createApp } from 'vue'
import MealsApp from './MealsApp.vue'
import './index.css'
import router from "./urls_path/urls.js"
import store from './store'

createApp(MealsApp)
.use(router)
.use(store)
.mount('#app')
