import { createRouter, createWebHistory } from 'vue-router'
import _1 from '../mockups/_1.vue'
import _2 from '../mockups/_2.vue'
import _3 from '../mockups/_3.vue'
import _4 from '../mockups/_4.vue'
import _5 from '../mockups/_5.vue'
import _6 from '../mockups/_6.vue'
import _7 from '../mockups/_7.vue'
import _8 from '../mockups/_8.vue'

const routes = [
    {
        path: '/1',
        name: '_1',
        component: _1,
    },
    {
        path: '/2',
        name: '_2',
        component: _2,
    },
    {
        path: '/2',
        name: '_2',
        component: _2,
    },
    {
        path: '/3',
        name: '_3',
        component: _3,
    },
    {
        path: '/4',
        name: '_4',
        component: _4,
    },
    {
        path: '/5',
        name: '_5',
        component: _5,
    },
    {
        path: '/8',
        name: '_8',
        component: _8,
    },
    {
        path: '/7',
        name: '_7',
        component: _7,
    },
    {
        path: '/6',
        name: '_6',
        component: _6,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
} )
router.beforeEach( ( toRoute, fromRoute, next ) => {
    window.document.title = toRoute.meta && toRoute.fullPath ? toRoute.fullPath : 'Home';
  
    next();
  })
export default router