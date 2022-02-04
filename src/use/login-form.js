import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export function useLoginForm() {
	const store = useStore();
	const router = useRouter();
	const { handleSubmit, isSubmitting,} = useForm();

	const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
		'email',
		yup
			.string()
			.trim()
			.required('Введите email')
			.email('Необходмио ввести корректный email')
	);

	const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
		'password',
		yup
			.string()
			.trim()
			.required('Введите пароль')
			.min(6, 'Пароль не может быть меньше 6 символов')
	);

	const onSubmit = handleSubmit(async values => {
		await store.dispatch('authModule/login', values)
			.then(() => router.push('/'))
			.catch(e => e)

	})

	return {
		email, eError, eBlur,
		password, pError, pBlur,
		onSubmit,
		isSubmitting,
	}
}
