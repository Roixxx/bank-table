import axios from '../../axios/request'
import store from "../index";


export default {
	namespaced: true,

	state() {
		return {
			requests: [],
		}
	},

	getters: {
		requests(state) {
			return state.requests;
		}
	},

	mutations: {
		setRequests(state, requests) {
			state.requests  = requests;
		},
		addRequest(state, request) {
			state.requests.push(request);
		}
	},

	actions: {
		async create( { commit, dispatch }, payload ) {
			const token = store.getters['authModule/token'];

			await axios.post(`/requests.json?auth=${token}`, payload)
				.then(res => {

					console.log(res.data);
					commit('addRequest', {...payload, id: res.data.name})

					dispatch('setMessage', {
						value: 'Заявка успешно создана',
						type: 'primary',
					}, {root: true})

				})
				.catch( e => [
					dispatch('setMessage', {
						value: e.message,
						type: 'danger',
					}, {root: true})
				]);

		}
	}
}
