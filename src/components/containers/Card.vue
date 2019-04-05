<!--
    Props: 
    Props here to consider involve being able to set styling, visible content (title, button bar)

    Styles:
    Margin: thin, wide, super-wide

 -->
<template>
    <div class="card">
        <slot></slot>
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
export default class Card extends Vue{
    @Prop() styleType!:string;
    
}

</script>


