<template>
<div class="a-sidenav">

    <Accordion :items="accordionItems"></Accordion>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Accordion from '@/components/Accordion.vue';
import { AccordionItems } from '@/components/Accordion.vue';

@Component({
  components: {
    Accordion
  },
})
export default class SideNav extends Vue {
    accordionItems:AccordionItems[] = 
    [
        {
            label: 'Design Principles',
            showItems: true,
            items: [
                {
                    label: 'Overview',
                    action: '/overview'
                },
                {
                    label: 'Getting started',
                    action: '/getting-started'
                },
                {
                    label: 'Design tokens',
                    action: '/design-tokens'
                },
                {
                    label: 'Accessibility',
                    action: '/overview/accessibility'
                },
                {
                    label: 'Internationalisation',
                    action: '/overview/internationalisation'
                },
            ]
        },

        {
            label: 'Layout',
            showItems: false,
            items: [
                {
                    label: 'Grid',
                    action: '/layout/grid'
                },
                {
                    label: 'Containers',
                    action: '/layout/containers'
                },
                {
                    label: 'Spacing',
                    action: '/layout/spacing'
                }
            ],
        },
        {
            label: 'Components',
            showItems: false,
            items: [
                {
                    label: 'Actions',
                    action: '/components/buttons'
                },
                {
                    label: 'Popovers',
                    action: '/components/popovers'
                },
                {
                    label: 'Tooltips',
                    action: '/components/tooltips'
                }
            ]
        },
        {
            label: 'Typography',
            showItems: false,
            items: [
                {
                    label: 'Scale',
                    action: '/typography/scale'
                },
                {
                    label: 'Heading',
                    action: '/typography/heading'
                },
                {
                    label: 'Caption',
                    action: '/typography/caption'
                }
            ]
        },
        {
            label: 'Colours',
            showItems: false,
            items: [
                {
                    label: 'Brand Colours',
                    action: '/colours/brand'
                }
            ]
        },
        {
            label: 'Images',
            showItems: false,
            items: [
                {
                    label: 'Icons',
                    action: '/images/icons'
                },
                {
                    label: 'Logos',
                    action: '/images/logos'
                }
            ]
        },
    ];
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.a-sidenav {
    background-color: $default-sidnav-background-colour;
    display: block;
    top: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 120px 10px 30px;
    box-sizing: border-box;

    .a-sidenav-main-item {
        font-size: 2.5rem;
        line-height: 2.5rem;
        min-height: 3.75rem;
        margin-bottom: 0;
        text-align: left;
        width: 100%;

        a {
            color: $default-text-colour;
            text-decoration: none;

            &:hover {
                color: $default-asb-yellow;
            }
        }

        .a-sudenav-sub-items {
            margin: 2rem 0 3rem;
            text-align: left;

            .a-sudenav-sub-item {
                font-size: 1.375rem;
                line-height: 1.875rem;
                margin-bottom: .75rem;
                width: 100%;
                display: block;
            }
        }
    }
}
</style>
