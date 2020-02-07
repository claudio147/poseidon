import Vue from 'vue';
import vueBemCn from 'vue-bem-cn';
import VueMeta from 'vue-meta';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vuex from 'vuex';
import StoryblokVue from 'storyblok-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import dayjs from './plugins/dayjs';

Vue.config.productionTip = false;
Vue.use(vueBemCn);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);
Vue.use(StoryblokVue);
Vue.use(dayjs);
Vue.use(VueAxios, axios);

window.vm = new Vue({ store });

new Vue({
  router,
  store,
  // eslint-disable-next-line id-length
  render: h => h(App),
}).$mount('#app');
