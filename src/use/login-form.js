import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import { useStore } from 'vuex'

export function useLoginForm() {

	const store = useStore();
	const { handleSubmit, isSubmitting, submitCount } = useForm();

	const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
		'email',
		yup
			.string()
			.trim()
			.required('Введите email')
			.email('Необходмио ввести корректный email')
	);

	const { value: pass, errorMessage: pError, handleBlur: pBlur } = useField(
		'pass',
		yup
			.string()
			.trim()
			.required('Введите пароль')
			.min(6, 'Пароль не может быть меньше 6 символов')
	);

	const isTooManyAttempts = computed(() => submitCount.value >= 3);

	watch(isTooManyAttempts, val => {
		if (val) {
			setTimeout(() => submitCount.value = 0, 2000)
		}
	})

	const onSubmit = handleSubmit(async values => {
		await store.dispatch('authModule/login', values);
	})

	return {
		email, eError, eBlur,
		pass, pError, pBlur,
		onSubmit,
		isSubmitting,
		isTooManyAttempts
	}
}
