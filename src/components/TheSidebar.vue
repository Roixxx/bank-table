<template>
	<div class="sidebar" v-if="sidebar">
		<span class="sidebar-close" @click="close">&times;</span>

		<div class="sidebar-content">
			<p>
				Добро пожаловть в систему по учёту заявок в нашем банке.
			</p>
			<p>Здесь вы найдёте исчерпывающую информацию про систему и заявки</p>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "TheSidebar",

	setup() {
		const store = useStore();

		const sidebar = computed(() => store.getters.sidebar);
		const close = () => store.commit('closeSidebar');

		return {
			sidebar,
			close,
		}
	}
}
</script>

<style scoped>

</style>
