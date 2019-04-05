<!--

 -->
<template>
    <div class="card">
        <img class="card-image" v-bind:src="imageSrc"/>
        <div class="card-caption">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/variables.scss';
    .card {
        padding: $default-container-padding;
        margin: 0.75em;
        width: fit-content;
        content: contain;
        box-sizing: border-box;
        float: left;
        cursor: pointer;
    }

    .card-image {
        min-width: 100%;
        width: 100%;
        height: auto;
    }

    .card-caption {
        text-align: left;
        padding: 0.75em 0;
    }

</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class ImageCard extends Vue{
    @Prop() styleType!:string;
    @Prop() imageSrc!:string;

    constructor() {
        super();
    }
    
}

export enum CardStyleTypes {

}
</script>


