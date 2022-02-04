<template>
	<div class="container">

		<div class="card">
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
	}
}
</script>
