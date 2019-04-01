<template>
        <span class="icon">
        <svg viewBox="0 0 19.439 31.68" id="icon-help-change" width="100%" height="100%" fill="currentColor">
          <path
            d="M7.983 26.535c3.99 0 10.646 0 10.646-10.29 0 5.146-6.657 5.146-10.648 5.146v-5.143L0 23.963l7.983 7.717v-5.145z"
          ></path>
          <path
            d="M11.455 5.145c-3.99 0-10.646 0-10.646 10.29 0-5.146 6.653-5.146 10.644-5.146v5.143l7.983-7.717L11.455 0v5.145z"
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
export default class HelpChangeIcon extends Vue {

}
</script>