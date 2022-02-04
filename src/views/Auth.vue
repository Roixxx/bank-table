<template>

	<form class="card" @submit.prevent="onSubmit">

		<h1>Войти в хату &#128682;</h1>

		<div :class="['form-control', {invalid: pError}]">
			<label>
				Почта
				<input type="email" name="login" placeholder="email@mail.ru" v-model="email" @blur="eBlur">
				<small v-if="eError"> {{ eError }} </small>
			</label>
		</div>
		<div :class="['form-control', {invalid: pError}]">
			<label>
				Пароль
				<input type="password" name="password" v-model="password" @blur="pBlur">
				<small v-if="pError"> {{ pError }} </small>
			</label>
		</div>

		<button class="btn primary" type="submit" :disabled="isSubmitting">Войти</button>
	</form>


</template>

<script>


import { useLoginForm } from "../use/login-form";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { error } from "../utils/error";

export default {
	setup() {
		const route = useRoute();
		const store = useStore();
		const queryMsg = route.query.msg;

		if (queryMsg) {

			store.dispatch('setMessage', {
				value: error(queryMsg),
				type: 'warning',
			})
		}

		return {...useLoginForm()}
	}
}
</script>

<style scoped>
	.form-control {
		max-width: 400px;
		margin-bottom: 20px;
	}
</style>
