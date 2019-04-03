<template>
  <div class="asb-select-box">
    <button v-on:click="toggleDD()">
      {{ getLabel() }}
      <ArrowDownIcon :small="true" v-if="!showDD"/>
      <ArrowUpIcon :alt="true" :small="true" v-if="showDD"/>
    </button>
    <div class="asb-select-dd" v-if="showDD">
      <ul>
        <li v-bind.sync="options" v-for="(item, index) in options" :key="index" v-on:click="setOption(item)">
          {{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

$select-height: 50px;
$button-padding: 0 0.75em;
$border-bottom: solid 1px $light-grey;
$button-min-width: 125px;
$dropdown-zindex: 100;
$icon-zindex: 101;

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  contain: content;
}

.icon {
    position: absolute;
    z-index: $icon-zindex;
    right: 0.75em;
    top: 0px;
}

.asb-select-box {
  cursor: pointer;
  max-width: $default-max-action-width;
  box-sizing: border-box;
  width: fit-content;
  position: relative;

  button {
    padding: $button-padding;
    vertical-align: middle;
    display: table-cell;
    line-height: $select-height;
    font-size: $font-size-m;
    background-color: $default-asb-grey;
    color: $white;
    outline: none;
    min-width: $button-min-width;
    text-align: left;
  }
}

.asb-select-dd {
  border: $border-bottom;
  position: absolute;
  background-color: $white;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $dropdown-zindex;

  li {
    width: 100%;
    padding: 0.75em;
    border-bottom: $border-bottom;

    &:hover {
      background-color: $light-grey;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ArrowDownIcon from "@/components/icons/arrow-down.vue";
import ArrowUpIcon from "@/components/icons/arrow-up.vue";

@Component({
  components: {
    ArrowDownIcon,ArrowUpIcon
  }
})
export default class AsbSelectBox extends Vue {
  @Prop() private options!: AsbSelectBoxItem[];
  @Prop() private placeholder: string = "";
  private showDD:boolean = false;
  private selectedOption!:AsbSelectBoxItem;

  private setOption(item:AsbSelectBoxItem):void {
    this.selectedOption = item;
    this.toggleDD();
  }

  private toggleDD():void {
    this.showDD=!this.showDD;
  }

  private getLabel():string {
    return this.selectedOption ? this.selectedOption.label : this.options.length ? this.options[0].label : ''; // no need for place holder
  }
}

export interface AsbSelectBoxItem {
  label: string;
  value: string;
}
</script>
