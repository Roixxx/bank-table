<template>
	<AppLoader v-if="loading"/>
	<AppPage title="Заявка" :back="true" v-else-if="request">
		<p><strong>ФИО:</strong> {{ request.fio }}</p>
		<p><strong>Телефон:</strong> {{ request.tel }}</p>
		<p><strong>Сумма:</strong> {{ currency(request.sum) }}</p>
		<p><strong>Статус:</strong> <AppStatus :type="request.status"/></p>

		<p><strong>Обновить статус:</strong></p>
		<div class="form-control upd-status">

			<select v-model="status">
				<option value="active">Активен</option>
				<option value="pending">Выполняется</option>
				<option value="done">Завершён</option>
				<option value="cancelled">Отменён</option>
			</select>

		</div>

		<button class="btn primary" @click="update" v-if="hasChanges">Обновить</button>
		<button class="btn danger" @click="remove">Удалить заявку</button>

	</AppPage>

	<h3 v-else class="text-center text-white">
		Заявки с {{ id }} нет.
	</h3>
</template>


<script>

import AppPage from "../components/ui/AppPage";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader";
import AppStatus from "../components/ui/AppStatus";
import { currency } from "../utils/currency";




export default {

	setup() {
		const route = useRoute();
		const router = useRouter();
		const store = useStore();
		const loading = ref(false);
		const id = route.params.id;
		const status = ref();
		let request = ref(null);

		const remove = async () => {
			await store.dispatch('requestAxiosModule/remove', id)
				.then(() => router.push('/'))
		}

		const update = async () => {
			const data = {...request.value, status: status.value, id: id}
			await store.dispatch('requestAxiosModule/update', data);
			request.value.status = status.value;

		}

		const hasChanges = computed(() => request.value.status !== status.value);

		onMounted(async () => {
			loading.value = true;

			request.value = await store.dispatch('requestAxiosModule/loadById', id)
			status.value = request.value?.status;

			loading.value = false;
		})

		return {
			loading, request, id, currency,
			remove, update, status,
			hasChanges,
		}
	},

	name: "Request",
	components: {
		AppPage, AppLoader, AppStatus
	}

}
</script>

