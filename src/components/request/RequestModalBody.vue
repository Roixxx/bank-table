<template>
	<form @submit.prevent="onSubmit">
		<div class="form-control">
			<label>
				ФИО
				<input type="text" v-model="fio" @blur="fioBlur">
				<small v-if="fioError"> {{ fioError }} </small>
			</label>

			<label>
				Телефон
				<input type="number" v-model.number="tel" @blur="telBlur">
				<small v-if="telError"> {{ telError }} </small>
			</label>

			<label>
				Сумма
				<input type="number" v-model.number="sum" @blur="sumBlur">
				<small v-if="sumError"> {{ sumError }} </small>
			</label>

			<label>
				Статус
				<select v-model="state">
					<option>Активен</option>
					<option>Выполняется</option>
					<option>Завершён</option>
					<option>Отменён</option>
				</select>
			</label>

			<button class="btn" type="submit" :disabled="isSubmitting">Создать</button>

		</div>
	</form>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";

export default {
	setup() {
		const { handleSubmit, isSubmitting } = useForm();

		const { value: fio, errorMessage: fioError, handleBlur: fioBlur } = useField('fio',
			yup
				.string()
				.trim()
				.required('Введите ФИО')
				.min(3, 'Минимум 3 символа')
		);

		const { value: tel, errorMessage: telError, handleBlur: telBlur } = useField('tel',
			yup
				.string()
				.required('Введите телефон')
				.min(11, 'Минимум 11 цифр')
		);

		const { value: sum, errorMessage: sumError, handleBlur: sumBlur } = useField('sum',
			yup
				.string()
				.required('Введите сумму')
		);
		const { value: state } = useField('state');


		const onSubmit = handleSubmit(async values => {
			console.log(values)
		})

		return {
			onSubmit, isSubmitting,
			fio, fioError, fioBlur,
			tel, telError, telBlur,
			sum, sumError, sumBlur,
			state
		}
	}
}
</script>

<style scoped>
	.btn {
		margin-top: 15px;
	}
	label {
		margin-bottom: 20px;
	}

	input, select {
		margin-top: 5px;
	}
</style>
