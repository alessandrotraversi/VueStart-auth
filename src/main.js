// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import '../filters/*';
import AppComponent from './App.vue';
import store from './store/store';
import router from './router/router';
import SessionStorage from './services/session-storage';

Vue.config.productionTip = false

/* eslint-disable no-new */
let meuVue = new Vue({
  router,
  el: '#app',
  components: {
    'app': AppComponent
  },
  store
})
