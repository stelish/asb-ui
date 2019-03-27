<template>
<div>
    <Header></Header>
    <slot />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  },
})
export default class NoSideBar extends Vue {}
</script>