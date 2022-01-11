<template>

	<app-alert v-if="alert" title="Работаем в Composition API" type="primary" @close="close"></app-alert>
	<div class="card">

		<h2>ReusablePage + Vuex</h2>
		<h3>{{ appTitle }}</h3>

		<button class="btn primary" @click="toggle">{{alert ? 'Hide' : 'Show'}} msg</button>
		<button class="btn" @click="navigate">Go to homepage</button>
	</div>
</template>

<script>

import {useRouter} from 'vue-router';
import AppAlert from "../components/AppAlert";
import {useAlert} from "../use/alert";
import {useStore} from 'vuex';										// Для compositon api

export default {
	setup() {
		const router = useRouter();
		const navigate = () => router.push('/');

		//const {alert: myAlert, toggle, close} = useAlert();		// myAlert можно писать своё название (деструктуризация объекта)
																	// либо через массив

		const store = useStore();									// Для compositon api

		return {
			navigate,
			...useAlert(),
			appTitle: store.getters.appTitle.toUpperCase(),
		}
	},
	components: {AppAlert}
}
</script>

<style scoped>

</style>