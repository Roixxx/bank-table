<template>


	<div class="card" v-if="task">

		<h2> {{task.name}} </h2>
		<h2> {{task}} </h2>
		<p><strong>Статус</strong>:
			<AppStatus :status="task.status"/>
		</p>

		<p><strong>Дэдлайн</strong>: {{ task.deadlineDate }}</p>
		<p><strong>Описание</strong>: Описание задачи</p>
		<div>
			<button class="btn" @click="handleStatus('В работе')">Взять в работу</button>
			<button class="btn primary">Завершить</button>
			<button class="btn danger">Отменить</button>
		</div>

	</div>

	<h3 v-else class="text-white center">
		Задачи с id {{ id }} нет.
	</h3>

</template>


<script>
import AppStatus from '../components/AppStatus'
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

export default {
	props: {
		"id": String,
	},

	setup(props) {
		const $store = useStore();

		let task = computed(() => $store.getters.tasks.find( el => el.id == props.id));

		function handleStatus(newStatus) {
			task.value.status = newStatus;

			$store.dispatch('changeTask', task.value);
		}

		onMounted(async ()=> {
			await $store.dispatch('getTasks')
		});


		return {
			task,
			handleStatus,
		}
	},

	components: {AppStatus}
}
</script>

<style scoped>

</style>