import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('../pages/Categories.vue')
    },
    {
        path: '/detail-record',
        name: 'detail-record',
        component: () => import('../pages/DetailRecord.vue')
    },
    {
        path: '/history',
        name: 'history',
        component: () => import('../pages/History.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        component: () => import('../pages/Planning.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../pages/Profile.vue'),
    },
    {
        path: '/record',
        name: 'record',
        component: () => import('../pages/Record.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/Register.vue')
    },
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});