import Constant from '../constant';

// 상태를 변경하는 기능만을 뽑아서...
export default {
    [Constant.ADD_CONTACT_FORM]: (state) => {
        const storeState = state;
        storeState.contact = {
            no: '', name: '', tel: '', address: '', photo: ''
        };
        storeState.mode = 'add';
        storeState.currentView = 'contactForm';
    },
    [Constant.CANCEL_FORM]: (state) => {
        const storeState = state;
        storeState.currentView = null;
    },
    [Constant.EDIT_CONTACT_FORM]: (state, payload) => {
        const storeState = state;
        storeState.contact = payload.contact;
        storeState.mode = 'update';
        storeState.currentView = 'contactForm';
    },
    [Constant.EDIT_PHOTO_FORM]: (state, payload) => {
        const storeState = state;
        storeState.contact = payload.contact;
        storeState.currentView = 'updatePhoto';
    },
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        const storeState = state;
        storeState.contactlist = payload.contactlist;
    },
    [Constant.CHANGE_STATE_CONTACT]: (state, payload) => {
        const storeState = state;
        storeState.contact = payload;
    }
};
