<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg id="icon-id-verified" width="100%" height="100%" viewBox="0 0 40 34">
<defs>
</defs>
<path fill="currentColor" d="M20,25H2V2h30v12h2V2c-1-1-0.448-0.552-1.896-2H1.938C0.969,0.969,1,1,0,2v23c1,1,1,1,2,2h18V25z"/>
<rect x="20" y="8" fill="currentColor" width="8" height="2"/>
<rect x="20" y="12" fill="currentColor" width="8" height="2"/>
<circle fill="currentColor" cx="11.5" cy="11.5" r="3.5"/>
<path fill="currentColor" d="M13.334,16H9.666C7.909,16,6,19,6,20h11C17,19,15.092,16,13.334,16z"/>
<path fill="currentColor" d="M31,16c-4.962,0-9,4.038-9,9s4.038,9,9,9c4.963,0,9-4.038,9-9S35.963,16,31,16z M31,32c-3.86,0-7-3.14-7-7
	s3.14-7,7-7c3.859,0,7,3.14,7,7S34.859,32,31,32z"/>
<polygon fill="currentColor" points="29.736,26.193 27.856,24.267 26.425,25.663 29.736,29.057 35.575,23.073 34.144,21.677 "/>
</svg>
    </span>
</template>

<style lang="scss" scoped>
@import '@/styles/icons.scss';
</style>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component
export default class IdVerifiedIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
