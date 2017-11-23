import Constant from '../constant';
import SearchAPI from '../api/SearchAPI';

export default {
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
        [Constant.SEARCH_CONTACT]: (store, payload) => {
            SearchAPI.searchContact(payload.name).then((response) => {
                store.commit(Constant.SEARCH_CONTACT, { contacts: response.data });
                if (response.data.length > 0) {
                    store.dispatch(Constant.ADD_KEYWORD, payload);
                }
            });
        }
    }
};
