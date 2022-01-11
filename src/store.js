import {createStore} from "vuex";

export const store = createStore({
	state() {
		return {
			title: 'This is Vuex + Composition API   '
		}
	},

	getters: {
		appTitle(state) {
			return state.title.trim();
		}
	}
})