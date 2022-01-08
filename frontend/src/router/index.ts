import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import PlaySound from '@/views/PlaySound.vue';
import SoundList from '@/views/SoundList.vue';
import SoundMap from '@/views/SoundMap.vue';
import Walk from '@/views/Walk.vue';
import Track from '@/views/Track.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import QrCode from '@/views/QrCode.vue';
import TrackNotFinished from '@/views/TrackNotFinished.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: Home,
  },
  {
    path: '/playsound',
    name: 'Nächstes Geräusch',
    component: PlaySound,
  },
  {
    path: '/soundlist',
    name: 'Gefundene Geräusche',
    component: SoundList,
  },
  {
    path: '/walk',
    name: 'Zurückgelegte Route',
    component: Walk,
  },
  {
    path: '/track',
    name: 'Track anhören',
    component: Track,
  },
  {
    path: '/about',
    name: 'Über Sound Walk',
    component: About,
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: Contact,
  },
  {
    path: '/qr',
    name: 'qr',
    component: QrCode,
    meta: { noNav: true },
  },
  {
    path: '/tracknotfinished',
    name: 'tracknotfinished',
    component: TrackNotFinished,
    meta: { noNav: true },
  },
  {
    path: '/soundmap',
    name: 'soundmap',
    component: SoundMap,
    meta: { noNav: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
