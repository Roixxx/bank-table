<template>
	<div class="container">


		<div class="card">
			<div class="breadcrumbs" v-if="back">
				<router-link to="/">
					<button class="btn">На главную</button>
				</router-link>
			</div>

			<h1 class="card-title">
				{{ title }}
				<slot name="header"/>
			</h1>
			<slot/>

		</div>

	</div>

</template>

<script>

export default {
	props: {
		title: String,
		back: Boolean
	}
}
</script>
