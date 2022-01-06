import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/playsound',
    name: 'Nächstes Geräusch',
    component: () => import(/* webpackChunkName: "playSound" */ '@/views/PlaySound.vue'),
  },
  {
    path: '/soundlist',
    name: 'Gefundene Geräusche',
    component: () => import(/* webpackChunkName: "soundlist" */ '@/views/SoundList.vue'),
  },
  {
    path: '/route',
    name: 'Zurückgelegte Route',
    component: () => import(/* webpackChunkName: "route" */ '@/views/Route.vue'),
  },
  {
    path: '/track',
    name: 'Track anhören',
    component: () => import(/* webpackChunkName: "track" */ '@/views/Track.vue'),
  },
  {
    path: '/about',
    name: 'Über Sound Walk',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
