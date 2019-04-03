<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">

   <svg version="1.1" id="close-bell" width="100%" height="100%" viewBox="0 0 14 14">
<g>
	<g>

<line fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-miterlimit="10" x1="2" y1="2" x2="11.627" y2="11.627"/>

<line fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-miterlimit="10" x1="11.627" y1="2" x2="2" y2="11.627"/>
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
export default class CloseIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
