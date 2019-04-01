<template>
<button role="checkbox" aria-checked="false">
                <input type="checkbox" id="cb" v-model="checked" v-bind.sync="checked">
                <label for="checkbox">{{label}}</label>
            </button>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop,
    Watch
} from 'vue-property-decorator';

@Component({
    components: {},
    template: ''
})
export default class AsbCheckBox extends Vue {
    @Prop() private label!: string;
    @Prop() private checked!: boolean;

    @Watch('checked')
    onItemChanged(value:any, oldValue:any) {
        console.log(value);
    }
}
</script>
