<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 31.88 40" id="homepage-icon-calculators" width="100%" height="100%">
    <title>calculators</title>
    <path d="M29.88 2v36H2V2h27.88m1-2H1a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h29.88a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" fill="currentColor"></path>
    <rect x="3.82" y="4.07" width="24.23" height="32.08" rx="1" ry="1" fill="currentColor"></rect><rect x="5.98" y="6.01" width="19.91" height="7.9" rx="1" ry="1" fill="none"></rect>
    <circle cx="16" cy="18.06" r="2" fill="#fff"></circle>
    <circle cx="7.88" cy="18.06" r="2" fill="#fff"></circle>
    <circle cx="23.88" cy="18.06" r="2" fill="#fff"></circle>
    <circle cx="16" cy="25.06" r="2" fill="#fff"></circle>
    <circle cx="7.88" cy="25.06" r="2" fill="#fff"></circle>
    <circle cx="23.88" cy="25.06" r="2" fill="#fff"></circle>
    <circle cx="16" cy="32" r="2" fill="#fff"></circle>
    <circle cx="7.88" cy="32" r="2" fill="#fff"></circle>
    <circle cx="23.88" cy="32" r="2" fill="#fff"></circle>
</svg>
</span>
</template>

<style lang="scss" scoped>
@import '@/styles/icons.scss';
</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component
export default class CalculatorIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
