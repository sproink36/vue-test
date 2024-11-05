<template>
  <div class="block">
    <TitleInput>Площадь, м<sup>2</sup></TitleInput>
    <div class="diapason">
      <div class="diapason__block-input">
        <input
          class="diapason__input"
          type="number"
          :max="diapasonValue?.currentValues.currentMax"
          :min="diapasonValue?.minValue"
          :step="diapasonValue?.step"
          @blur="applyInputMin"
          @keypress.enter="applyInputMin"
          v-model="inputMin"
        />
      </div>
      <div class="diapason__line"></div>
      <div class="diapason__block-input">
        <input
          class="diapason__input"
          type="number"
          :max="diapasonValue?.maxValue"
          :min="diapasonValue?.currentValues.currentMin"
          :step="diapasonValue?.step"
          @blur="applyInputMax"
          @keypress.enter="applyInputMax"
          v-model="inputMax"
        />
      </div>
      <MultiRangeSlider
        baseClassName="multi-range-slider-bar-only custom-slider"
        :minValue="diapasonValue?.currentValues.currentMin"
        :maxValue="diapasonValue?.currentValues.currentMax"
        :max="diapasonValue?.maxValue"
        :min="diapasonValue?.minValue"
        :step="diapasonValue?.step"
        :rangeMargin="0"
        :preventWheel="false"
        @input="update_oBarValues"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MultiRangeSlider from "multi-range-slider-vue";
import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";
import { TitleInput } from "..";
import { ref, watch } from "vue";

export interface IDiapasonValue {
  minValue: number;
  maxValue: number;
  step: number;
  currentValues: {
    currentMin: number;
    currentMax: number;
  };
}

const diapasonValue = defineModel<IDiapasonValue>();
const inputMin = ref(diapasonValue.value?.minValue);
const inputMax = ref(diapasonValue.value?.maxValue);

watch(
  () => diapasonValue.value?.currentValues.currentMin,
  (newValue) => {
    inputMin.value = newValue;
  }
);

watch(
  () => diapasonValue.value?.currentValues.currentMax,
  (newValue) => {
    inputMax.value = newValue;
  }
);

function update_oBarValues(e: { minValue: number; maxValue: number }) {
  if (diapasonValue.value) {
    diapasonValue.value.currentValues.currentMin = e.minValue;
    diapasonValue.value.currentValues.currentMax = e.maxValue;
  }
}

function applyInputMin() {
  if (inputMin.value !== undefined && diapasonValue.value !== undefined) {
    if (inputMin.value > diapasonValue.value?.currentValues.currentMax) {
      inputMin.value = diapasonValue.value?.currentValues.currentMax;
      diapasonValue.value.currentValues.currentMin = inputMin.value;
    } else if (inputMin.value < diapasonValue.value.minValue) {
      inputMin.value = diapasonValue.value.minValue;
      diapasonValue.value.currentValues.currentMin = inputMin.value;
    } else {
      diapasonValue.value.currentValues.currentMin = inputMin.value;
    }
  }
}

function applyInputMax() {
  if (inputMax.value !== undefined && diapasonValue.value !== undefined) {
    if (inputMax.value < diapasonValue.value.currentValues.currentMin) {
      inputMax.value = diapasonValue.value.currentValues.currentMin;
      diapasonValue.value.currentValues.currentMax = inputMax.value;
    } else if (inputMax.value > diapasonValue.value.maxValue) {
      inputMax.value = diapasonValue.value.maxValue;
      diapasonValue.value.currentValues.currentMax = inputMax.value;
    } else {
      diapasonValue.value.currentValues.currentMax = inputMax.value;
    }
  }
}

</script>
<style lang="scss" scoped>
@use "/src/app/styles/mixins/common" as *;
.block {
  width: 230px;
}

.diapason {
  @include input-defualt;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
}

.diapason__block-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.diapason__input {
  max-width: 40px;
  text-align: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Убирает стрелочки в Firefox */
}

.diapason__line {
  height: 30px;
  width: 1px;
  background-color: #dedede;
  text-align: center;
}

.custom-slider {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: calc(100% - 24px);
  transform: translate(-50%, 52%);
}
</style>

<style lang="scss">
@use "/src/app/styles/variables" as *;
@use "/src/app/styles/mixins/common" as *;
@include custom-slider;
</style>
