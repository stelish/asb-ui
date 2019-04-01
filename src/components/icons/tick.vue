<template>
    <span class="icon">
        <svg viewBox="0 0 31 31" id="icon-tick" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2" d="M15.5 1C23.508 1 30 7.492 30 15.5S23.508 30 15.5 30 1 23.508 1 15.5 7.492 1 15.5 1z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M22.497 10.742l-9.287 9.516-4.707-4.823"></path></svg>
    </span>
</template>

<style lang="scss" scoped>
@import '@/styles/icons.scss';
</style>

<script lang="ts">

import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component
export default class TickIcon extends Vue {

}
</script>