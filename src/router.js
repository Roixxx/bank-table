import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./views/HomePage";


export const router = createRouter({
	history: createWebHistory(),

	routes: [
		{path: '/', component: HomePage}
	]
})