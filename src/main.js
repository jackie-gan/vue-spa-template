import Vue from 'vue';
import BeginApp from './BeginApp';
import router from './router';
import store from './store';

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#begin-app',
  ...BeginApp
});
