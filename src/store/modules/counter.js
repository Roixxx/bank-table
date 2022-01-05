export default {
	//namespace: true,								// изолировать модуль

	state() {										// инициализация данных
		return {
			counter: 1,
		}
	},

	mutations: {
		increment(state, n = 1) {	 				// изменеие данных (асинхронно нельзя)
			state.counter += n;
		}
	},

	actions: {										// работа с асинхронностью
		incrementAsync(context, n = 1) {
			setTimeout(() => {
				context.commit('increment', n); 	// асинхронно добавим 10
			}, 150)
		}
	},

	getters: {										// получение данных
		counter(state) {
			if (state.counter > 20) {
				console.log('больше 20!')
			}

			return state.counter;
		},

		doubleCounter(_, getters) {
			return getters.counter * 2;
		}
	}
}