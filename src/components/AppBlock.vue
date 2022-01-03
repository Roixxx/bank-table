<template>
	<div class="container">


		<app-alert
			v-if="alert"
			text="Текст 12345678900-"
			title="Внимание!"
			@close="toggleAlert"
		/>

		<div class="card">
			<button class="btn primary" @click="toggleAlert">{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
		</div>
	</div>
</template>

<script>

import AppAlert from "./AppAlert";
import alertMixin from "../mixins/alertMixin";

export default {
	mixins: [alertMixin],           // локальный миксин
	components: {
		AppAlert,
	}
}
</script>

