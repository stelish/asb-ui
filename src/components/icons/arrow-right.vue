<template>
    <span class="icon right" v-bind:class="{'small':small}">
        <svg viewBox="192 26 14 9" id="icon-arrow-down" width="100%" height="100%"><path stroke="currentColor" stroke-width="1.5" fill="none" d="M204.89 27l-5.938 6L193 27.067"></path></svg>
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
export default class ArrowRightIcon extends Vue {
    @Prop() small!:boolean;
}
</script>
