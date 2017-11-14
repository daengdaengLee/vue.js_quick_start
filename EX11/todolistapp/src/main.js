import Vue from 'vue';
import store from './store';
import TodoList from './components/TodoList.vue';

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    render: h => h(TodoList)
});
