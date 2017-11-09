<template>
    <div>
        <button v-bind:class="[$style.hand, $style.test]"> CSS Module을 적용한 버튼 </button>
    </div>
</template>

<script>
export default {
    created() {
        console.log('[CSS MODULE TEST] : ', this.$style);
    }
};
</script>

<style module>
.hand {
    cursor: pointer;
    background-color: purple;
    color: yellow;
}
.test {
    font-style: italic;
}
</style>
