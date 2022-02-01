export default {
	namespaced: true,		// локальные название
	state() {
		return {
			token: null,
		}
	},
	getters: {
		token(state) {
			return state.token;
		},
		isAuth(_, getters) {
			return !!getters.token;
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			localStorage.setItem('token', token)
		},
		logout(state) {
			state.token = null;
			localStorage.removeItem('token')
		},
	},
	actinons: {
		async login({ commit }, payload) {
			console.log(payload)
			commit('setToken', 'test');
		},
	}
}
