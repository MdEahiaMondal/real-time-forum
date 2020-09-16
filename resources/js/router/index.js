
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
    {
        path: '/logout',
        name: 'logout',
        component: () => import('../views/auth/Logout')
    },
    {
        path: '/forum',
        name: 'forum',
        component: () => import('../views/forum/Forum')
    },
    {
        path: '/forum/question/:slug',
        name: 'question-show',
        component: () => import('../views/forum/QuestionShow')
    },
    {
        path: '/forum/question/create',
        name: 'question-create',
        component: () => import('../views/question/Create')
    },

]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export  default router;
