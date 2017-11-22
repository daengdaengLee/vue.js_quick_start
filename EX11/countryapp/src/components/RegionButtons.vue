<template>
    <div>
        <button
            class="region"
            v-for="region in regions"
            v-bind:key="region"
            v-bind:class="isSelected(region)"
            v-on:click="changeRegion({ region: region })"
        >
            {{ region }}
        </button>
    </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapMutations } from 'vuex';
import Constant from '../Constant';

export default {
    name: 'region-buttons',
    computed: mapGetters([
        'regions', 'currentRegion'
    ]),
    methods: _.extend(
        {
            isSelected(region) {
                if (region === this.currentRegion) return { selected: true };
                return { selected: false };
            }
        },
        mapMutations([
            Constant.CHANGE_REGION
        ])
    )
};
</script>

<style>
button.region {
    text-align: center;
    width: 80px;
    margin: 2px;
    border: solid 1px gray;
}
button.selected {
    background-color: purple;
    color: aqua;
}
</style>
