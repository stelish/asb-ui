<template>
        <span class="icon">
        <svg viewBox="-1 1 17 17" id="icon-search-header" width="100%" height="100%">
          <g
            fill="none"
            fill-rule="evenodd"
            transform="translate(0 2)"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="6.5" cy="6.5" r="6.5"></circle>
            <path d="M14.5 14.5l-3-3" fill="currentColor" stroke-linecap="square"></path>
          </g>
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
export default class SearchIcon extends Vue {

}
</script>