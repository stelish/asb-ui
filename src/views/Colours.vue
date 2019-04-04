<template>
<div class="content left-align section">
    <h1>Colours</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="container">
        <h2>Brand</h2>
        <div class="columns">
            <div class="column is-2 layout-container center-align brand-gold-bg">
                <h3>Gold</h3>
                <p>#fcbd1b</p>
            </div>
            <div class="column is-2 layout-container center-align brand-light-grey-bg">
                <h3>Light-grey</h3>
                <p>#f6f7fb</p>
            </div>
            <div class="column is-2 layout-container center-align brand-grey-bg">
                <h3>Mid-grey</h3>
                <p>#424242</p>
            </div>
            <div class="column is-2 layout-container center-align brand-dark-grey-bg">
                <h3>Dark-grey</h3>
                <p>#262626</p>
            </div>
        </div>

         <div class="columns">
            <div class="column is-2 layout-container center-align brand-blue-bg">
                <h3>Blue</h3>
                <p>#0064ac</p>
            </div>

        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout.scss';
@import '@/styles/buttons.scss';
@import '@/styles/backgrounds.scss';

.layout-container{
    margin: 5px;
}

</style>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class Colours extends Vue {
    constructor() {
        super();
        console.log('Colours Page');
    }
}
</script>
