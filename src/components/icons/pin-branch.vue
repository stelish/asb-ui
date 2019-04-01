<template>
        <span class="icon">
        <svg viewBox="0 0 84 118" id="icon-pin-branch" width="100%" height="100%">
          <g fill="#FABC1D">
            <path
              d="M42.3 0C20.6 0 3 19.2 3 42.9c0 5.8.8 14.7 7.5 26.3C17.2 80.8 42.3 118 42.3 118s25.2-37.2 31.8-48.8c6.7-11.6 7.5-20.5 7.5-26.3C81.7 19.2 64.1 0 42.3 0zM18 40.2V22.8c0-.8 1.1-1.8 2-1.8h8.2c.8 0 1.2.7.8 1.4-2.3 4.1-9.9 17.5-10 17.8-.3.4-1 .7-1 0zM68.7 56H58.3L55 50H33.5l-3.1 6H20c-.6 0-1.2-.5-.8-1.2 3.2-5.9 17.2-32 17.4-32.3.4-.7.7-1.5 1.9-1.5h11.4c1.3 0 1.5.7 1.9 1.5.1.2 14.4 26.3 17.6 32.2.5.7-.1 1.3-.7 1.3z"
            ></path>
            <path
              d="M56.3 33.1H38.9c-.8 0-1.4.5-1.4 1.4v8.2c0 .8.5 1.2 1.2.8 4.1-2.3 17.4-9.6 17.7-9.7.4-.3.6-.7-.1-.7"
            ></path>
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
export default class PinBranchIcon extends Vue {

}
</script>