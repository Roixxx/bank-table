<template>
  <span :class="['badge', statusClass]"> {{status}} </span>
</template>

<script>


import {computed} from "vue";

export default {
	setup(props) {
		const statusClass = {
			'Активна': 'primary',
			'В работе': 'warning',
			'Отменена': 'danger',
			'Завершена': 'primary',
		}

		return {
			status: computed(() => props.status),
			statusClass: computed(() => {
				return statusClass[props.status];
			}),
		}
	},

	props: {
		status: String,
	}
}





</script>