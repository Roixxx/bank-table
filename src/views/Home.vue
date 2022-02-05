<template>
	<app-page title="Список заявок">

		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>

		<requestTable :requests="[]"/>

		<teleport to="body">
			<app-modal v-if="modal" title="Создать заявку" @close="modal = false">
				<request-modal-body/>
			</app-modal>
		</teleport>
	</app-page>
</template>

<script>

import appPage from "../AppPage";
import requestTable from "../components/request/RequestTable";
import { ref } from "vue";
import AppModal from "../components/ui/AppModal";
import requestModalBody from "../components/request/RequestModalBody";


export default {
	name: 'Home',

	setup() {
		const modal = ref(false);

		return {
			modal,
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
