<template>
    <div class="modal">
        <div class="form" @keyup.esc="cancelEvent">
            <h3 class="heading">:: {{headingText}}</h3>
            <div v-if="mode=='update'"  class="form-group">
                <label>일련번호</label>
                <input type="text" name="no" class="long" disabled v-model="currentContact.no">
            </div>
            <div class="form-group">
                <label>이름</label>
                <input
                    type="text"
                    name="name"
                    class="long"
                    v-model="currentContact.name"
                    ref="name"
                    placeholder="이름을 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>전화번호</label>
                <input
                    type="text"
                    name="tel"
                    class="long"
                    v-model="currentContact.tel"
                    placeholder="전화번호를 입력하세요"
                >
            </div>
            <div class="form-group">
                <label>주 소</label>
                <input
                    type="text"
                    name="address"
                    class="long"
                    v-model="currentContact.address"
                    placeholder="주소를 입력하세요"
                >
            </div>
            <div class="form-group">
                <div>&nbsp;</div>
                <input
                    type="button"
                    class="btn btn-primary"
                    v-bind:value="btnText"
                    @click="submitEvent()"
                >
                <input
                    type="button"
                    class="btn btn-primary"
                    value="취 소"
                    @click="cancelEvent()"
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';
import Constant from '../constant';

export default {
    name: 'contactForm',
    data() {
        return {
            currentContact: {
                no: 0, name: '', tel: '', address: '', photo: ''
            }
        };
    },
    created() {
        this.currentContact.no = this.$store.state.contact.no;
        this.currentContact.name = this.$store.state.contact.name;
        this.currentContact.tel = this.$store.state.contact.tel;
        this.currentContact.address = this.$store.state.contact.address;
        this.currentContact.photo = this.$store.state.contact.photo;
    },
    computed: _.extend(
        {
            btnText() {
                if (this.mode !== 'update') {
                    return '추 가';
                }
                return '수 정';
            },
            headingText() {
                if (this.mode !== 'update') {
                    return '새로운 연락처 추가';
                }
                return '연락처 변경';
            }
        },
        mapState(['mode'])
    ),
    mounted() {
        this.$refs.name.focus();
    },
    methods: {
        submitEvent() {
            if (this.mode === 'update') {
                this.$store.dispatch(Constant.UPDATE_CONTACT, this.currentContact);
            } else {
                this.$store.dispatch(Constant.ADD_CONTACT, this.currentContact);
            }
        },
        cancelEvent() {
            this.$store.dispatch(Constant.CANCEL_FORM);
        }
    }
};
</script>

<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.form {
    background-color: white;
    margin: 100px auto;
    max-width: 400px;
    min-width: 200px;
    font: 13px "verdana";
    padding: 10px 10px 10px 10px;
}
.form div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
}
.form label{
    text-align: left;
     margin: 0 0 3px 0;
     padding:0px;
    display: block;
    font-weight: bold;
}
.form input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #BEBEBE;
    padding: 7px;
    margin: 0;
    outline: none;
}
.form .long {
    width: 100%;
}
.form .button{
    background: #2B798D;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
}
.form .button:hover {
    background: #4691A4;
}
.form .heading {
    background: #33A17F;
    font-weight: 300;
    text-align: left;
    padding : 20px;
    color: #fff;
    margin: 5px 0 30px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 400px;
}
</style>
