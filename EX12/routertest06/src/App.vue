<template>
    <div>
        <div class="header">
            <h1 class="headerText">(주)OpenSG</h1>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }">Contacts</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
import ContactByNo from './components/ContactByNo.vue';
import NotFound from './components/NotFound.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            children: [
                {
                    path: ':no',
                    name: 'contactbyno',
                    component: ContactByNo,
                    beforeEnter(to, from, next) {
                        console.log(`@@ beforeEnter! : ${from.path} --> ${to.path}`); // eslint-disable-line no-console
                        if (from.path.startsWith('/contacts')) next();
                        else next('/home');
                        next();
                    }
                }
            ]
        },
        { path: '*', component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(`** beforeEach!! : ${from.path} --> ${to.path}`); // eslint-disable-line no-console
    next();
});
router.afterEach((to, from) => {
    console.log(`** afterEach!! : ${from.path} --> ${to.path}`); // eslint-disable-line no-console
});

export default {
    name: 'app',
    router
};
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

.header {
    background-color: aqua;
    padding: 10px 0 0 0;
}
.headerText {
    padding: 0 20px 0 20px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: purple;
}
li {
    float: left;
}
li a {
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
li a:hover {
    background-color: aqua;
    color: black;
}
</style>
