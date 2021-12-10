<template>
	<div class="container pt-1">
		<div class="card">
			<h2>Slots</h2>
		</div>

		<AppBlock>
			<!-- #text - сокращение v-slot -->
			<template #text>
				<p>Это самый важный текст для блока</p>
			</template>

			<template v-slot:header>
				<h3>Это заголовок</h3>
			</template>
		</AppBlock>

		<AppList>

			<!-- это всё просто шаблон слота | {i, item} - распаковка обекта ES6   -->
			<template #numbers-slot="{i, item}">

				<span style="color: orange">
					<strong> Index {{ i }}: </strong>
					{{ item }}
				</span>
				<span> Текст слота </span>

			</template>
		</AppList>

	</div>
</template>

<script>


import AppBlock from "./components/AppBlock";
import AppList from "./components/AppList";

export default {




	components: {
		AppBlock, AppList,
	}
}


</script>


<style scoped lang="scss">



</style>
