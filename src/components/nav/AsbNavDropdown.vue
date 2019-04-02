<template>
<div class="asb-nav-dd">
    <div class="asb-nav-dd-inner">
        <p class="asb-nav-dd-label">{{label}}</p>
            <button v-on:click="toggleDD()">
        {{ getOptionsLabel() }}
            <ArrowDownIcon :small="true"/>
        </button>
    </div>
    <div class="asb-nav-dd-options" v-if="showDD">
        <ul>
            <li v-bind.sync="options" v-for="(item, index) in options" :key="index" v-on:click="setOption(item)">
                {{item.label}}
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

$select-height: 50px;

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    contain: content;
}

.asb-nav-dd {
    cursor: pointer;
    max-width: $default-max-action-width;
    box-sizing: border-box;
    width: fit-content;
    position: relative;
    padding: 0 .75em;

    .asb-nav-dd-inner {
        display: inline-flex;
    }

    .asb-nav-dd-label {
        color: $mid-grey;
    }

    button {
        padding: 0 0.75em;
        vertical-align: middle;
        display: table-cell;
        line-height: $select-height;
        font-size: $font-size-m;
        color: $white;
        background: transparent;
        border: none;
        outline: none;

        .down-arrow {
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

.asb-nav-dd-options {
    border: solid 1px $light-grey;
    position: absolute;
    background-color: $white;
    top: $select-height;
    left: 0;
    width: 100%;
    z-index: 100;

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        width: 0;
        height: 0;
    }

    &:before {
        right: 19px;
        border: 11px solid transparent;
        border-bottom-color: #ddd;
    }

    &:after {
        right: 20px;
        border: 10px solid transparent;
        border-bottom-color: #fff;
    }

    li {
        width: 100%;
        padding: $default-button-padding;
        border-bottom: solid 1px $light-grey;
        color: $black;

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
} from "vue-property-decorator";
import ArrowDownIcon from "@/components/icons/arrow-down.vue";

@Component({
    components: {
        ArrowDownIcon
    }
})
export default class AsbNavDropdown extends Vue {
    @Prop() private options!: AsbNavDropdownItem[];
    @Prop() private label!: string;
    private showDD: boolean = false;
    private selectedOption!: AsbNavDropdownItem;

    private setOption(item: AsbNavDropdownItem): void {
        this.selectedOption = item;
        this.toggleDD();
    }

    private toggleDD(): void {
        this.showDD = !this.showDD;
    }

    private getOptionsLabel(): string {
        return this.selectedOption ? this.selectedOption.label : this.options.length ? this.options[0].label : '';
    }
}

export interface AsbNavDropdownItem {
    label: string;
    action: string;
}
</script>
