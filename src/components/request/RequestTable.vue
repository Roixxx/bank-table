<template>
	<h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
	<table v-else class="table">
		<thead>
			<tr>
				<th>#</th>
				<th>ФИО</th>
				<th>Телефон</th>
				<th>Сумма</th>
				<th>Статус</th>
				<th>Действие</th>
			</tr>
		</thead>

		<tbody>
			<tr v-for="(item, i) in requests" :key="item.id">
				<td>{{ i + 1 }}</td>
				<td>{{ item.fio }}</td>
				<td>{{ item.tel }}</td>
				<td>{{ currency(item.sum) }}</td>
				<td> <AppStatus :type="item.status"/> </td>
				<td>
					<router-link v-slot="{navigate}" custom :to="{name: 'request', params: {id: item.id}}">
						<button class="btn" @click="navigate">Открыть</button>
					</router-link>
				</td>
			</tr>
		</tbody>
	</table>


</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { currency } from "../../utils/currency";
import AppStatus from "../ui/AppStatus";


export default {
	name: "RequestTable",

	setup() {
		return { currency }
	},
	props: {
		requests: {
			type: Array,
			required: true,
		}
	},

	components: {
		AppStatus,
	}
}
</script>

<style scoped>

</style>
