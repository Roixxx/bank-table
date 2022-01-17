import {createStore} from 'vuex';


export default createStore({
	state() {
		return {
			db: 'https://vue-test-http-6a046-default-rtdb.europe-west1.firebasedatabase.app/',
			tableName: 'tasks.json',
			tasks: [],
		}
	},

	getters: {
		db(state) {
			return state.db + state.tableName;
		},

		tasks(state) {
			return state.tasks;
		}
	},

	mutations: {
		setTasks(state, loadedTasks) {

			state.tasks = loadedTasks;
		}
	}
})