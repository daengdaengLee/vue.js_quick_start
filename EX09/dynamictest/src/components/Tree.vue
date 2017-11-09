<template>
    <ul>
        <li v-for="s in subs" v-bind:key="s.name" v-bind:class="s.type">
            {{ s.name }}
            <tree v-bind:subs="s.subs"></tree>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'tree',
    props: ['subs']
};
</script>
