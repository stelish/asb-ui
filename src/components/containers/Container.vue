<template>
<div class="container clearfix" 
v-bind:class="{
    'brand-dark-grey-bg':colour==='dark', 
    'brand-gold-bg':colour==='gold',
    'brand-blue-bg':colour==='blue',
    'brand-light-grey-bg':colour==='light'
}">
    <slot></slot>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/backgrounds.scss';
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
export default class Container extends Vue {
    @Prop() colour!: string;
}
</script>
