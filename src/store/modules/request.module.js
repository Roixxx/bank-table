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
		},

		async load({commit, dispatch}) {
			const token = store.getters['authModule/token'];

			await axios.get(`/requests.json?auth=${token}`)
				.then( res => {
					const requests = Object.keys(res.data).map(id => ({...res.data[id], id}));
					commit('setRequests', requests)
				})
				.catch( e => [
					dispatch('setMessage', {
						value: e.message,
						type: 'danger',
					}, {root: true})
				]);
		},

		async loadById( {commit, dispatch}, id ) {
			const token = store.getters['authModule/token'];
			let data = null;

			await axios.get(`/requests/${id}.json?auth=${token}`)
				.then( res => data = res.data)
				.catch( e => [
					dispatch('setMessage', {
						value: e.message,
						type: 'danger',
					}, {root: true})
				]);
			return data;
		},

		async remove( {dispatch}, id ) {
			const token = store.getters['authModule/token'];

			await axios.delete(`/requests/${id}.json?auth=${token}`)
				.then( () => {
					dispatch('setMessage', {
						value: 'Заявка удалена',
						type: 'primary'
					}, {root: true})
				})
				.catch( e => [
					dispatch('setMessage', {
						value: e.message,
						type: 'danger',
					}, {root: true})
				]);
		},

		async update( { dispatch }, request ) {
			const token = store.getters['authModule/token'];

			await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
				.then( () => {
					dispatch('setMessage', {
						value: 'Заявка обновлена',
						type: 'primary'
					}, {root: true})
				})
				.catch( e => [
					dispatch('setMessage', {
						value: e.message,
						type: 'danger',
					}, {root: true})
				]);
		},
	}
}
