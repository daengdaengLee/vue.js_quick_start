<template>
    <div>
        <div class="header">
            <h1 class="headerText">(주)OpenSG</h1>
            <nav>
                <ul>
                    <li>
                        <router-link to="/home">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/contacts">Contacts</router-link>
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

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/contacts', component: Contacts }
    ]
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
