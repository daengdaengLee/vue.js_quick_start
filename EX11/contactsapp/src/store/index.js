import Vue from 'vue';
import Vuex from 'vuex';
import ES6Promise from 'es6-promise';
import state from './state';
import mutations from './mutations';
import actions from './actions';

ES6Promise.polyfill();
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;
