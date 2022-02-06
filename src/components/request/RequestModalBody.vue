<template>
	<form @submit.prevent="onSubmit">
		<div class="form-control" :class="{invalid: fioError}">
			<label>
				ФИО
				<input type="text" v-model="fio" @blur="fioBlur">
				<small v-if="fioError"> {{ fioError }} </small>
			</label>
		</div>
		<div class="form-control" :class="{invalid: telError}">
			<label>
				Телефон
				<input type="number" v-model.number="tel" @blur="telBlur">
				<small v-if="telError"> {{ telError }} </small>
			</label>
		</div>
		<div class="form-control" :class="{invalid: sumError}">
			<label>
				Сумма
				<input type="number" v-model.number="sum" @blur="sumBlur">
				<small v-if="sumError"> {{ sumError }} </small>
			</label>
		</div>
		<div class="form-control">
			<label>
				Статус
				<select v-model="status">
					<option value="active">Активен</option>
					<option value="pending">Выполняется</option>
					<option value="done">Завершён</option>
					<option value="cancelled">Отменён</option>
				</select>
			</label>
		</div>

		<button class="btn" type="submit">Создать</button>

	</form>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";


export default {
	setup(_, {emit}) {
		const store = useStore()

		emits: ['created'];

		const { handleSubmit } = useForm({
			initialValues: {
				status: 'active',
			}
		});

		const { value: fio, errorMessage: fioError, handleBlur: fioBlur } = useField('fio',
			yup.string()
				.trim()
				.required('Введите ФИО')
				.min(3, 'Минимум 3 символа')
		);

		const { value: tel, errorMessage: telError, handleBlur: telBlur } = useField('tel',
			yup.string()
				.required('Введите телефон')
				.min(11, 'Минимум 11 цифр')
		);

		const { value: sum, errorMessage: sumError, handleBlur: sumBlur } = useField('sum',
			yup.number()
				.required('Введите сумму')
				.min(0, "Сумма не может быть меньше 0")
		);
		const { value: status } = useField('status');

		const onSubmit = handleSubmit(async values => {
			await store.dispatch('requestAxiosModule/create', values);
			emit('created');
		})

		return {
			onSubmit,
			fio, fioError, fioBlur,
			tel, telError, telBlur,
			sum, sumError, sumBlur,
			status
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
