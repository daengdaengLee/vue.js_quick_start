<template>
    <div>
        <hr class="divider">
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>일련번호</td>
                        <td>{{ contact.no }}</td>
                    </tr>
                    <tr class="active">
                        <td>이름</td>
                        <td>{{ contact.name }}</td>
                    </tr>
                    <tr class="active">
                        <td>전화</td>
                        <td>{{ contact.tel }}</td>
                    </tr>
                    <tr class="active">
                        <td>주소</td>
                        <td>{{ contact.address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import contactlist from '../ContactList';

export default {
    name: 'contact-by-no',
    data() {
        return {
            no: 0,
            contacts: contactlist.contacts
        };
    },
    created() {
        this.no = Number(this.$route.params.no);
    },
    watch: {
        $route(to) {
            this.no = Number(to.params.no);
        }
    },
    computed: {
        contact() {
            const { no } = this;
            const arr = this.contacts.filter(item => item.no === no);
            if (arr.length === 1) return arr[0];
            return {};
        }
    }
};
</script>

<style>
table.detail {
    width: 400px;
}
.divider {
    height: 3px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FF0066;
    color: #FF0066;
    border: 0 none;
}
</style>
