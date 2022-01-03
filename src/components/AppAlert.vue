<template>
	<div class="alert" :class="type">
		<p class="alert-title">{{title}}</p>
		<p>{{text}}</p>
		<button class="btn" :class="type" v-if="closable" @click="$emit('close')">Закрыть</button>
	</div>
</template>

<script>



export default {
	props: {
		text: String,
		title: String,
		closable: {
			type: Boolean,
			required: false,
			default: false,
		},
		type: {
			type: String,
			required: false,
			default: 'primary',
			validator(value) {
				return ['primary', 'danger', 'warning'].includes(value)
			}
		}
	},

	emits: ['close'],
}
</script>

<style scoped>

</style>