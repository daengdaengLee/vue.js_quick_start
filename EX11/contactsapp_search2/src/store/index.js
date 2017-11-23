import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
import SearchAPI from '../api/SearchAPI';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        [Constant.SEARCH_CONTACT]: (state, payload) => {
            const beforeState = state;
            beforeState.contacts = payload.contacts;
        }
    },
    actions: {
        [Constant.SEARCH_CONTACT]: ({ commit }, payload) => {
            SearchAPI.searchContact(payload.name).then((response) => {
                commit(Constant.SEARCH_CONTACT, { contacts: response.data });
            });
        }
    }
});

export default store;
