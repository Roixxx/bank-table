<template>

	<form class="card" @submit.prevent="handleSubmit">

		<h1>Создать новую задачу</h1>

		<div class="form-control">
			<label for="title">Название</label>
			<input v-model="taskName" type="text" id="title">
		</div>

		<div class="form-control">
			<label for="date">Дата дэдлайна</label>
			<input v-model="deadlineDate" type="date" id="date">
		</div>

		<div class="form-control">
			<label for="description">Описание</label>
			<textarea v-model="description" id="description"></textarea>
		</div>

		<button :disabled="checkForm" class="btn primary">Создать</button>
	</form>

</template>


<script>

import {ref, computed} from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'


export default {


	setup(props, context) {
		const $store = useStore();
		const $router = useRouter();

		const taskName = ref('');
		const deadlineDate = ref('');
		const description = ref('');

		const generateId = computed(() => Math.floor(100000 + Math.random() * 900000));
		const checkForm = computed(() => {
			return !(taskName.value && deadlineDate.value && description.value)
		});

		function handleSubmit() {
			createTask();
			$router.push('/');
		}

		async function createTask() {

			const task = {
				id: generateId.value,
				name: taskName.value,
				deadlineDate:  new Date(deadlineDate.value).toLocaleDateString(),
				description: description.value,
				status: 'Активен',
			}

			const res = await fetch($store.getters.db, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(task),
			})

			$store.state.tasks.push(task)
		}

		return {handleSubmit, checkForm, taskName, deadlineDate, description}
	}
}

</script>










