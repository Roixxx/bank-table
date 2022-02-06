<template>

	<app-loader v-if="loading"/>
	<app-page v-else title="Список заявок">

		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>

		<requestFilter v-model="filter"/>
		<requestTable :requests="requests"/>

		<teleport to="body">
			<app-modal v-if="modal" title="Создать заявку" @close="modal = false">
				<request-modal-body @created="modal = false"/>
			</app-modal>
		</teleport>
	</app-page>
</template>

<script>

import appPage from "../components/ui/AppPage";
import requestTable from "../components/request/RequestTable";
import { computed, onMounted, ref, watch } from "vue";
import AppModal from "../components/ui/AppModal";
import requestModalBody from "../components/request/RequestModalBody";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader";
import requestFilter from "../components/request/RequestFilter";



export default {
	name: 'Home',

	setup() {
		const store = useStore();
		const modal = ref(false);
		const filter = ref({});
		let loading  = ref(false);

		onMounted(async () => {
			loading.value = true;
			await store.dispatch('requestAxiosModule/load');
			loading.value = false;
		})

		const requests = computed(() => {

			return store.getters["requestAxiosModule/requests"]
				.filter(item => {
					if (filter.value.name) {
						return item.fio.includes(filter.value.name);
					}
					return item;
				})
				.filter(item => {
					if (filter.value.status) {
						return filter.value.status === item.status;
					}
					return item;
				})

		})

		return {
			modal, requests, loading, filter
		}
	},

	components: {
		appPage,
		requestTable,
		AppModal,
		requestModalBody,
		AppLoader,
		requestFilter,
	}
}

</script>
