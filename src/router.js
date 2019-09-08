import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routers = [];

[
  'index'
/* eslint-disable no-return-assign */
].forEach(m => routers = routers.concat(require(`./pages/${m}/router`).default));

export default new VueRouter({ routers });
