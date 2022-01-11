<template>
	<app-alert v-if="alert" title="Работаем в Composition API" type="primary" @close="close"></app-alert>
	<div class="container with-nav ">
		<div class="card">
			<h1>Vue Composition Api</h1>
			<button class="btn primary" @click="toggle">{{alert ? 'Hide' : 'Show'}} Alert</button>
			<hr>
			<p>Название: <strong>{{ name }}</strong></p>
			<p>Версия: <strong>{{ version }}</strong></p>
			<p>Версия: <strong>{{ compVersion }}</strong></p>

			<div class="form-control">
				<input type="text" ref="textInput" placeholder="ref">
				<input type="text" v-model="firstName" placeholder="firstName (v-model)" >
			</div>

			<button class="btn" @click="changeInfo">Изменить</button>
		</div>



		<app-info :name="name" :version="version" @change="change"></app-info>
	</div>
</template>

<script>

import {ref, reactive, toRefs, computed, watch, provide, onMounted} from 'vue';  // reactive только для объектов, ref для всего остального

import AppInfo from "../components/AppInfo";
import AppAlert from "../components/AppAlert";
import {useAlert} from "../use/alert";

export default {
	setup() {											// Composition Api заменяет data, methods, computed, watch
		const name = ref('VueJS');
		const version = ref(3);
		const textInput = ref(null);
		const firstName = ref('');				// работа с v-model

		// const myObj = reactive({						// работа с объектом
		// 	name: 'VueJs',
		// 	version: 3,
		// })

		function changeInfo() {
			name.value = 'Vue новая версия';
			version.value = 'Vue 4';
			console.log(textInput.value)				// работа с ref dom элементом
		}

		function change(n) {
			version.value = n;							// emit из AppInfo
		}

		const compVersion = computed(() => {
			return version.value + ' (computed val)'
		})

		watch(compVersion, (newVal, oldVaL) => {	// следим за изменениями

		})

		provide('providedStr', 'Строка из provide');

		onMounted(() => {
			console.log('Mounted!')
		});

		return {
			//...toRefs(myObj),
			name,
			version,
			compVersion,
			textInput,
			firstName,
			changeInfo,
			change,
			...useAlert(true),	//const {alert: myAlert, toggle, close} = useAlert();

		}
	},

	components: {AppInfo, AppAlert}

}
</script>