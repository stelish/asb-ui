<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 40 35.76" id="needs-icon-investing" width="100%" height="100%">
    <text transform="translate(23.63 19.51)" font-size="14.705" fill="currentColor" font-family="Helvetica" font-weight="700">$</text>
    <path d="M38.75 1.84h-17.5v-.59a1.25 1.25 0 1 0-2.5 0v.59H1.25a1.25 1.25 0 0 0-.07 2.5v21.18a1.77 1.77 0 0 0 1.77 1.77H18l-7 7a.834.834 0 1 0 1.18 1.18l7-7v4.29a.835.835 0 1 0 1.67 0v-4.3l7 7a.834.834 0 0 0 1.18-1.18l-7-7h15a1.77 1.77 0 0 0 1.77-1.77V4.33a1.25 1.25 0 0 0-.05-2.49zm-1.6 23.68a.1.1 0 0 1-.1.1H2.95a.1.1 0 0 1-.1-.1V4.34h34.3v21.18z" fill="currentColor"></path>
    <path d="M17.71 10.23h2.54v9.22h-2.54v-9.22zm-3.59 3.55h2.54v5.67h-2.54v-5.67zm-3.59-2.11h2.54v7.77h-2.54v-7.76zm-3.6 2.94h2.54v4.84H6.93v-4.84z" fill="currentColor"></path>
    <path fill="currentColor" d="M10.52 11.68h2.54v7.77h-2.54zm3.6 2.11h2.54v5.67h-2.54z"></path>
    <path fill="currentColor" d="M17.71 10.23h2.54v9.22h-2.54z"></path>
    <path fill="currentColor" d="M6.93 14.61h2.54v4.84H6.93z"></path>
    <path fill="currentColor" d="M16.69 10.43l2.29-2.29 2.28 2.29h-4.57"></path>
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
export default class GrowMoneyIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
