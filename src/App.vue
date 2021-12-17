<template>
	<div class="container">
		<form class="card" @submit.prevent="submitHandler">
			<h1>Форма</h1>

			<app-input placeholder="Введи имя" :error="errors.name" label="Как тебя зовут?" v-model:value="name"></app-input>

			<div class="form-control">
				<label for="age">Выбери возраст</label>
				<input v-model.number="age" type="number" max="99" id="age">
			</div>

			<div class="form-control">
				<label for="city">Твой город</label>
				<select id="city" v-model="city">
					<option value="spb">Санкт-Петербург</option>
					<option value="msk">Москва</option>
					<option value="kzn">Казань</option>
					<option value="nsk">Новосибирск</option>
				</select>
			</div>

			<div class="form-checkbox">
				<span class="label">Готов к переезду в Токио?</span>
				<div class="checkbox">
					<label><input v-model="relocate" type="radio" name="trip" value="yes"/> Да</label>
				</div>

				<div class="checkbox">
					<label><input v-model="relocate" type="radio" name="trip" value="no"/> Нет</label>
				</div>
			</div>

			<div class="form-checkbox">
				<span class="label">Что знаешь во Vue?</span>
				<div class="checkbox">
					<label><input v-model="skills" value="vuex" name="skills" type="checkbox"/> Vuex</label>
				</div>
				<div class="checkbox">
					<label><input v-model="skills" value="cli" name="skills" type="checkbox"/> Vue CLI</label>
				</div>
				<div class="checkbox">
					<label><input v-model="skills" value="Router" name="skills" type="checkbox"/> Vue Router</label>
				</div>
			</div>

			<button type="submit" class="btn primary">Отправить</button>
		</form>
	</div>
</template>

<script>

import AppInput from "./components/AppInput";

export default {

	data() {
		return {
			name: '',
			age: '21',
			city: 'msk',
			relocate: null,
			skills: [],
			errors: {
				name: null,
			}
		}
	},

	methods: {

		formIsValid() {

			if (this.name.length === 0) {

				this.errors.name = "Введите имя"
				return false;

			} else {
				this.errors.name = null;
				return true;
			}

		},

		submitHandler() {

			if ( this.formIsValid() ) {
				console.log(this.name)
				console.log(this.age)
				console.log(this.city)
				console.log(this.relocate)
				console.log(this.skills)
			}
		}
	},

	components: {AppInput}
}


</script>

<style>
	small {
		color: red;
	}
</style>
