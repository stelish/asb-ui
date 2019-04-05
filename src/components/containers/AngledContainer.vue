<template>
<div class="bg-angled-container">

    <div class="bg-angled" v-bind:class="{'brand-dark-grey-bg':colour=='dark'}">

    </div>

    <div class="bg-content container" v-bind:class="{'brand-dark-grey-bg':colour=='dark'}">
        <slot></slot>
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/backgrounds.scss';

.bg-angled-container {
    width: 100%;
    height: 100%;
    position: relative;

}

.bg-content {
    left: 8%;
    position: absolute;
    z-index: 21;
    width: 45%;
    background-color: transparent !important;
}

.bg-angled {
    width: 55%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 20;

    transform: skewX(-30deg) translate3d(0, 0, 0);
    transform-origin: 0 50%;
}
</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class AngledContainer extends Vue {
    @Prop() blockLeft!: boolean;
    @Prop() blockRight!: boolean;
    @Prop() colour!: string;

}
</script>
