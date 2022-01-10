import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./views/HomePage";
import ReusablePage from "./views/ReusablePage";


export const router = createRouter({
	history: createWebHistory(),

	routes: [
		{path: '/', component: HomePage},
		{path: '/reusable', component: ReusablePage},
	],

	linkActiveClass: 'active',
	linkExactActiveClass: 'active',

})