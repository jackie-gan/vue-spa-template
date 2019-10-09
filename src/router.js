import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [];

// auto import route.js
(modules => modules.keys().forEach((key) => {
  routes = routes.concat(modules(key).default);
}))(require.context('./pages/', true, /router\.js$/));

export default new VueRouter({ routes });
