import axios from 'axios';
import CONF from '../Config';

export default {
    fetchContacts(pageno, pagesize) {
        return axios.get(CONF('FETCH', null), {
            params: {
                pageno,
                pagesize
            }
        });
    },
    fetchContactOne(no) {
        return axios.get(CONF('FETCH_ONE', no));
    },
    addContact(contact) {
        return axios.post(CONF('ADD', null), contact);
    },
    updateContact(contact) {
        return axios.put(CONF('UPDATE', contact.no), contact);
    },
    deleteContact(no) {
        return axios.delete(CONF('DELETE', no));
    },
    updatePhoto(no, file) {
        const data = new FormData();
        data.append('photo', file);

        return axios.post(CONF('UPDATE_PHOTO', no), data);
    }
};
