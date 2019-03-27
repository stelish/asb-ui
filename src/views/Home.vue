<template>
  <div class="left-align">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {
  constructor() {
    super();
    console.log('Home Page');
  }
}
</script>

<style lang="scss" scoped>
  .home {
    text-align: left;
  }
</style>

