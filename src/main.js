import Vue from 'vue';
import App from './App.vue';
import router from './plugins/vue-router';
import store from './plugins/vuex';
import './plugins/vuetify';
import './plugins/vue';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
