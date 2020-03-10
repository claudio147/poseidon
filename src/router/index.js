import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/organisation',
    name: 'Verein',
    component: () => import('../views/Organisation.vue'),
  },
  {
    path: '/history',
    name: 'Geschichte',
    component: () => import('../views/History.vue'),
  },
  {
    path: '/news',
    name: 'News / Termine',
    component: () => import('../views/News.vue'),
  },
  {
    path: '/news/:id',
    name: 'News Detail',
    component: () => import('../views/NewsDetail.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/documents',
    name: 'Dokumente',
    component: () => import('../views/Documents.vue'),
  },
  {
    path: '/registration',
    name: 'Anmeldung',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/talents',
    name: 'Jungfischer',
    component: () => import('../views/Talents.vue'),
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('../views/Talent-schedule.vue'),
  },
  {
    path: '/gallery',
    name: 'Galerie',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
