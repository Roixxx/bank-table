<template>
	<button class="btn" :class="color" @click="$emit('action')">
		<slot></slot>
	</button>
</template>

<script>

export default {
	props: {

		color: {
			type: String,
			default: '',
			validator(value) {
				return ['', 'primary', 'danger'].includes(value);  // валидация
			}
		}
	}
}

</script>
