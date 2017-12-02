/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';
import List from '@/components/List.vue';
import Constant from '@/constant';
/* eslint-enable */

describe('List.vue', () => {
    it('초기 렌더링 화면 테스트', (done) => {
        const vm = new Vue({
            template: '<div><list></list></div>',
            store,
            components: {
                list: List
            }
        }).$mount();

        Vue.nextTick().then(() => {
            expect(vm.$el.querySelectorAll('li').length).to.equal(4);
            done();
        }).catch(done);
    });

    it('새로운 todo 추가후 목록 확인', (done) => {
        const vm = new Vue({
            template: '<div><list></list></div>',
            store,
            components: {
                list: List
            }
        }).$mount();

        vm.$store.dispatch(Constant.ADD_TODO, { todo: '스쿼시' });
        vm.$store.dispatch(Constant.ADD_TODO, { todo: '수영' });

        Vue.nextTick().then(() => {
            const list = vm.$el.querySelectorAll('li');
            expect(list[list.length - 1].textContent).to.contain('수영');
            expect(list[list.length - 2].textContent).to.contain('스쿼시');
            expect(list.length).to.equal(6);
            done();
        }).catch(done);
    });
});
