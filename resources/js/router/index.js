
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register')
    },

]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export  default router;
