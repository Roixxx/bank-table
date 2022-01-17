<template>
<!--	<h1 class="text-white center">Задач пока нет</h1>-->


	<h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>

	<ul>
		<li class="card" v-for="task in tasks">
			<h2 class="card-title">
				{{ task.name }}
				<AppStatus :status="task.status"/>
			</h2>

			<p>
				<strong>
					<small>
						{{ task.deadlineDate }}
					</small>
				</strong>
			</p>

			<p>{{task.description}}</p>

			<router-link :to="{ path: `/task/${task.id}` }" >
				<button class="btn primary">Посмотреть</button>
			</router-link>

		</li>

	</ul>



</template>

<script>
import AppStatus from '../components/AppStatus'
import {ref, computed} from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import {onMounted} from "vue";

export default {

	setup() {
		const $store = useStore();
		const tasks = computed(() => $store.getters.tasks);

		async function loadTasks() {
			const data = await fetch($store.getters.db)
				.then(res => res.json());

			const tasksArr = Object.values(data);
			$store.commit('setTasks', tasksArr);
		}

		onMounted(async () => {
			await loadTasks();

		})

		return {tasks}
	},


	components: {AppStatus}
}
</script>
