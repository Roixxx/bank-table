import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

//import alertMixin from "./mixins/alertMixin";


createApp(App)
	//.mixin(alertMixin)		// Глобальный микисин добавится во все компоненты (не очень хорошая практика)
	.mount('#app')
