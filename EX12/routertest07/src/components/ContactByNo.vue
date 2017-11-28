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
    props: ['no'],
    data() {
        return {
            contacts: contactlist.contacts
        };
    },
    // created 이벤트 훅은 더이상 필요하지 않습니다. 삭제합니다.
    // beforeRouteUpdate 내비게이션 보호 기능도 삭제합니다.
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
