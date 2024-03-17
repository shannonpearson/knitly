import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import initAuth from './auth/initSuperTokens'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)

initAuth()

app.mount('#app')
