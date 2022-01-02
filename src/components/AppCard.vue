<template>
	<div class="card card-w70">

		<div v-if="fields.length" v-for="(field, i) in fields" :key="i">
		
			<component :is="`App${field.fieldType}Field`" :value="field.fieldValue"></component>
		</div>
		
		

		<h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
	</div>
</template>

<script>

import AppTitleField from './fields/AppTitleField';
import AppSubtitleField from './fields/AppSubtitleField';
import AppAvatarField from './fields/AppAvatarField';
import AppTextField from './fields/AppTextField';

export default {

	components: {
		AppTitleField,
		AppAvatarField,
		AppSubtitleField,
		AppTextField
	},


	props: ["fields"],
}


</script>

<style scoped>

</style>