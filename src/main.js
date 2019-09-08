import Vue from 'vue';
import BeginApp from './BeginApp';
import router from './router';


/* eslint-disable no-new */
new Vue({
  router,
  el: '#begin-app',
  ...BeginApp
});
