<template>
<div>
  <Header></Header>
  <div class="container">
    <div class="columns">
      <div class="column is-2">
        <SideNav></SideNav>
      </div>
      <div class="column is-8 section">
        <slot />
      </div>
    </div>
  </div>
</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'
import SideNav from '@/components/SideNav.vue'

@Component({
  components: {
    Header,
    SideNav
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
@import '@/styles/layout.scss';

.section{
  margin-top: 60px;
}
</style>
