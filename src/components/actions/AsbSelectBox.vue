<template>
<div class="asb-select-box">
    <button>{{placeholder}} <ArrowDownIcon /></button>
    <div class="asb-select-dd">
        <ul>
            <li v-bind.sync="options" v-for="(item, index) in options" :key="index">
                {{item.label}}
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

$select-height: 50px;

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.asb-select-box {
    cursor: pointer;
    max-width: $default-max-action-width;
    contain: content;
    box-sizing: border-box;
    width: fit-content;

    button {
        padding: 0 .75em;
        vertical-align: middle;
        display: table-cell;
        line-height: $select-height;
        font-size: $font-size-m;
        background-color: $default-asb-grey;
        color: $white;

        .icon {
            margin-left: 30px;
            float: right;
            line-height: $select-height;
            height: $select-height;
            font-size: $font-size-m;
            position: relative;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

            svg {
                width: 14px;
                height: 9px;
            }
        }
    }
}

.asb-select-dd {
    border: solid 1px #ccc;

    li {
        width: 100%;
        padding: $default-button-padding;

        &:hover {
            background-color: $light-grey;
        }
    }
}
</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop,
    Watch
} from 'vue-property-decorator';

import ArrowDownIcon from '@/components/icons/arrow-down.vue';

@Component({
    components: {
        ArrowDownIcon
    }
})
export default class AsbSelectBox extends Vue {
    @Prop() private options!: any[];
    @Prop() private placeholder: string = 'please choose';
}

export interface AsbSelectBoxItem {
    label: string;
    value: string;
}
</script>
