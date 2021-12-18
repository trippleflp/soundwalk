import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'Über Sound Walk',
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import(/* webpackChunkName: "home" */ '../views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
