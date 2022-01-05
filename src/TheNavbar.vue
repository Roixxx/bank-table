<template>
	<header class="navbar">
<!--	Vuex - Счетчик : {{ $store.getters.counter }}-->
		Vuex - Счетчик : {{ counter }}


		<button class="btn" @click="add">Добавить 2</button>
	</header>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';


export default {


	computed: {
		...mapGetters(['counter'])
	},

	methods: {

		...mapMutations(['increment']),

		add() {
			this.increment(2);
		}
	}

}
</script>
