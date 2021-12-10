<template>

	<div class="card">
		<ul>
			<li v-for="(item, i) in 5">
				<slot :item="item" :i="i" name="numbers-slot"></slot>
			</li>
		</ul>
	</div>

</template>

<script>
export default {
	name: "AppList.vue"
}
</script>

<style scoped>

</style>
