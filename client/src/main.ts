import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import initAuth from './auth/initSuperTokens'
import { en, de } from './intl'

console.log('en', en)

const vuetify = createVuetify({
  components,
  directives
})

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: { en, de }
})
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(i18n)

initAuth()

app.mount('#app')
