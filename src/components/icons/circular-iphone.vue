<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg id="circle-icon-phone" width="100%" height="100%" viewBox="0 0 40 40">
    <title>circle-icon-phone</title>
    <defs></defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g stroke="currentColor">
            <g id="mobile-phone-with-big-screen-and-just-one-button-on-front-copy-2" transform="translate(2.000000, 2.000000)">
                <path d="M18,0 C27.9409655,0 36,8.05903448 36,18 C36,27.9409655 27.9409655,36 18,36 C8.05903448,36 0,27.9409655 0,18 C0,8.05903448 8.05903448,0 18,0 Z" id="Shape-Copy-2" stroke-width="2"></path>
                <path d="M13.5706023,29.952 L23.1580203,29.952 C24.5760286,29.952 25.7296959,28.960359 25.7296959,27.7408718 L25.7296959,8.21128205 C25.7296959,6.99179487 24.5760286,6 23.1580203,6 L13.5706023,6 C12.1536076,6 11,6.99174359 11,8.21128205 L11,27.7409231 C10.9999404,28.9604103 12.1536076,29.952 13.5706023,29.952 Z" id="Shape" stroke-width="1.5" fill-rule="nonzero"></path>
                <path d="M13.4436904,8 L23.1672451,8 C23.4119236,8 23.610767,8.17100533 23.610767,8.38157375 L23.610767,23.8483292 C23.610767,24.0590425 23.4119798,24.2299995 23.1672451,24.2299995 L13.4436904,24.2299995 C13.1988434,24.2299995 13,24.0590425 13,23.8483292 L13,8.38157375 C13,8.17095702 13.1987872,8 13.4436904,8 Z" id="Shape" stroke-width="1.5" fill-rule="nonzero"></path>
                <path d="M18.7471676,27 C18.3348837,27 18,27.288 18,27.6424103 C18,27.9965641 18.3348837,28.2845641 18.7471676,28.2845641 C19.1584973,28.2845641 19.4934407,27.9965641 19.4934407,27.6424103 C19.4934407,27.288 19.1585569,27 18.7471676,27 Z" id="Shape" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
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
export default class CircularIphoneIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
