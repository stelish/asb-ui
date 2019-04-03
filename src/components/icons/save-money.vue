<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<title>Save money icon</title>
<svg viewBox="0 0 39.96 37.31" id="needs-icon-save-money" width="100%" height="100%">
	<circle cx="32.59" cy="5.33" r="5.33" fill="currentColor"></circle>
	<text transform="translate(29.87 8.54)" font-size="9.76" fill="#fff" font-family="Helvetica" font-weight="700">$</text>
	<path d="M23.01 8.58c2 0 6.33-.68 10.12 1.3s4.84 5.35 5 8.77" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.882"></path>
	<path d="M38.18 19.57v.91a12.82 12.82 0 0 1-.2 1.62l-3.3 15.21h-3.8l-1.19-8c-.36-2.46-3.22-2.32-3.22-2.32h-6.49a2.58 2.58 0 0 0-2.73 2.29l-.71 8h-3.83L9.13 22.09a6.79 6.79 0 0 1-4.77-.67s-1 6.31-1.18 8.38a1.6 1.6 0 0 0 1.12 2 1.36 1.36 0 0 0 1.62-1.27l.13-1h2.23c0 1.47-.45 4.48-3.29 4.77-3.1.32-5-1.72-5-6.19V16.67c0-5.79 1.87-8.46 5.61-9a7.9 7.9 0 0 1 4.06.47c.32.13.7.31.7.31a4.93 4.93 0 1 1-2.5 6.51.34.34 0 0 0-.61.27 5.6 5.6 0 1 0 9.06-6.26c3.1-.22 7.53-.52 10.16-.52 10.43 0 11.76 7.22 11.7 11.12zm1.79 2.95v6.89a.45.45 0 0 1-.89 0v-6.89a2.63 2.63 0 0 0-.46-1.59c0-.43.06-.82.07-1.17a3.18 3.18 0 0 1 1.28 2.76z" fill="currentColor"></path>
	<path d="M34.07 13.4c-2.21-2.27-6.41-2.73-7.5-2.73 0-.62 0-1 .05-1.11 6.26.16 8.2 3 8.18 2.94z" fill="#fff"></path></svg>
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
export default class SaveMoneyIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
