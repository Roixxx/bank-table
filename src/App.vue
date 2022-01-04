<template>

	<the-navbar :visible="isAuth"></the-navbar>

	<div class="container with-nav">
		<router-view></router-view>
	</div>

</template>

<script>
import TheNavbar from './components/TheNavbar'


export default {
	components: {TheNavbar},

	data() {
		return {
			isAuth: false,
		}
	},

	methods: {
		login() {
			this.isAuth = true;

			if (this.$route.query.page) {
				this.$router.push(this.$route.query.page); // если есть страрая страницы в query параметре
			} else {
				this.$router.push('/dashboard');		// по умолчанию
			}


		},

		logout() {
			this.isAuth = false;
			this.$router.push({
				path: '/login',
				query: {
					page: this.$route.path    // запоминаем с какой страницы выходим
				}
			});
		}
	},

	provide() {
		return {
			login: this.login,
			logout: this.logout,

			emails: [
				{id: 1, theme: 'Купил себе PlayStation 5'},
				{id: 2, theme: 'Выучил Vue Router'},
				{id: 3, theme: 'Хочу изучить весь Vue'},
				{id: 4, theme: 'А следующий блок про Vuex!'},
				{id: 5, theme: 'А что там на счет Vue Hooks?'}
			]
		}
	}
}
</script>

<style>
</style>
