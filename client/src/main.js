// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaulIconPack: 'fa'
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
