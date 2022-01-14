<template>
<<<<<<< Updated upstream
	<header class="navbar">
		<strong>Vue Composition Api</strong>
		<ul class="navbar-menu">
			<li><router-link to="/">Главная</router-link></li>
			<li><router-link to="/reusable">Переиспользование + Vuex</router-link></li>

		</ul>
	</header>
	<div class="container with-nav ">
		<router-view></router-view>
=======
	<the-navbar></the-navbar>

	<div class="container with-nav">
		<router-view/>
>>>>>>> Stashed changes
	</div>

</template>

<script>
<<<<<<< Updated upstream
</script>
=======
import TheNavbar from './components/TheNavbar'

export default {
	components: {
		TheNavbar
	}
}

</script>

<style>

</style>
>>>>>>> Stashed changes
