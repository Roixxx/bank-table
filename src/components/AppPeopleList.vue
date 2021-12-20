<template>
	<div v-if="people.length !== 0">
		<div class="card inline" v-for="person in people" :key="person.id">
			Имя: {{person.firstName}}
			<button class="btn danger" @click="$emit('remove', person.id)">Удалить</button>
		</div>
	</div>

	<div class="card center" v-else>
		<button class="btn" @click="$emit('load')">Загрузить</button>
	</div>

</template>

<script>


export default {
	emits: ['load', 'remove'],

	props: ['people']
}


</script>

<style scoped>
	.inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
