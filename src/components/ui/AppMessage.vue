<template>
	<div :class="['alert', message.type]" v-if="message">
		<p class="alert-title">Внимание</p>
		<p>{{message.value}}</p>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "AppMessage",

	setup() {
		const store = useStore();
		const message = computed( () => store.getters.message);

		return {
			message,
		}
	}
}
</script>

<style scoped>

</style>
