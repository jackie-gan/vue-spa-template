import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [];

[
  'index',
  'todo'
/* eslint-disable no-return-assign */
].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

export default new VueRouter({ routes });
