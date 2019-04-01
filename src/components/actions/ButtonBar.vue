<template>
    <div class="button-bar">
        <button v-bind.sync="items" v-for="(item, index) in items" :key="index">
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">

import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component({
    components: {},
    template: ''
})
export default class ButtonBar extends Vue {
    @Prop() private items!: ButtonBarItem[];
}

export interface ButtonBarItem {
    label:string;
    action:string;
}
</script>
