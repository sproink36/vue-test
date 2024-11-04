<template>
  <div class="block">
    <TitleInput>Площадь, м<sup>2</sup></TitleInput>
    <MultiRangeSlider
      baseClassName="multi-range-slider-bar-only"
      :minValue="barMinValue"
      :maxValue="barMaxValue"
      :max="162"
      :min="17"
      :step="1"
      :rangeMargin="0"
      :preventWheel="false"
      @input="update_oBarValues"
    />
  </div>
</template>

<script lang="ts" setup>
import MultiRangeSlider from "multi-range-slider-vue";
import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";
import { ref } from "vue";
import { TitleInput } from "..";

export interface IAreaSize {
  minArea: number,
  maxArea: number,
  currentArea: {
    currentMin: number,
    currentMax: number,
  }
}

const areaSize = defineModel<IAreaSize>();

const barMinValue =  ref();
const barMaxValue = ref(90);

function update_oBarValues(e: { minValue: number; maxValue: number }) {
  barMinValue.value = e.minValue;
  barMaxValue.value = e.maxValue;
}
</script>
<style lang="scss" scoped>
.block {
  width: 300px;
}
</style>
