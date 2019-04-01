<template>
<button role="radio">
            <input type="radio" :id="value" :value="value" v-model="model">
            <label :for="value">{{label}}</label>
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
export default class AsbRadioButton extends Vue {
    @Prop() private label!: string;
    @Prop() private model!: boolean;
    @Prop() private value!: any;

    @Watch('model')
    onItemChanged(value: any, oldValue: any) {
        console.log(value);
    }
}
</script>
