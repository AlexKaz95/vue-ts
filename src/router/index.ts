import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'mainLayout',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{
            path: '',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
        }, {
            path: '/categories',
            name: 'categories',
            component: () => import('@/pages/Categories.vue')
        }, {
            path: '/history',
            name: 'historyMain',
            children: [{
                path: '',
                name: 'history',
                component: () => import('@/pages/History.vue')
            },{
                path: '/detail-record/:record',
                name: 'detail-record',
                component: () => import('@/pages/DetailRecord.vue')
            }]
        }, {
            path: '/planning',
            name: 'planning',
            component: () => import('@/pages/Planning.vue')
        }, {
            path: '/profile',
            name: 'profile',
            component: () => import('@/pages/Profile.vue'),
        }, {
            path: '/record',
            name: 'record',
            component: () => import('@/pages/Record.vue')
        }]
    },
    {
        path: '/login',
        name: 'loginLayout',
        component: () => import('@/layouts/EmptyLayout.vue'),
        children: [{
            path: '',
            name: 'login',
            component: () => import('@/pages/Login.vue')
        }]
    },
    {
        path: '/register',
        name: 'registerLayout',
        component: () => import('@/layouts/EmptyLayout.vue'),
        children: [{
            path: '',
            name: 'register',
            component: () => import('@/pages/Register.vue')
        }]
    },    
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});