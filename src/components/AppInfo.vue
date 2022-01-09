<template>
	<div class="card">
		<p>Название: <strong>{{ name }}</strong></p>
		<p>Версия: <strong>{{ version }}</strong></p>
		<p>Версия: <strong>{{ compVersion }}</strong></p>
		<p>providedStr: {{ providedStr }}</p>

		<button class="btn warning" @click="changeBack">Изменить обратно</button>
	</div>
</template>

<script>

import {computed, inject} from "vue";

export default {


	setup(props, context) {

		function change() {
			context.emit('change', 3);
		}


		return {
			compVersion: computed(() => props.version + ' (computed val)'),
			changeBack: change,
			providedStr: inject('providedStr'),
		}
	},

	emits: ['change'],
	props: ['name', 'version']
}
</script>

<style scoped>

</style>