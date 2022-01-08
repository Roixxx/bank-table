<template>
	<div class="container">
		<div class="card">
			<h1>Vue Composition Api</h1>
			<hr>
			<p>Название: <strong>{{ name }}</strong></p>
			<p>Версия: <strong>{{ version }}</strong></p>

			<button class="btn" @click="changeInfo">Изменить</button>
		</div>
	</div>
</template>

<script>

import {ref, reactive, toRefs} from 'vue';  // reactive только для объектов
									// ref для всего остального

export default {
	setup() {
		const name = ref('VueJS');
		const version = ref(3);

		// const myObj = reactive({						< работа с объектом
		// 	name: 'VueJs',
		// 	version: 3,
		// })

		function changeInfo() {
			name.value = 'Vue lalal';
			version.value = 'Vue 4';

			// myObj.name = 'vue js';					< работа с объектом
			// myObj.version = 42;
		}

		return {

			//...toRefs(myObj),							< работа с объектом

			name,
			version,
			changeInfo
		}
	},

	// data() {
	// 	return {
	// 		name: 'VueJS',
	// 		version: 3
	// 	}
	// },
	// methods: {
	// 	changeInfo() {
	// 		this.name = 'Vue JS!'
	// 		this.version = 4
	// 	}
	// }
}
</script>