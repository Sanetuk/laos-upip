import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// Import language files
import en from './locales/en.json'
import ko from './locales/ko.json'

// Get user's preferred language from localStorage or browser settings
const savedLanguage = localStorage.getItem('userLanguage')
const browserLanguage = navigator.language.split('-')[0]
const defaultLanguage = savedLanguage || (browserLanguage === 'ko' ? 'ko' : 'en')

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: defaultLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    ko
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
