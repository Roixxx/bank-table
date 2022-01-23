<template>
	<div v-if="!tasks.length">
		<h1 class="text-white center">Задач пока нет</h1>
	</div>

	<div v-else>
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
	</div>




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



		onMounted(async () => {
			await $store.dispatch('getTasks')

		})

		return {
			tasks: computed(() => $store.getters.tasks)
		}
	},


	components: {AppStatus}
}
</script>
