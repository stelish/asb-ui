<template>
<div class="content left-align section">
    <h1 class="header-divider-l">Containers</h1>
    <p>
        This containers section details the available containers styles and components available for use.
    </p>
    <div class="section">
        <h2>Cards</h2>
        <p>We currently have 2 types of cards - basically with iamge and without.</p>
        <div class="section">

            <div class="columns">
                <div class="is-3">
                    <Card>
                        <h3>This is a card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="card-button">Click here</button>
                    </Card>
                </div>
                <div class="is-3">
                    <ImageCard imageSrc="https://asb.co.nz/content/dam/asb/images/web/1024x614/6036-17858-1017-asb-studying-sachi-1024x614.jpg/jcr:content/renditions/cq5dam.web.1024.615.jpeg">
                        <div>
                            <h3>This is a image card</h3>
                            <p>Image card description</p>
                            <button class="card-button">Click here</button>
                        </div>
                    </ImageCard>
                </div>
            </div>

        </div>
    </div>

    <div class="section">
        <h2>blocks</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div class="section">
            <h3>Section container</h3>
            <div class="section brand-dark-grey-bg">
                <h4>This is a section container</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="section">
            <h3>Angled container</h3>

            <AngledContainer colour="dark">
                <h2>This is angled</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </AngledContainer>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/layout.scss';
@import '@/styles/buttons.scss';
@import "@/styles/typography.scss";
@import "@/styles/backgrounds.scss";

.card-button {
    margin: 0.75em 0;
}

.section {
    min-height: 100px;
}

.bg-angled-container {
    width: 100%;
    min-height: 150px;
    height: 100%;
}
</style>

<script lang="ts">
import Card from '@/components/containers/Card.vue';
import ImageCard from '@/components/containers/ImageCard.vue';
import AngledContainer from '@/components/containers/AngledContainer.vue';

import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component({
    components: {
        Card,
        ImageCard,
        AngledContainer
    },
})
export default class Containers extends Vue {

};
</script>
