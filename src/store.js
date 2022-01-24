import {createStore} from 'vuex';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, update} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC3Bdzddj_V35eVWyiTGnFZloalsSBfo9g",
	authDomain: "vue-test-http-6a046.firebaseapp.com",
	databaseURL: "https://vue-test-http-6a046-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "vue-test-http-6a046",
	storageBucket: "vue-test-http-6a046.appspot.com",
	messagingSenderId: "668847144591",
	appId: "1:668847144591:web:54e073d83a685cd14afafa"
};

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);



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
		},

		activeTasks(state) {
			return state.tasks.filter(task => task.status === 'Активна').length;
		}
	},

	actions: {
		async getTasks(context) {

			const data = await fetch(context.getters.db)
				.then(res => res.json())
				.then(res => {

					return Object.keys(res).map(key => {
						return {
							key: key,
							...res[key],
						}
					})
				})

			context.commit('setTasks', Object.values(data));
		},

		async changeTask(context, task) {
			const statusLink = `/tasks/${task.key}/status`;
			update(ref(db), {[statusLink]: task.status })
		}
	},

	mutations: {
		setTasks(state, data) {

			state.tasks = data;
		},

	}
})