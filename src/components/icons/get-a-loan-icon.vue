<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 40 19.12" id="needs-icon-get-a-loan" width="100%" height="100%">
	<title>Get a loan</title>
	<path d="M39.52 8.1a4.72 4.72 0 0 0-2.6-.47c-.48.07-7.52 2.06-7.52 2.06a2.42 2.42 0 0 1-.67 2.8 5.54 5.54 0 0 1-3.7.86c-1.63 0-3.39-.27-4.75-.44l-1.66-.21s.11-.4 1.14-.46a21.08 21.08 0 0 1 2.61.1 35 35 0 0 0 3.76.14c2.09-.24 2.45-1.21 2.46-1.7 0-1.37-.79-1.83-3.3-2-1.62-.13-3.35-.23-4.56-.38-2.33-.28-4-.91-4.86-1a4.5 4.5 0 0 0-3.56.82C7.93 11.72 0 13.9 0 13.9c1.2 3.8 7.8 5.22 7.8 5.22 2.81-2.43 5.92-2.73 8.58-2.83a81 81 0 0 1 9 .46 2.94 2.94 0 0 0 1.62-.37 81.75 81.75 0 0 1 11.4-5.89c1.25-.45 1.6-1 1.6-1.48a.91.91 0 0 0-.48-.91z" fill="currentColor"></path>
	<path d="M25.29 8.08h4.22a.74.74 0 1 0 0-1.47h-4.22a.74.74 0 1 0 0 1.47z" fill="currentColor"></path>
	<path d="M25.29 5.88h4.22a.74.74 0 1 0 0-1.47h-4.22a.74.74 0 1 0 0 1.47z" fill="currentColor"></path>
	<path d="M25.29 3.67h4.22a.74.74 0 1 0 0-1.47h-4.22a.74.74 0 1 0 0 1.47z" fill="currentColor"></path>
	<path d="M17.89 6.61h4.22a.74.74 0 1 0 0-1.47h-4.22a.74.74 0 1 0 0 1.47z" fill="currentColor"></path>
	<path d="M17.89 4.41h4.22a.74.74 0 1 0 0-1.47h-4.22a.74.74 0 1 0 0 1.47z" fill="currentColor"></path>
	<path d="M25.29 1.49h4.22a.8.8 0 0 0 .85-.73.79.79 0 0 0-.85-.73h-4.22a.79.79 0 0 0-.84.73.8.8 0 0 0 .84.73z" fill="currentColor"></path>
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
export default class GetALoanIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
