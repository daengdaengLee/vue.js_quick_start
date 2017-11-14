<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">연락처 관리 애플리케이션</h1>
            <p>(Dynamic Component + EventBus + Axios)</p>
        </div>
        <component :is="currentView" :contact="contact"></component>
        <contact-list :contactlist="contactlist"></contact-list>
        <paginate ref="pagebuttons"
            :page-count="totalpage"
            :page-range="7"
            :margin-pages="3"
            :click-handler="pageChanged"
            :prev-text="'이전'"
            :next-text="'다음'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate>
    </div>
</template>

<script>
import Vue from 'vue';
import Paginate from 'vuejs-paginate';

import ContactList from './components/ContactList.vue';
import AddContact from './components/AddContact.vue';
import UpdateContact from './components/UpdateContact.vue';
import UpdatePhoto from './components/UpdatePhoto.vue';

import conf from './Config';
import eventBus from './EventBus';

export default {
    name: 'app',
    components: {
        ContactList,
        AddContact,
        UpdateContact,
        UpdatePhoto,
        Paginate
    },
    data() {
        return {
            currentView: null,
            contact: {
                no: 0,
                name: '',
                tel: '',
                address: '',
                photo: ''
            },
            contactlist: {
                pageno: 1,
                pagesize: conf('PAGESIZE', null),
                totalcount: 0,
                contacts: []
            }
        };
    },
    mounted() {
        this.fetchContacts();
        eventBus.$on('cancel', () => {
            this.currentView = null;
        });
        eventBus.$on('addSubmit', (contact) => {
            this.currentView = null;
            this.addContact(contact);
        });
        eventBus.$on('updateSubmit', (contact) => {
            this.currentView = null;
            this.updateContact(contact);
        });
        eventBus.$on('addContacForm', () => {
            this.currentView = 'add-contact';
        });
        eventBus.$on('editContactForm', (no) => {
            this.fetchContactOne(no);
            this.currentView = 'update-contact';
        });
        eventBus.$on('deleteContact', (no) => {
            this.deleteContact(no);
        });
        eventBus.$on('editPhoto', (no) => {
            this.fetchContactOne(no);
            this.currentView = 'update-photo';
        });
        eventBus.$on('updatePhoto', (no, file) => {
            if (typeof file !== 'undefined') {
                this.updatePhoto(no, file);
            }
            this.currentView = null;
        });
    },
    computed: {
        totalpage() {
            return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
        }
    },
    methods: {
        pageChanged(page) {
            this.contactlist.pageno = page;
            this.fetchContacts();
        },
        fetchContacts() {
            this.$axios.get(conf('FETCH', null), {
                params: {
                    pageno: this.contactlist.pageno,
                    pagesize: this.contactlist.pagesize
                }
            }).then((response) => {
                this.contactlist = response.data;
            }).catch((ex) => {
                console.log('fetchContacts failed : ', ex);
                this.contactlist.contacts = [];
            });
        },
        addContact(contact) {
            this.$axios.post(conf('ADD', null), contact).then(() => {
                this.contactlist.pageno = 1;
                this.fetchContacts();
            }).catch((ex) => {
                console.log('addContact failed : ', ex);
            });
        },
        updateContact(contact) {
            this.$axios.put(conf('UPDATE', contact.no), contact).then(() => {
                this.fetchContacts();
            }).catch((ex) => {
                console.log('updateContact failed : ', ex);
            });
        },
        fetchContactOne(no) {
            this.$axios.get(conf('FETCH_ONE', no)).then((response) => {
                this.contact = response.data;
            }).catch((ex) => {
                console.log('fetchContactOne failed : ', ex);
            });
        },
        deleteContact(no) {
            this.$axios.delete(conf('DELETE', no)).then(() => {
                this.fetchContacts();
            }).catch((ex) => {
                console.log('deleteContact failed : ', ex);
            });
        },
        updatePhoto(no, file) {
            const data = new FormData();
            data.append('photo', file);
            this.$axios.post(conf('UPDATE_PHOTO', no), data).then(() => {
                this.fetchContacts();
            }).catch((ex) => {
                console.log('updatePhoto failed : ', ex);
            });
        }
    },
    watch: {}
};
</script>

<style scoped>
@import url('https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css');

#container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
