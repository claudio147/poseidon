import Vue from 'vue';
import vueBemCn from 'vue-bem-cn';
import VueMeta from 'vue-meta';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(vueBemCn);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  // eslint-disable-next-line id-length
  render: h => h(App),
}).$mount('#app');
