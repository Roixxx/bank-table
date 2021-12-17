<template>

	<div class="form-control">
		<label :for="id"> {{ label }} </label>

		<input type="text" :id="id" :placeholder="placeholder" :value="value" @input="change">

		<small v-if="error">{{ error }}</small>
	</div>

</template>

<script>
export default {
	emits: ['update:value'],

	props: {
		value: String,
		placeholder: String,
		label: String,
		error: String,
	},

	methods: {
		change() {
			this.$emit('update:value', event.target.value)
		}
	},

	data() {
		return {
			id: 'input-' + Math.random(),
		}
	}
}
</script>

<style scoped>

</style>
