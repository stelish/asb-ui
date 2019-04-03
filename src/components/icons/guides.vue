<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 40 40" id="icon-guides" width="100%" height="100%">
	<title>guides</title>
	<path d="M22.14 1.55A2.17 2.17 0 0 0 20 0h-.1a2.17 2.17 0 0 0-2.11 1.55v3.88l4.35-.29V1.55zM22.14 35.95V15.7l-4.35.22v20.07l-5.75 2.05V40H28v-1.96l-5.86-2.09z" fill="contentColor"></path><path fill="contentColor" d="M27.98 18.79l-.19 7.12-23.94-.87L0 21.22l3.97-3.31 24.01.88zM33.5 4.7L37.1 7l-2.19 2.87-26.1 3.23L8.26 8 33.5 4.7m.5-2.08L6.06 6.23l1 9.1 29-3.58 4-5.29L34 2.62z"></path></svg>
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
export default class GuidesIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
