export const routesUser = {
    name: 'auth',
    path: '/',
    component: () => import("@/modules/auth/views/index.vue"),
    redirect: { name: 'login' },
    children: [
        {
            name: 'login',
            path: '/login',
            component: () => import("@/modules/auth/views/login.vue"),
        }
    ]
}