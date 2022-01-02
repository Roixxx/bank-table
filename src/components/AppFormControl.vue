<template>
	<form @submit.prevent="$emit('addItem')" class="card card-w30">
		<div class="form-control">
			<label for="type">Тип блока</label>

			<select id="type" v-model="fieldType">
				<option value="title">Заголовок</option>
				<option value="subtitle">Подзаголовок</option>
				<option value="avatar">Аватар</option>
				<option value="text">Текст</option>
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
			fieldType: 'title',
			fieldValue: '',
		}
	},


	methods: {
		submitHandler() {
			this.$emit('addItem', {fieldType: this.fieldType, fieldValue: this.fieldValue});
			this.fieldValue = '';
			
		}
	},

	emits: {
		addItem: ({type, val}) => {
			return (type && val);   // валидация, должен вернруть true
		}
	},

}

</script>

<style scoped>

</style>