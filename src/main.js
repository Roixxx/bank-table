import { createApp } from 'vue'
import { router } from "./router";
import { store } from "./store";
import App from './App.vue'

import './theme.css'


<<<<<<< Updated upstream

createApp(App)
	.use(router)
	.use(store)
=======
createApp(App)

>>>>>>> Stashed changes
	.mount('#app')
