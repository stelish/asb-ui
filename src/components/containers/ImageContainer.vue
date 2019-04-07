<!--

 -->
<template>
    <div class="img-container" :style="{ background: getBgImage() }">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/variables.scss';
    .img-container {
        width: 100%;
        height: 100%;
    }
</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';
import BackgroundImageStyleGenerator from '@/services/background-image-style-generator.ts';

@Component({
    components: {},
})
export default class ImageContainer extends Vue {
    @Prop() styleType!:string;
    @Prop() imageSrc!:string;

    private backgroundImageStyleGenerator:BackgroundImageStyleGenerator = new BackgroundImageStyleGenerator();

    constructor() {
        super();
    }

    getBgImage():string {
        let img = this.backgroundImageStyleGenerator.getBackgroundStyleWithUrl(this.imageSrc);
        console.log(img);
        return img;
    }
    
}

</script>


