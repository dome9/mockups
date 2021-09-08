
import { createRouter, createWebHistory } from 'vue-router'

import  LVECTTKXSF from '../mockups/LVECTTKXSF.vue';
import  BQGGMLHHJX from '../mockups/BQGGMLHHJX.vue';
import  NEILMXZWVL from '../mockups/NEILMXZWVL.vue';
			
const routes = [
	
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
    window.document.title = toRoute.meta && toRoute.fullPath ? toRoute.fullPath : 'Home';
	
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
