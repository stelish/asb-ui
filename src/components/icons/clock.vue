<template>
<span class="icon" v-bind:class="{'small':small, 'alt':alt}">
<svg id="icon-clock" width="100%" height="100%" viewBox="0 0 38 38">
<defs>
</defs>
<path fill="#FFFFFF" d="M19,0c10.493,0,19,8.507,19,19c0,10.492-8.507,19-19,19S0,29.492,0,19C0,8.507,8.507,0,19,0z"/>
<path fill="currentColor" d="M19,3c8.822,0,16,7.178,16,16c0,8.821-7.178,16-16,16c-8.822,0-16-7.179-16-16C3,10.178,10.178,3,19,3 M19,0
	C8.507,0,0,8.507,0,19c0,10.492,8.507,19,19,19s19-8.508,19-19C38,8.507,29.493,0,19,0L19,0z"/>
<path fill="currentColor" d="M18,6h2v12h-2V6z"/>
<path fill="currentColor" d="M28.346,25.501l-1.139,1.643l-6.708-4.65l1.14-1.643L28.346,25.501z"/>
<path fill="currentColor" d="M19,23c-1.657,0-3-1.344-3-3c0-1.657,1.343-3,3-3s3,1.343,3,3C22,21.656,20.657,23,19,23z M19,19
	c-0.552,0-1,0.447-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C20,19.447,19.552,19,19,19z"/>
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
export default class ClockIcon extends Vue {
    @Prop() small!: boolean;
    @Prop() alt!: boolean;
}
</script>
