<template>
	<div class="container">
		<div class="card">
			<h2> {{ $i18n('app.title') }}</h2>

			<button class="btn" @click="changeLang">Переключить язык</button>
		</div>

	</div>
</template>

<script>



export default {

	data() {
		return {

		}
	},

	methods: {
		changeLang() {
			this.changeI18N('en');
			this.$forceUpdate();
		}
	},

	inject: ['changeI18N'],

	components: {

	}
}
</script>

