<template>

	<div class="container">

		<AppAlert :alert="alert" @close="alert = null"/>

		<div class="card">
			<h2>Работа с базой данных</h2>

			<form class="card" @submit.prevent="createPerson">
				<div class="form-control">
					<label for="name">Введите имя</label>
					<input type="text" id="name" v-model.trim="name">
				</div>

				<button class="btn primary" :disabled="name.length === 0">Создать</button>
			</form>

			<AppLoader v-if="loading"/>
			<AppPeopleList v-else :people="people" @load="loadPeople" @remove="removePerson"/>
		</div>
	</div>

</template>


<script>
import AppPeopleList from "./components/AppPeopleList";
import axios from 'axios';
import AppAlert from "./components/AppAlert";
import AppLoader from "./components/AppLoader";

export default {
	data() {
		return {
			name: '',
			db: 'https://vue-test-http-6a046-default-rtdb.europe-west1.firebasedatabase.app/',
			people: [],
			alert: null,
			loading: false,
		}
	},

	mounted() {
		this.loadPeople();
	},

	methods: {
		async createPerson() {

			const res = await fetch(this.db + 'people.json', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({firstName: this.name}),
			})

			const data = await res.json();
			this.people.push({
				firstName: this.name,
				id: data.name,
			})

			this.name = '';
		},

		async loadPeople() {

			try {
				this.loading = true;

				const {data} = await axios.get(this.db + 'people.json');
				if (!data) {
					throw new Error('Список людей пуст');
				}

				setTimeout(()=> {

					this.people = Object.keys(data).map(key => {
						return {
							id: key,
							firstName: data[key].firstName,
						}
					})

					this.loading = false;
				}, 1500)


			} catch (e) {
				this.alert = {
					type: 'danger',
					title: 'Ошибка',
					text: e.message,
				}
				this.loading = false;
			}

		},

		async removePerson(id) {

			try {
				const name = this.people.find(person => person.id === id).firstName;
				const url = this.db + 'people/' + id + '.json';

				await axios.delete(url);
				this.people = this.people.filter(person => person.id !== id);
				this.alert = {
					type: 'primary',
					title: 'Успешно!',
					text: `Пользователь ${name} был удалён`,
				}
			} catch (e) {
				// ошибка
			}
		}
	},

	components: {
		AppPeopleList,
		AppAlert,
		AppLoader,
	}
}


</script>


<style>

</style>
