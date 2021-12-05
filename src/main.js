import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader'
import './theme.css'

const app = createApp(App)

app.component('the-header', TheHeader)

app.mount('#app')
