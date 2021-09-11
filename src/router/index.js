
import { createRouter, createWebHistory } from 'vue-router'
import  Home from '../Home.vue'
import  NotFound from '../NotFound.vue'

import  LVECTTKXSF from '../mockups/LVECTTKXSF.vue';
import  BQGGMLHHJX from '../mockups/BQGGMLHHJX.vue';
import  NEILMXZWVL from '../mockups/NEILMXZWVL.vue';
			
const routes = [
	{
		path: "/",
		name: "",
		component: Home
	},
	{
		path: "/:catchAll(.*)",
		name: "",
		component: NotFound
	},

	
	{
		path: "/LVECTTKXSF",
		name: "LVECTTKXSF",
		component: LVECTTKXSF
	},
	{
		path: "/BQGGMLHHJX",
		name: "BQGGMLHHJX",
		component: BQGGMLHHJX
	},
	{
		path: "/NEILMXZWVL",
		name: "NEILMXZWVL",
		component: NEILMXZWVL
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
} )

router.beforeEach( ( toRoute, fromRoute, next ) => {	
		window.addEventListener(
			'message',
			event => {
				if ( event.data.type === 'navigation' ) {
					router.push( event.data.route );
				}
			}
		);
	
  
    next();
  })
export default router
