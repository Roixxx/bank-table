<template>
  <span :class="['badge', statusClass]"> {{status}} </span>
</template>

<script>


import {computed} from "vue";

export default {
	setup(props) {
		const statusClass = {
			'Активен': 'primary',
			'В работе': '',
			'Отменён': 'danger',
			'Выполняется': '',
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