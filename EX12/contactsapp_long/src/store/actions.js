import contactAPI from '../api/ContactsAPI';
import Constant from '../constant';

export default {
    [Constant.CHANGE_ISLOADING]: (store, payload) => {
        store.commit(Constant.CHANGE_ISLOADING, payload);
    },
    [Constant.FETCH_CONTACTS]: (store, payload) => {
        let pageno;
        if (typeof payload === 'undefined' || typeof payload.pageno === 'undefined') {
            pageno = 1;
        } else {
            ({ pageno } = payload);
            pageno = Number(pageno);
        }
        const { pagesize } = store.state.contactlist;

        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        contactAPI.fetchContacts(pageno, pagesize).then((response) => {
            store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
            store.dispatch(Constant.CHANGE_ISLOADING, { isloading: false });
        });
    },
    [Constant.ADD_CONTACT]: (store) => {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        contactAPI.addContact(store.state.contact).then((response) => {
            if (response.data.status === 'success') {
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
            } else {
                console.log(`연락처 추가 실패 : ${response.data}`); // eslint-disable-line no-console
            }
        });
    },
    [Constant.UPDATE_CONTACT]: (store) => {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        const currentPageNo = store.state.contactlist.pageno;
        contactAPI.updateContact(store.state.contact).then((response) => {
            if (response.data.status === 'success') {
                store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
            } else {
                console.log(`연락처 변경 실패 : ${response.data}`); // eslint-disable-line no-console
            }
        });
    },
    [Constant.UPDATE_PHOTO]: (store, payload) => {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        const currentPageNo = store.state.contactlist.pageno;
        contactAPI.updatePhoto(payload.no, payload.file).then(() => {
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        });
    },
    [Constant.DELETE_CONTACT]: (store, payload) => {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        const currentPageNo = store.state.contactlist.pageno;
        contactAPI.deleteContact(payload.no).then(() => {
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        });
    },
    [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });

        contactAPI.fetchContactOne(payload.no).then((response) => {
            store.commit(Constant.FETCH_CONTACT_ONE, { contact: response.data });
            store.dispatch(Constant.CHANGE_ISLOADING, { isloading: false });
        });
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (store) => {
        store.commit(Constant.INITIALIZE_CONTACT_ONE);
    }
};
