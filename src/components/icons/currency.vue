<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 29.93 40.46" id="needs-icon-overseas-money" width="100%" height="100%">
    <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" d="M.67 11.322L21.715.667l5.31 10.492L5.982 21.812z"></path>
    <circle cx="19.06" cy="11.53" r="5.85" transform="rotate(-26.85 15.846 22.292)" fill="#fff" stroke="currentColor" stroke-miterlimit="10"></circle>
    <path fill="currentColor" d="M21.29 1.93l-1.67.85 2.51.82-.84-1.67m3.61 7.14l-.83 2.51 1.67-.84-.84-1.67m-21.26 1.8l-1.67.84.84 1.67.83-2.51"></path>
    <path d="M11.36 12.95l.25-.13a2.82 2.82 0 0 1-.14-.26c-.05-.1-.11-.21-.15-.32l-.25.13a.48.48 0 0 1-.65-.2.49.49 0 0 1 .21-.65l.42-.21a2.83 2.83 0 0 1 1.5-3.16 2.62 2.62 0 0 1 2.24-.17.73.73 0 0 1 .4.35.7.7 0 0 1-.32.93.66.66 0 0 1-.55 0 1.37 1.37 0 0 0-1.22 0 1.29 1.29 0 0 0-.7 1.29l1.18-.6a.49.49 0 0 1 .65.21.48.48 0 0 1-.22.64l-1.38.7c0 .1.09.2.14.3a3.09 3.09 0 0 0 .15.27l1.38-.7a.49.49 0 0 1 .65.21.48.48 0 0 1-.22.64l-1.2.61a1.33 1.33 0 0 0 1.54.2 1.37 1.37 0 0 0 .73-1 .63.63 0 0 1 .37-.32.66.66 0 0 1 .88.29.73.73 0 0 1 .06.44 2.57 2.57 0 0 1-1.42 1.89 2.83 2.83 0 0 1-3.51-.66l-.39.14a.48.48 0 0 1-.65-.2.49.49 0 0 1 .22-.66z" fill="#f7b107"></path>
    <path fill="currentColor" stroke="#fff" stroke-miterlimit="10" stroke-width="2.357" d="M4.68 13.71h23.59v11.76H4.68z"></path>
    <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" d="M4.68 13.71h23.59v11.76H4.68z"></path>
    <circle cx="16.48" cy="19.58" r="5.85" fill="#fff" stroke="currentColor" stroke-miterlimit="10"></circle>
    <path fill="currentColor" d="M27.32 16.5v-1.87h-1.87l1.87 1.87m-1.87 8h1.87v-1.87l-1.87 1.87"></path>
    <path fill="#666" d="M5.67 22.64v1.87h1.87l-1.87-1.87"></path>
    <path fill="currentColor" d="M7.53 14.64H5.66v1.87l1.87-1.87m6.51 7.07v-1.33h-.17a.59.59 0 0 1-.6-.59.6.6 0 0 1 .6-.6h.17v-.75a2.22 2.22 0 0 1 .56-1.6 2.25 2.25 0 0 1 1.66-.6 2.37 2.37 0 0 1 1.8.71.68.68 0 0 1 .22.51.7.7 0 0 1-.71.7.71.71 0 0 1-.51-.21 1 1 0 0 0-.78-.37.71.71 0 0 0-.53.21 1 1 0 0 0-.24.69v.72h1.58a.6.6 0 0 1 .6.6.59.59 0 0 1-.6.59H15.5v1.25h2.29a.63.63 0 0 1 .63.63.62.62 0 0 1-.63.62h-3.94a.54.54 0 0 1-.58-.52.56.56 0 0 1 .39-.53z"></path>
    <path fill="currentColor" stroke="#fff" stroke-miterlimit="10" stroke-width="2.357" d="M6.897 18.45l21.48 9.752-4.862 10.708-21.48-9.753z"></path>
    <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" d="M6.897 18.45l21.48 9.752-4.862 10.708-21.48-9.753z"></path>
    <circle cx="20.41" cy="28.96" r="5.85" transform="rotate(-65.58 17.582 32.852)" fill="#fff" stroke="currentColor" stroke-miterlimit="10"></circle>
    <path fill="currentColor" d="M26.35 30.35l.77-1.7-1.7-.78.93 2.48m-5.01 6.51l1.7.77.77-1.7-2.47.93M4.1 26.98l-.77 1.7 1.7.77-.93-2.47m5.01-6.51l-1.7-.77-.78 1.7 2.48-.93m4.46 5.39a.77.77 0 0 1 0-.51.68.68 0 0 1 .91-.32.77.77 0 0 1 .44.63l.4 2.38 2.06-1.25a.8.8 0 0 1 .81-.08.65.65 0 0 1 .35.88.81.81 0 0 1-.36.37l-2.15 1.15.76.36a.5.5 0 0 1-.41.9l-1.14-.52-.24.52 1.14.52a.5.5 0 0 1-.41.9l-1.14-.52-.09.2a.68.68 0 0 1-1.24-.56l.09-.2-1.14-.52a.5.5 0 1 1 .41-.9l1.17.53.24-.52-1.14-.52a.5.5 0 0 1 .41-.9l.79.36z"></path>
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
export default class CurrencyIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
