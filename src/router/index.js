import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home',
		// component: Home,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
