/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';
import List from '@/components/List.vue';
import constant from '@/constant';
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
});
