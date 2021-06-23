import { createRouter, createWebHistory } from 'vue-router'
import Kubernetes_1 from '../mockups/kubernetes/_1.vue'
import Kubernetes_11 from '../mockups/kubernetes/_11.vue'
import Kubernetes_2 from '../mockups/kubernetes/_2.vue'
import Kubernetes_3 from '../mockups/kubernetes/_3.vue'
import Kubernetes_4 from '../mockups/kubernetes/_4.vue'

const routes = [
    {
        path: '/Kubernetes/1',
        name: 'Kubernetes_1',
        component: Kubernetes_1,
    },
    {
        path: '/Kubernetes/11',
        name: 'Kubernetes_11',
        component: Kubernetes_11,
    },
    {
        path: '/Kubernetes/2',
        name: 'Kubernetes_2',
        component: Kubernetes_2,
    },
    {
        path: '/Kubernetes/2',
        name: 'Kubernetes_2',
        component: Kubernetes_2,
    },
    {
        path: '/Kubernetes/3',
        name: 'Kubernetes_3',
        component: Kubernetes_3,
    },
    {
        path: '/Kubernetes/4',
        name: 'Kubernetes_4',
        component: Kubernetes_4,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
} )
router.beforeEach( ( toRoute, fromRoute, next ) => {
    console.log(toRoute );
    window.document.title = toRoute.meta && toRoute.fullPath ? toRoute.fullPath : 'Home';
  
    next();
  })
export default router