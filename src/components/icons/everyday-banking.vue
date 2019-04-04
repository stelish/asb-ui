<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 40 40" id="needs-icon-find-a-branch" width="100%" height="100%">
    <rect y="38" width="40" height="2" rx="1" ry="1" fill="currentColor"></rect>
    <rect width="40" height="14.03" rx="2.16" ry="2.16" fill="currentColor"></rect>
    <rect x="3.94" y="16.19" width="2" height="19.89" rx=".91" ry=".91" fill="currentColor"></rect>
    <rect x="33.81" y="16.06" width="2" height="20.16" rx=".92" ry=".92" fill="currentColor"></rect>
    <rect x="18.98" y="12.03" width="2" height="27.97" rx="1" ry="1" fill="currentColor"></rect>
    <circle cx="24.92" cy="26.01" r="2" fill="currentColor"></circle>
    <circle cx="15.09" cy="26.01" r="2" fill="currentColor"></circle>
    <path d="M19.12 6.21h3.12a1.68 1.68 0 0 1 1.82 1.5v.82A1.68 1.68 0 0 1 22.24 10h-3.65c-1.56 0-2.16-.8-2.2-1.6a.2.2 0 0 1 .24-.25h1.83a.54.54 0 0 0 .66.49h2.2a.54.54 0 0 0 .68-.46c0-.41-.26-.5-.66-.5h-2.79c-1.56 0-2.12-.82-2.12-1.62v-.6A1.62 1.62 0 0 1 18.18 4h3.89a1.63 1.63 0 0 1 1.75 1.42c0 .1 0 .25-.25.25h-1.86v-.05a.44.44 0 0 0-.53-.33h-2.06a.43.43 0 0 0-.54.45.44.44 0 0 0 .54.46M7 4.27v3c0 .13.07.1.11 0l1.7-3.04A.135.135 0 0 0 8.67 4H7.25a.24.24 0 0 0-.25.27m20.38 3.37v1h2.84a.54.54 0 0 0 .66-.51.53.53 0 0 0-.66-.54h-2.84zm0-2.34v1h2.8a.45.45 0 0 0 .54-.48.44.44 0 0 0-.54-.48h-2.8zm-2.07 4.51V4.25a.23.23 0 0 1 .23-.25h5.06c1.47 0 2.18.35 2.18 1.57a1.13 1.13 0 0 1-.73 1.31c-.05.05-.05.12 0 .12A1.1 1.1 0 0 1 33 8.38c0 1.31-.78 1.62-1.83 1.62h-5.63a.23.23 0 0 1-.23-.23m-9.59.23h-1.8l-.57-1H9.61l-.54 1H7.25a.13.13 0 0 1-.14-.21l3-5.59a.32.32 0 0 1 .36-.2h2a.31.31 0 0 1 .33.22l3.07 5.58a.13.13 0 0 1-.14.21m-2.16-4h-3a.24.24 0 0 0-.25.25v1.47a.13.13 0 0 0 .21.14l3.08-1.69c.09 0 .12-.12 0-.12" fill="#fff"></path>
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
export default class EverydayBankingIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
