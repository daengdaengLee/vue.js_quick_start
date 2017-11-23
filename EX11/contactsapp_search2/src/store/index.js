import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
import module1 from './module1';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        keywordlist: []
    },
    mutations: {
        [Constant.ADD_KEYWORD]: (state, payload) => {
            const beforeState = state;
            beforeState.keywordlist.splice(0, 0, payload.name);
        }
    },
    actions: {
        [Constant.ADD_KEYWORD]: ({ commit }, payload) => {
            commit(Constant.ADD_KEYWORD, payload);
        }
    },
    modules: { m1: module1 }
});

export default store;
