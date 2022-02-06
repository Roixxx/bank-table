<template>
	<span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref } from "vue";

export default {
	name: "AppStatus",
	props: {
		type: {
			type: String,
			required: true,
		}
	},

	setup(props) {

		const classesMap =  {
			active: 'primary',
			cancelled: 'danger',
			done: 'primary',
			pending: 'warning',
		}

		const textMap = {
			active: 'Активен',
			cancelled: 'Отменён',
			done: 'Завершён',
			pending: 'Выполняется',
		}

		const className = ref(classesMap[props.type]);
		const text = ref(textMap[props.type]);


		return {
			className,
			text,
		}
	}
}
</script>
