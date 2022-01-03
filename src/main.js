import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App)
	// .directive('focus', {       глобальная регистрация директивы
	// 	mounted(el) {
	// 		el.focus();
	// 	}
	// })
	.mount('#app')
