import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

const app = createApp(App);

const ru = {
	app: {
		title: 'Плагины во vue'
	}
}

const en = {
	app: {
		title: 'Plugins in vue'
	}
}

app.use({
	install(app, options) {

		let curr = 'ru'

		function changeLang(name) {
			curr = name;
		}

		app.config.globalProperties.$i18n = key => {

			return key.split('.').reduce((words, k) => {
				return words[k] || 'error';
			}, options[curr]);
		}

		app.provide('changeI18N', changeLang);
	}
}, {ru, en});

app.mount('#app');