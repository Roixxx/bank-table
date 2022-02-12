<template>
	<the-navbar />
	<TheSidebar/>
	<div class="container with-nav">
		<router-view/>
		<appMessage/>
	</div>

</template>

<script>

import TheNavbar from "../components/TheNavbar";
import appMessage from "../components/ui/AppMessage";
import TheSidebar from "../components/TheSidebar";


export default {
	components: {TheNavbar, appMessage, TheSidebar}
}
</script>

<style scoped>

</style>
