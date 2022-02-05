<template>
	<app-page title="Список заявок">

		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>

		<requestTable :requests="requests"/>

		<teleport to="body">
			<app-modal v-if="modal" title="Создать заявку" @close="modal = false">
				<request-modal-body @created="modal = false"/>
			</app-modal>
		</teleport>
	</app-page>
</template>

<script>

import appPage from "../AppPage";
import requestTable from "../components/request/RequestTable";
import { computed, ref } from "vue";
import AppModal from "../components/ui/AppModal";
import requestModalBody from "../components/request/RequestModalBody";
import { useStore } from "vuex";



export default {
	name: 'Home',

	setup() {
		const store = useStore();
		const modal = ref(false);

		const requests = computed(() => store.getters["requestAxiosModule/requests"])

		return {
			modal, requests
		}
	},

	components: {
		appPage,
		requestTable,
		AppModal,
		requestModalBody
	}
}

</script>
