<template>

	<div class="container">
		<div class="card">
			<h2>Работа с базой данных</h2>

			<form class="card" @submit.prevent="createPerson">
				<div class="form-control">
					<label for="name">Введите имя</label>
					<input type="text" id="name" v-model.trim="name">
				</div>

				<button class="btn primary" :disabled="name.length === 0">Создать</button>
			</form>

			<AppPeopleList :people="people" @load="loadPeople" @remove="removePerson"/>
		</div>
	</div>

</template>


<script>
import AppPeopleList from "./components/AppPeopleList";
import axios from 'axios';

export default {
	data() {
		return {
			name: '',
			db: 'https://vue-test-http-6a046-default-rtdb.europe-west1.firebasedatabase.app/',
			people: [],
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
				body: JSON.stringify({firstName: this.name }),
			})

			const data = await res.json();
			this.people.push({
				firstName: this.name,
				id: data.name,
			})

			this.name = '';
		},

		async loadPeople() {
			const { data } = await axios.get(this.db + 'people.json');
			const result = Object.keys(data).map( key => {
				return {
					id: key,
					firstName: data[key].firstName,
				}
			})

			this.people = result;
		},

		async removePerson(id) {

			const url = this.db + 'people/' + id + '.json';
			await axios.delete(url);

		}

	},

	components: {
		AppPeopleList,
	}
}


</script>




<style>

</style>
