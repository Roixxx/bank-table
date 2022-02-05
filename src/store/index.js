import { createStore, createLogger } from 'vuex'
import authModule from "./modules/auth.module";
import requestAxiosModule from "./modules/request.module"

const plugins = [];

if (process.env.NODE_ENV === 'development') {
	plugins.push(createLogger());
}

export default createStore({
	plugins,
	state() {
		return {
			message: null,
		}
	},

	getters: {
		message(state) {
			return state.message;
		}
	},
	mutations: {
		setMessage(state, message) {
			state.message = message;
		},
		clearMessage(state) {
			state.message = null;
		}
	},
	actions: {
		setMessage({commit}, message) {
			commit('setMessage', message);
			setTimeout(() => commit('clearMessage'), 5000)
		}
	},
	modules: {authModule, requestAxiosModule}
})

