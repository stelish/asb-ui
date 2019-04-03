<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg viewBox="0 0 32.39 40" id="icon-person" width="100%" height="100%">
    <title>people</title>
    <path d="M24.27 11.31c0 5.87-4 10.69-8.09 10.69-3.84 0-8.09-4.82-8.09-10.69S8.68 0 16.18 0c7.73 0 8.09 5.44 8.09 11.31z" fill="currentColor"></path>
    <path d="M10.27 24.67c2 1.9 3.94 3.39 5.89 3.39 1.67 0 3.75-1.13 6.19-3.36a9.58 9.58 0 0 0 3.42 1.57 5.6 5.6 0 0 1 3 1.43l.42.3a4.74 4.74 0 0 1 1.08 2.46v.6c.17 3.06 0 4.19-.13 4.57a16.17 16.17 0 0 1-5.45 1.89 48 48 0 0 1-8.42.48 50 50 0 0 1-8.61-.48 16.25 16.25 0 0 1-5.45-1.88c-.13-.37-.3-1.45-.14-4.64v-.56a4.74 4.74 0 0 1 .9-2.44l.3-.22a7.52 7.52 0 0 1 3.39-1.43 10.08 10.08 0 0 0 3.61-1.68m12.1-2.73c-1.58 1.62-4.35 4.12-6.16 4.12s-4.2-2.5-5.79-4.11h-.12a7.39 7.39 0 0 1-4.08 2.48 9.44 9.44 0 0 0-4.37 2c-1.08.78-1.67 3-1.71 4s-.37 5 .42 6.31 4.54 2.32 6.71 2.74a51.89 51.89 0 0 0 9 .52 50.16 50.16 0 0 0 8.84-.52c2.19-.42 6-1.54 6.77-2.77s.44-5.25.4-6.31a6.49 6.49 0 0 0-1.8-3.9 7.62 7.62 0 0 0-4.21-2.17 6.49 6.49 0 0 1-3.88-2.4z" fill="currentColor"></path>
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
export default class PersonIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
