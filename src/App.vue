<template>
	<div class="container column">


		<AppFormControl/>
		<AppCard/>

	</div>


	<div class="container">
		<p>
			<button class="btn primary">Загрузить комментарии</button>
		</p>
		<div class="card">
			<h2>Комментарии</h2>
			<ul class="list">
				<li class="list-item">
					<div>
						<p><strong>test@microsoft.com</strong></p>
						<small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
					</div>
				</li>
			</ul>
		</div>


		<div class="loader"></div>
	</div>
</template>

<script>

import AppFormControl from "./components/AppFormControl";
import AppCard from "./components/AppCard";

export default {

	components: {
		AppFormControl,
		AppCard,
	}
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
