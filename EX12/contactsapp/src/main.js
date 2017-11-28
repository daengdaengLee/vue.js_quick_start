import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';

import Home from './components/Home.vue';
import About from './components/About.vue';
import ContactList from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';
import UpdatePhoto from './components/UpdatePhoto.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', components: Home },
        { path: '/about', name: 'about', components: About },
        {
            path: '/contacts',
            name: 'contacts',
            components: ContactList,
            children: [
                {
                    path: 'add', name: 'addcontact', components: ContactForm
                },
                {
                    path: 'update/:no', name: 'updatecontact', components: ContactForm, props: true
                },
                {
                    path: 'photo/:no', name: 'updatephoto', components: UpdatePhoto, props: true
                }
            ]
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    store,
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
});
