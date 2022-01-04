import { createRouter, createWebHistory } from 'vue-router';
import Login from "./views/Login";
import Forget from "./views/Forget";
import Dashboard from "./views/Dashboard";
//import Mail from "./views/Mail";
import appEmailBody from "./components/AppEmailBody";
import NotFound from "./views/NotFound";

const Mail = () => import(/* webpackChunkName: "mail" *//* webpackMode: "lazy-once" */"./views/Mail");  // lazy load (отдельный js чанк)


const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',

	routes: [
		{ path: '/login', component: Login, alias: '/'},			  	// meta и name необязательны
		{ path: '/forget', component: Forget, meta: {locked: false} }, 	// locked: true - закарть доступ на страницу
		{ path: '/dashboard', component: Dashboard, name: 'home'},
		{ path: '/:notFound(.*)', component: NotFound},

		{ path: '/mail',												// расширенная версия с динамическими параметрами
			component: Mail,
			children: [
				{path: ':id?', component: appEmailBody, props: true } 	// если есть id (например: mail/2), то рендерми компонент appEmailBody в <router-view></router-view>
			],														  	// ? - необязательный параметр
			name: 'mail'												// : - динамический параметр
		},
	],

})

router.beforeEach( (to, from, next) => {  // при переключении на новую страницу

	if (to.meta.locked) {						// доступ на старницу закрыт?
		next(false);							// отмена перехода на страницу
		//next({name: 'home'});					// редирект
	} else {
		next();									// или доступ разрешён
	}
})

router.afterEach( (to, from) => {    		// когда перешли на страницу

} )

export default router;