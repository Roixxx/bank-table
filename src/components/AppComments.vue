<template>
	<div class="container">

		<p v-if="!loaded && !loadingAnimation">
			<button class="btn primary" @click="loadComments()">Загрузить комментарии</button>
		</p>


		<div class="card" v-if="loaded">
			<h2>Комментарии</h2>
			<ul class="list" v-for="comment in comments">
				<li class="list-item">
					<div>
						<p><strong>{{comment.email}}</strong></p>
						<small>{{comment.text}}</small>
					</div>
				</li>
			</ul>
		</div>


		<div v-if="loadingAnimation" class="loader"></div>
	</div>
</template>

<script>



export default {

	data() {
		return {
			comments: [{email: 'test@microsoft.com',text: 'Text text 21412'},{email: 'test@microsoft.com',text: 'Text text 21412'},{email: 'test@microsoft.com',text: 'Text text 21412'},{email: 'test@microsoft.com',text: 'Text text 21412'}],
			loaded: false,

			loadingAnimation: false,
		}
	},

	methods: {
		loadComments() {

			this.loadingAnimation = true;

			setTimeout(() => {
				this.loaded = true;
				this.loadingAnimation = false;
			}, 1000);

		}
	},

}


</script>

<style scoped>

</style>