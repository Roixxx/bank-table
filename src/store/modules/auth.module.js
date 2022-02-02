import axios from "axios";
const TOKEN_KEY = 'token';

export default {
	namespaced: true,		// локальные название
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY),
			api: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.VUE_APP_FB_KEY}`,
		}
	},
	getters: {
		token(state) {
			return state.token;
		},
		isAuth(_, getters) {
			return !!getters.token;
		},
		api(state) {
			return state.api;
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			localStorage.setItem(TOKEN_KEY, token)
		},
		logout(state) {
			state.token = null;
			localStorage.removeItem(TOKEN_KEY)
		},
	},
	actions: {
		async login({ commit, getters }, payload) {
			console.log(getters.api)
			const { data } = await axios.post(getters.api, payload).catch(e => {
				console.log(e)
			})


			//commit('setToken', 'test');
		},
	}
}
