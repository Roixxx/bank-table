<template>
	<div class="container">
		<div class="card">
			<h2 v-color:[type].myBlink="myColor">Разговор про директивы</h2>
			<div class="form-control">
				<label for="inp">Активный по умолчанию</label>
				<input type="text" id="inp" v-focus>
			</div>

			<button class="btn" @click="myColor = 'green'">Зеленый цвет</button>
			<button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color' ">Переключить тип</button>
			{{type}}

		</div>

	</div>
</template>

<script>



export default {

	data() {
		return {
			myColor: 'darkred',
			type: 'color',
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
				el.style[binding.arg] = binding.value;
				
				let flag = true;
				if (binding.modifiers.myBlink) {
					setInterval( () => {

						el.style.color = flag ? '#fff' : binding.instance.myColor;
						flag = !flag;
					}, 1000)
				}
			},

			updated(el, binding) {
				el.style[binding.arg] = binding.value;
			}
		}
	},

	components: {

	}
}
</script>

