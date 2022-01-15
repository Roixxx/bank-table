import {createRouter, createWebHistory} from "vue-router";
import Tasks from "./views/Tasks";
import New from "./views/New";



export const router = createRouter({
	history: createWebHistory(),

	routes: [
		{path: "/", component: Tasks},
		{path: "/new", component: New},

	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',

})