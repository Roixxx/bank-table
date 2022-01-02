<template>
	<form @submit.prevent="submitHandler" class="card card-w30">
		<div class="form-control">
			<label for="type">Тип блока</label>

			<select id="type" v-model="fieldType">
				<option value="Title">Заголовок</option>
				<option value="Subtitle">Подзаголовок</option>
				<option value="Avatar">Аватар</option>
				<option value="Text">Текст</option>
			</select>
		</div>

		<div class="form-control">
			<label for="value">Значение</label>
			<textarea v-model="fieldValue" id="value" rows="3"></textarea>
		</div>

		<button :disabled="fieldValue.length < 3" class="btn primary">Добавить</button>
	</form>
</template>

<script>

export default {
	data() {
		return {
			fieldType: 'Title',
			fieldValue: '',
		}
	},

	methods: {
		submitHandler() {
			this.$emit('addItem', {fieldType: this.fieldType, fieldValue: this.fieldValue});
			this.fieldValue = '';
			
		}
	},

	emits: ['addItem'],
}

</script>

<style scoped>

</style>