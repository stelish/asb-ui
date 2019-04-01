<template>
        <span class="icon">
        <svg viewBox="0 0 19.001 26.002" id="icon-help-fnc" width="100%" height="100%" fill="currentColor">
          <path
            d="M17.915 10.036H1.085c-.6 0-1.085.467-1.085 1.04v13.888c0 .574.486 1.038 1.086 1.038h16.83c.598 0 1.085-.464 1.085-1.038v-13.89c0-.57-.485-1.038-1.084-1.038zm-7.884 9.912V22H8.97v-2.058C7.615 19.672 6.593 18.46 6.593 17c0-1.657 1.315-3 2.938-3s2.94 1.343 2.94 3c0 1.482-1.056 2.705-2.44 2.948z"
          ></path>
          <path
            d="M2.036 9.987V7.005C2.036 3.135 5.453 0 9.5 0s7.465 3.136 7.465 7.005v2.982M13.995 7.2c0-2.318-2.024-4.2-4.472-4.2C7.073 3 4.99 4.882 4.99 7.2v2.795h9.006V7.2z"
            opacity=".6"
          ></path>
        </svg>
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
export default class HelpFncIcon extends Vue {}
</script>