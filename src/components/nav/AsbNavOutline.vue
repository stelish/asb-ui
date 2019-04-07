<template>
<Container colour="light">
    <div class="content-area">
        <div class="asb-nav-items">
            <ul>
                <router-link :to="item.action" tag="li" v-bind.sync="items" v-for="(item, index) in items" :key="index" v-bind:class="{'selected':getCurrentIndex(index)}">
                    <a href="#">
                            {{item.label}}
                        </a>
                </router-link>
            </ul>

            <ul class="nav-cta">
                <router-link :to="item.action" tag="li" v-for="(item, index) in getHeroItems()" :key="index">
                    <a href="#">
                            {{item.label}}
                        </a>
                </router-link>
            </ul>
        </div>
    </div>

</Container>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/layout.scss';

.asb-nav-items {
    color: inherit;
    display: inline-flex;

    ul {
        list-style: none;
        margin: 0;
        padding: .75em 1.25em;
        display: inline-flex;
        width: fit-content;

        li {
            margin: .75em .75em .75em 0;
            cursor: pointer;
            color: $mid-grey;
            padding: 0 1.25em;

            a {
                color: $black;
            }

            &.selected {
                a {
                    font-weight: 700;
                }
            }
        }
    }

    .nav-cta {
        padding: .75em 1.25em;
        float: right;
        box-shadow: -2px 0 3px 0 #ccd1e8;
        font-weight: 700;

        li {
            a {
                color: $default-asb-blue;
                font-weight: 700;
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
import Container from '@/components/containers/Container.vue';

@Component({
    components: {
        Container
    }
})
export default class AsbNavOutline extends Vue {
    @Prop() items!: AsbNavOutlineItem[];
    private selectedIndex: number = 0;

    getCurrentIndex(index: number): boolean {
        return this.selectedIndex === index;
    }

    getHeroItems(): AsbNavOutlineItem[] {
        return this.items.filter(item => {
            return item.hero;
        });
    }

}

export interface AsbNavOutlineItem {
    label: string;
    action: any;
    hero ? : boolean;
}
</script>
