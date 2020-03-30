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
    path: '/verein',
    name: 'Verein',
    component: () => import('../views/Organisation.vue'),
  },
  {
    path: '/geschichte',
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
    path: '/termine',
    name: 'Events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/dokumente',
    name: 'Dokumente',
    component: () => import('../views/Documents.vue'),
  },
  {
    path: '/anmeldung',
    name: 'Anmeldung',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/jungfischer',
    name: 'Jungfischer',
    component: () => import('../views/Talents.vue'),
  },
  {
    path: '/jungfischer-termine',
    name: 'Agenda',
    component: () => import('../views/Talent-schedule.vue'),
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links.vue'),
  },
  {
    path: '/vorstand',
    name: 'Vorstand',
    component: () => import('../views/Board.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  }
});

export default router;
