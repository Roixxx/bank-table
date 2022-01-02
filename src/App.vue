<template>
	<div class="container column">


		<AppFormControl @addItem="addItem" />

		<AppCard :fields="fields" />

		

	</div>
	<AppComments></AppComments>

</template>

<script>

import AppFormControl from "./components/AppFormControl";
import AppCard from "./components/AppCard";
import AppComments from "./components/AppComments";



export default {

	data() {
		return {

			fields: [],
		}
	},


	methods: {
		addItem(field) {
			this.fields.push(field);
		}
	},

	components: {
		AppFormControl,
		AppCard,
		AppComments,
	},

}

</script>



<style>
.avatar {
	display: flex;
	justify-content: center;
}

.avatar img {
	width: 150px;
	height: auto;
	border-radius: 50%;
}
</style>
