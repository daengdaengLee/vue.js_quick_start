import Vue from 'vue';
import ES6Promise from 'es6-promise';
import App from './App.vue';
import store from './store';

ES6Promise.polyfill();

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    render: h => h(App)
});
