<template>
	<div class="container">

		<router-view></router-view>
		<app-message></app-message>
	</div>
</template>

<script>

import appMessage from "../components/ui/AppMessage";

export default {
	name: "AuthLayout",
	components: {appMessage},
}


</script>

