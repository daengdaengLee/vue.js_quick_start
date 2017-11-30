import Constant from '../constant';

// 상태를 변경하는 기능만을 뽑아서...
export default {
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        const storeState = state;
        storeState.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
        const storeState = state;
        storeState.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
        const storeState = state;
        storeState.contact = {
            no: '', name: '', tel: '', address: '', photo: ''
        };
    },
    [Constant.CHANGE_ISLOADING]: (state, payload) => {
        const storeState = state;
        storeState.isloading = payload.isloading;
    }
};
