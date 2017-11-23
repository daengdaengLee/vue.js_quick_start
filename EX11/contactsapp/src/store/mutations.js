import Constant from '../constant';

// 상태를 변경하는 기능만을 뽑아서 ..
export default {
    [Constant.ADD_CONTACT_FORM]: (state) => {
        const currentState = state;
        currentState.contact = {
            no: '', name: '', tel: '', address: '', photo: ''
        };
        currentState.mode = 'add';
        currentState.currentView = 'contactForm';
    },
    [Constant.CANCEL_FORM]: (state) => {
        const currentState = state;
        currentState.currentView = null;
    },
    [Constant.EDIT_CONTACT_FORM]: (state, payload) => {
        const currentState = state;
        currentState.contact = payload.contact;
        currentState.mode = 'update';
        currentState.currentView = 'contactForm';
    },
    [Constant.EDIT_PHOTO_FORM]: (state, payload) => {
        const currentState = state;
        currentState.contact = payload.contact;
        currentState.currentView = 'updatePhoto';
    },
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        const currentState = state;
        currentState.contactlist = payload.contactlist;
    }
};
