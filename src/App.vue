<template>
	<div class="container">
		<div class="card">
			<h2 v-color="myColor">Разговор про директивы</h2>
			<div class="form-control">
				<label for="inp">Активный по умолчанию</label>
				<input type="text" id="inp" v-focus>
			</div>

			<button class="btn" @click="myColor = 'green'">Сменить цвет</button>


		</div>

	</div>
</template>

<script>



export default {

	data() {
		return {
			myColor: 'darkred',
		}
	},

	directives: {
		focus: {
			mounted(el) {
				el.focus();
			}
		},
		color: {
			mounted(el, binding) {
				el.style.color = binding.value;
			},

			updated(el, binding) {
				el.style.color = binding.value;
			}
		}
	},

	components: {

	}
}
</script>

