import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "./../pages/Dashboard.vue";
import Profile from "../pages/Profile.vue";
import Login from "./../pages/Login.vue";
import About from "../pages/About.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            requiresAuth: false
        }
    }
];

const isLoggedIn = () => JSON.parse(localStorage.getItem('isLoggedIn'))

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (to.name !== 'Login' && !isLoggedIn()) {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router