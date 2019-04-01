<template>
<div class="a-accordion">
    <div class="a-accordion-item" v-bind.sync="items" v-for="(item, index) in items" :key="index">

        <div class="a-accordion-label" v-bind.sync="item" v-on:click="toggleItem(item)">
            <a href="#">{{item.label}}
                <span class="down-arrow">
                    <svg viewBox="192 26 14 9" id="icon-arrow-down" width="100%" height="100%">
                        <path stroke="currentColor" stroke-width="1.5" fill="none" d="M204.89 27l-5.938 6L193 27.067"></path>
                    </svg>
                </span>
            </a>
        </div>

        <div class="a-accordion-items" v-if="item.showItems">
            <div class="a-accordion-item-inner" v-for="(subItem, ind) in item.items" :key="ind">
                <router-link class="a-sub-item" :to="subItem.action" tag="a">{{subItem.label}}</router-link>
            </div>
        </div>

    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/typography.scss';
    .a-accordion {
        display: block;
        box-sizing: border-box;
        position: relative;
    }
    .a-accordion-items{
        margin: $accordion-items-margin;
    }
    .a-accordion-item {
        text-align: left;
        font-size: 2.5rem;
        line-height: 2.5rem;
        min-height: 3.75rem;
        position: relative;
        width: 100%;

        .a-accordion-label {
            margin: $accordion-label-button-margin;
        }

        a {
            color: $default-text-colour;
            text-decoration: none;
            width: 100%;

            &:hover {
                color: $default-asb-yellow;
            }
        }

        .a-accordion-item-inner {
            font-size: 1.375rem;
            line-height: 1.875rem;
            margin: $accordion-item-margin;
            width: 100%;
            display: block;
        }

        .down-arrow {
            float: right;
            line-height: 100%;
            cursor: pointer;
            text-align: left;
            font-size: 1rem;
            line-height: 50px;
            position: relative;
            height: 50px;
            box-sizing: border-box;

            svg {
            width: 14px;
            height: 9px;
            }
        }
    }

</style>

<script lang="ts">
import {Component,Prop,Vue,Emit, Watch} from 'vue-property-decorator';

export interface AccordionInnerItem {
    label:string,
    showItems:boolean,
    action:any
}

export interface AccordionItems {
    label:string,
    items:AccordionInnerItem[]
}

@Component({
    components: {},
    template: ''
})
export default class Accordion extends Vue {
    @Prop() private items!: AccordionItems[];

    @Watch('items')
    onItemsChanged(value:any, oldValue:any) {
        console.log(value);
    }

    constructor() {
        super();
    }

    toggleItem(item:AccordionInnerItem):void {
        item.showItems = !item.showItems;
    }
}
</script>
