export const routesHome = {
    name: 'user.home',
    path: '/home',
    component: () => import ("@/modules/app/index.vue"),
    // redirect: { name: 'user.home' },
    // children: [
    //     {
    //         name: 'user.home',
    //         path: '/home',
    //         component: () => import("@/modules/auth/views/login.vue"),
    //     }
    // ]
}