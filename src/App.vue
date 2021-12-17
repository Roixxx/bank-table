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

		</div>
	</div>

</template>


<script>


export default {
	data() {
		return {
			name: '',
			db: 'https://vue-test-http-6a046-default-rtdb.europe-west1.firebasedatabase.app/people.json',
		}
	},

	methods: {
		async createPerson() {

			const res = await fetch(this.db, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({firstName: this.name }),
			})

			const data = await res.json();

			this.name = '';
			console.log(data)
		}
	}
}


</script>




<style>

</style>
