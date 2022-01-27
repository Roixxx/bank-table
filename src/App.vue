<template>
	<component :is="metaLayout + 'Layout'" v-if="metaLayout"></component>
</template>

<script>

import mainLayout from "./layout/MainLayout";
import authLayout from "./layout/AuthLayout";
import { computed } from "vue";
import { useRoute } from "vue-router";


export default {
	setup() {
		const route = useRoute();


		return {
			metaLayout: computed(() => route.meta.layout)
		}
	},

	components: {mainLayout, authLayout}
}

</script>

<style>

</style>
