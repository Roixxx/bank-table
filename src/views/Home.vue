<template>
	<app-page title="Список заявок">

		<template #header><button class="btn primary">Создать</button> </template>

		<requestTable :requests="[]"/>
	</app-page>
</template>

<script>

import appPage from "../AppPage";
import requestTable from "../components/request/RequestTable";


export default {
	name: 'Home',

	components: {
		appPage,
		requestTable
	}
}
</script>
