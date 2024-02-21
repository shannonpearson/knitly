import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import initAuth from './auth/initSuperTokens'

const app = createApp(App)

app.use(router)

initAuth()

app.mount('#app')
