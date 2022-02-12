<template>
	<div class="filter">

		<div class="form-control">
			<input v-model="name" type="text" placeholder="Поиск по ФИО">
		</div>

		<div class="form-control">
			<select v-model="status">
				<option value="" disabled>Выбрать статус</option>
				<option value="done">Завершён</option>
				<option value="cancelled">Отменён</option>
				<option value="active">Активен</option>
				<option value="pending">Выполняется</option>
			</select>
		</div>

		<button class="btn warning" v-if="isActive" @click="reset"> Сбросить фильтры </button>
	</div>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
	name: "RequestFilter",

	emits: ['update:modelValue'],
	props: ['modalValue'],

	setup(_, {emit}) {
		const name = ref('');
		const status = ref('');
		const isActive = computed(() => name.value || status.value)

		const reset = function() {
			name.value = '';
			status.value = '';
		}

		watch([name, status], values => {
			emit('update:modelValue', {
				name: values[0],
				status: values[1],
			})
		});

		return {
			name,
			status,
			isActive,
			reset,
		}
	}
}
</script>

<style scoped>

</style>
