<template>
	<the-navbar />
	<div class="container with-nav">
		<router-view/>
		<appMessage/>
	</div>

</template>

<script>

import TheNavbar from "../components/TheNavbar";
import appMessage from "../components/ui/AppMessage";

export default {
	components: {TheNavbar, appMessage}
}
</script>

<style scoped>

</style>
