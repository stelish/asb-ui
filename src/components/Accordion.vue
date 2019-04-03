<template>
<div class="a-accordion">
    <div class="a-accordion-item" v-bind.sync="items" v-for="(item, index) in items" :key="index">

        <div class="a-accordion-label" v-bind.sync="item" v-on:click="toggleItem(item)">
            <a href="#">{{item.label}}
                <ArrowDownIcon :small="true" />
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
import ArrowDownIcon from '@/components/icons/arrow-down.vue';

export interface AccordionInnerItem {
    label:string,
    action:any
}

export interface AccordionItems {
    label:string,
    showItems?:boolean,
    items:AccordionInnerItem[]
}

@Component({
    components: {
        ArrowDownIcon
    },
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
