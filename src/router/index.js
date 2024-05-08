import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/components/HomePage.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/components/HomePage.vue')
    }
]

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;