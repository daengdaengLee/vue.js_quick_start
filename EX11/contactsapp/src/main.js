// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
// import App from './AppAxiosTest.vue';

require('es6-promise').polyfill();

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App }
});
