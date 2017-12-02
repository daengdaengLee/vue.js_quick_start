/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';
import List from '@/components/List.vue';
import inputTodo from '@/components/inputTodo.vue';
import Constant from '@/constant';
/* eslint-enable */

const vm = new Vue({
    template: '<div><input-todo ref="a"></input-todo><list></list></div>',
    store,
    components: {
        list: List,
        'input-todo': inputTodo
    }
}).$mount();

describe('List.vue', () => {
    it('초기 렌더링 화면 테스트', (done) => {
        Vue.nextTick().then(() => {
            expect(vm.$el.querySelectorAll('li').length).to.equal(4);
            done();
        }).catch(done);
    });

    it('새로운 todo 추가후 목록 확인', (done) => {
        vm.$refs.a._data.todo = '수영강습'; // eslint-disable-line no-underscore-dangle

        const evtClick = new window.Event('click');
        const addbutton = vm.$el.querySelector('span.addbutton');
        addbutton.dispatchEvent(evtClick);
        vm._watcher.run(); // eslint-disable-line no-underscore-dangle

        Vue.nextTick().then(() => {
            const list = vm.$el.querySelectorAll('li');
            expect(list[list.length - 1].textContent).to.contain('수영강습');
            expect(list.length).to.equal(5);
            done();
        }).catch(done);
    });
});
