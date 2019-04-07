<template>
<div class="content left-align">
    <Header />
    <Container colour="dark">

        <div class="home-hero-img">
            <ImageContainer imageSrc="https://www.asb.co.nz/content/dam/asb/images/business-loans/business-and-rural-loans.jpg/jcr:content/renditions/cq5dam.web.1024.615.jpeg">
            </ImageContainer>
        </div>

        <div class="home-hero-content">
            <AngledContainer colour="dark">
                <div class="section home-hero-content-middle">
                    <h1>VueJS Design System</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="home-hero-content-cta">
                        <router-link :to="'/getting-started'" tag="button">Getting started</router-link>
                        <router-link class="alt" :to="'/overview'" tag="button">Overview</router-link>
                    </div>
                </div>
            </AngledContainer>
        </div>

    </Container>
    <AsbNavOutline :items="horizontalNavItems"/>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import AngledContainer from '@/components/containers/AngledContainer.vue';
import Container from '@/components/containers/Container.vue';
import ImageContainer from '@/components/containers/ImageContainer.vue';
import Header from '@/components/Header.vue'
import AsbNavOutline,{ AsbNavOutlineItem } from '@/components/nav/AsbNavOutline.vue';

@Component({
    components: {
        Container,
        ImageContainer,
        Header,
        AngledContainer,
        AsbNavOutline

    },
})
export default class Home extends Vue {
    constructor() {
        super();
    }

    private horizontalNavItems:AsbNavOutlineItem[] = [
      {
        label:'Why use a design system',
        action: '/why',
        hero: false
      },
      {
        label:'Benefits of a design system',
        action: '/benefits',
        hero: false
      },
      {
        label:'Toolkit',
        action: '/toolkit',
        hero: false
      },
      {
        label:'Getting started',
        action: '/getting-started',
        hero: true
      }
    ]
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/typography.scss';
@import '@/styles/buttons.scss';
$hero-height: 513px;

.home-hero-img {
    height: $hero-height;
    width: 60%;
    float: right;
}

.home-hero-content {
    height: $hero-height;
}

.home-hero-content-middle {
  height: 100%;
  vertical-align: middle;
  align-items: center;
  margin: 1.090909em auto;

  h1 {
    color: $default-asb-yellow;
    margin: .4em auto;
    font-size: 3.75em;
    line-height: 1.2em;
  }

  p {
    font-size: 1.375em;
    line-height: 1.363636em;
  }
}

.home-hero-content-cta {
  padding: 1.66666em 0;
  display: inline-flex;
}
</style>
