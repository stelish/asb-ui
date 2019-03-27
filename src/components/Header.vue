<template>
<div class="a-header">
    <div class="header a-header-inner">
        <div class="a-l-nav">
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
        </div>
        <AsbLogo></AsbLogo>
        <div class="a-r-nav">

        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';

import AsbLogo from '@/components/AsbLogo.vue'

@Component({
  components: {
    AsbLogo
  },
})
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.a-l-nav, .a-r-nav {
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    padding: 0;
}

.a-logo {
    display: inline-block;
    vertical-align: middle;
    width: 20%;
    padding: 0;
}

.header {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 4.5em;
    padding: 0 1.25em;
    box-sizing: border-box;
    color: #fff;
    position:relative;
}

.a-header {
    min-width: 100vw;
    min-height: 60px;
    background-color: $default-header-color;
    color: $default-text-colour;
    position: absolute;
    top: 0;
    z-index: 115;
    width: 100%;
    padding: 5px 0;
    height: 60px;
    box-sizing: border-box;
}

.a-header-inner {
    height: auto;
    padding-right: .3125em;

    &::before, &::after {
        content: " ";
        display: table;
    }
}
</style>
