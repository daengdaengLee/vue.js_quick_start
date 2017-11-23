import Constant from '../constant';

export default {
    [Constant.ADD_TODO]: ({ commit }, payload) => {
        console.log('### addTodo!!!');
        commit(Constant.ADD_TODO, payload);
    },
    [Constant.DONE_TOGGLE]: ({ commit }, payload) => {
        console.log('### doneToggle!!!');
        commit(Constant.DONE_TOGGLE, payload);
    },
    [Constant.DELETE_TODO]: ({ commit }, payload) => {
        console.log('### deleteTodo!!!');
        commit(Constant.DELETE_TODO, payload);
    }
};
