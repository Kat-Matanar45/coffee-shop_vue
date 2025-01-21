import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store/index.js';

import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.filter('addCurrency', (value) => {
  return value + '$'
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
