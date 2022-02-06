<template>
	<div class="container">


		<div class="card">
			<h1 class="card-title">
				{{ title }}
				<slot name="header"/>
			</h1>
			<slot/>

			<div class="breadcrumbs" v-if="back">
				<router-link to="/">
					<button class="btn">На главную</button>
				</router-link>
			</div>
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
