import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/header.scss'
import "@/assets/scss/content.scss"
import "@/assets/scss/footer.scss"
import "@/assets/scss/acc_block.scss"
import "@/assets/scss/product_block.scss"
import "@/assets/scss/catalog.scss"

createApp(App).use(router).mount('#app')
