<template>
        <span class="icon">
        <svg viewBox="0 0 28 28" id="icon-help-app" width="100%" height="100%" fill="currentColor">
          <path
            d="M20 0H8a8 8 0 0 0-8 8v12a8 8 0 0 0 8 8h12a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8zM6.01 13.99V8.447c0-.244.173-.45.47-.45h2.723c.253 0 .385.17.264.38-.754 1.308-3.192 5.55-3.235 5.632-.087.155-.22.216-.22-.02H6.01zm16.69 5.006h-3.45l-1.097-1.945H10.99L9.96 19H6.49c-.21 0-.4-.136-.263-.38 1.066-1.883 5.745-10.14 5.79-10.215.138-.23.22-.403.626-.403h3.813c.425 0 .488.173.626.405.04.065 4.79 8.317 5.878 10.21.144.243-.045.383-.26.383v-.002z"
          ></path>
          <path
            d="M18.572 11.737H12.77c-.258 0-.473.168-.473.447v2.603c0 .242.178.367.397.25 1.368-.72 5.812-3.047 5.896-3.09.166-.082.232-.21-.018-.21z"
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
export default class HelpAppIcon extends Vue {

}
</script>