import axios from "axios";
const TOKEN_KEY = 'token';

export default {
	namespaced: true,		// локальные название
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY),
			endpoint: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]',
		}
	},
	getters: {
		token(state) {
			return state.token;
		},
		isAuth(_, getters) {
			return !!getters.token;
		},
		endpoint(state) {
			return state.endpoint;
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
			console.log(process)
			//await axios.post(getters.endpoint);
			//commit('setToken', 'test');
		},
	}
}
