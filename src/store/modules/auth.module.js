import axios from "axios";
import { error } from "../../utils/error";
const TOKEN_KEY = 'token';

export default {
	namespaced: true,		// локальные название
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY),
			api: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`,
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
		async login({ commit, getters, dispatch }, payload) {

			await axios.post(getters.api, {...payload, returnSecureToken: true})
				.then(res => commit('setToken', res.data.idToken))
				.catch(e => {
					dispatch('setMessage', {
						value: error(e.response.data.error.message),
						type: 'danger',
					}, {root: true})
					throw new Error();
				})

		},
	}
}
