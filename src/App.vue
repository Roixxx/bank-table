<template>
	<the-navbar></the-navbar>
	<div class="container with-nav">
		<div class="card">
			<h1>Про Vuex</h1>
			<h2>Счетчик: {{ counter }}</h2>
			<h4>Счетчик x2: {{ doubleCounter }}</h4>
			<button class="btn" @click="add">Добавить 1</button>
			<button class="btn danger" @click="addAsync">Добавить 10 (асинхронно)</button>
		</div>
	</div>
</template>

<script>
import TheNavbar from './TheNavbar';
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {

	computed: {
		...mapGetters(['counter', 'doubleCounter']),
		// $store.getters.counter
	},

	methods: {
		...mapMutations(['increment']),
		//...mapMutations({add: 'increment'}),            	//упрощение
		...mapActions(['incrementAsync']),

		add() {
			//this.$store.commit('increment'); 				// вызов мутации increment
			this.increment();
		},

		addAsync() {
			//this.$store.dispatch('incrementAsync', 10);	// вызов через actions
			this.incrementAsync(10);
		}
	},

	components: {TheNavbar},
}
</script>
