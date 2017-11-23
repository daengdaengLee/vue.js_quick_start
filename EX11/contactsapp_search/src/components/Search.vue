<template>
    <p>
        이름 :
        <input
            type="text"
            v-model.trim="name"
            placeholder="두 글자 이상 입력 후 엔터!"
            v-on:keyup.enter="keyupEvent"
        >
    </p>
</template>

<script>
import Constant from '../constant';

export default {
    name: 'search',
    data() {
        return { name: '' };
    },
    methods: {
        keyupEvent(e) {
            const val = e.target.value;
            if (val.length >= 2) {
                this.$store.dispatch(Constant.SEARCH_CONTACT, { name: val });
                this.name = '';
            } else {
                this.$store.dispatch(Constant.SEARCH_CONTACT, { name: '' });
            }
        }
    }
};
</script>

<style>
</style>
