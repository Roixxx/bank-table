<template>
	<AppLoader v-if="loading"/>
	<AppPage title="Заявка" :back="true" v-else-if="request">
		<p><strong>ФИО:</strong> {{ request.fio }}</p>
		<p><strong>Телефон:</strong> {{ request.tel }}</p>
		<p><strong>Сумма:</strong> {{ currency(request.sum) }}</p>
		<p><strong>Статус:</strong> <AppStatus :type="request.status"/></p>
	</AppPage>

	<h3 v-else class="text-center text-white">
		Заявки с {{ id }} нет.
	</h3>
</template>


<script>

import AppPage from "../components/ui/AppPage";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader";
import AppStatus from "../components/ui/AppStatus";
import { currency } from "../utils/currency";



export default {

	setup() {
		const route = useRoute();
		const store = useStore()
		const loading = ref(false);
		const id = route.params.id;
		let request = ref(null);

		onMounted(async () => {
			loading.value = true;

			request.value = await store.dispatch('requestAxiosModule/loadById', id)

			loading.value = false;
		})

		return {
			loading, request, id, currency
		}
	},

	name: "Request",
	components: {
		AppPage, AppLoader, AppStatus
	}

}
</script>

