<template>
    <div id="example">
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th><th>국감ㅇ</th><th>수도</th><th>지역</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr
                    v-for="c in countries"
                    v-bind:key="c.no"
                >
                    <td>{{ c.no }}</td>
                    <td>{{ c.name }}</td>
                    <td>{{ c.capital }}</td>
                    <td>{{ c.region }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'country-list',
    computed: mapGetters({
        countries: 'countriesByRegion'
    })
};
</script>

<style>
#list {
    width: 520px;
    border: 1px solid black;
    border-collapse: collapse;
}
#list td, #list th {
    border: 1px solid black;
    text-align: center;
}
#list td:nth-child(4n+1), #list th:nth-child(4n+1) {
    width: 100px;
}
#list td:nth-child(4n+2), #list th:nth-child(4n+2) {
    width: 150px;
}
#list td:nth-child(4n+3), #list th:nth-child(4n+3) {
    width: 150px;
}
#list td:nth-child(4n), #list th:nth-child(4n) {
    width: 120px;
}
#list > thead > tr {
    color: yellow;
    background-color: purple;
}
</style>
