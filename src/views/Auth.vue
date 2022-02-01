<template>
	<div class="container">
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
					<input type="password" name="pass" v-model="pass" @blur="pBlur">
					<small v-if="pError"> {{ pError }} </small>
				</label>
			</div>

			<button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
			<div class="text-danger" v-if="isTooManyAttempts">Вы слишком часто пытаетесь войти в систему</div>
		</form>
	</div>

</template>

<script>


import { useLoginForm } from "../use/login-form";

export default {
	setup() {
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
