<template>

	<app-alert v-if="myAlert" title="Работаем в Composition API" type="primary" @close="close"></app-alert>
	<div class="card">
		<h2>ReusablePage</h2>

		<button class="btn primary" @click="toggle">{{myAlert ? 'Hide' : 'Show'}} msg</button>
		<button class="btn" @click="navigate">Go to homepage</button>
	</div>
</template>

<script>

import {useRouter} from 'vue-router';
import AppAlert from "../components/AppAlert";
import {useAlert} from "../use/alert";

export default {
	setup() {
		const router = useRouter();
		const navigate = () => router.push('/');

		const {alert: myAlert, toggle, close} = useAlert();			// myAlert можно писать своё название (деструктуризация объекта)

		return {
			myAlert,
			navigate,
			toggle,
			close
		}
	},
	components: {AppAlert}
}
</script>

<style scoped>

</style>