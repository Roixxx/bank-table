<template>
	<app-page back title="Помощь">

		<div v-for="question in questions" :key="question.title">
			<QuestionItem :question="question" />
		</div>
	</app-page>
</template>

<script>

import appPage from "../components/ui/AppPage";
import QuestionItem from "../components/question/QuestionItem";


export default {
	name: 'Home',

	setup() {


		const questions = [
			{title: 'Что есть в данной системе?', text: 'Lorem Lorem Lorem Lorem'},
			{title: 'Как тут работает авторизация?', text: 'Lorem Lorem Lorem Lorem'}
		]

		return {
			questions,
		}
	},

	components: {
		appPage, QuestionItem
	}
}
</script>
