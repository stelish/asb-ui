<template>
<div class="container asb-breadcrumbs" v-bind:class="{'alt':alt}">
    <ul>
        <router-link :to="item.action" tag="li" v-bind.sync="items" v-for="(item, index) in items" :key="index" v-bind:class="{'selected':getCurrentIndex(index)}">
            {{item.label}}
            <ArrowRightIcon :small="true" />
        </router-link>
    </ul>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/layout.scss';

.asb-breadcrumbs {
    color: inherit;

    &.alt {
        background-color: $asb-alt-background;
        color: $white;
        padding-left: .75em;

        ul {
            li {
                &.selected {
                    font-weight: 700;
                    color: $white;
                }
            }
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-flex;
        width: fit-content;

        li {
            margin: .75em .75em .75em 0;
            cursor: pointer;
            color: $mid-grey;

            &.selected {
                font-weight: 700;
                color: $black;
            }

            .icon {
                margin-left: .75em;
            }
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
import ArrowRightIcon from '@/components/icons/arrow-right.vue';

@Component({
    components: {
        ArrowRightIcon
    }
})
export default class AsbBreadcrumbs extends Vue {
    @Prop() items!: AsbBreadcrumb[];
    @Prop() alt!: boolean;
    private selectedIndex: number = 0;

    getCurrentIndex(index: number): boolean {
        return this.selectedIndex === index;
    }

}

export interface AsbBreadcrumb {
    label: string;
    action: any;
}
</script>
