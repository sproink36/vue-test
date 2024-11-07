<template>
  <div class="filter-block">
    <InputBlockDrop
      v-model="choiceRK"
      :list-items="listRK"
      style="grid-area: item1"
      >Выбрать ЖК</InputBlockDrop
    >
    <RoominessSelect
      v-model="roomines"
      :list-item="listRooms"
      style="grid-area: item2"
      >Комнатность</RoominessSelect
    >
    <DiapasonInput v-model="areaSize" style="grid-area: item3"
      >Площадь, м<sup>2</sup></DiapasonInput
    >
    <DiapasonInput v-model="price" style="grid-area: item4"
      >Стоимость, млн ₽</DiapasonInput
    >
    <InputBlockDrop
      v-model="choiceCase"
      :list-items="listCase"
      style="grid-area: item5"
      >Выбрать корпус</InputBlockDrop
    >
  </div>
</template>

<script setup lang="ts">
import {
  DiapasonInput,
  InputBlockDrop,
  RoominessSelect,
} from "../../../shared";
import { IDiapasonValue } from "../../../shared/ui/DiapasonInput.vue";

defineProps<{
  listRK: string[];
  listRooms: string[];
  listCase: string[];
}>();

const roomines = defineModel("roomines");
const choiceRK = defineModel("choice-RK");
const areaSize = defineModel<IDiapasonValue>("area-size");
const price = defineModel<IDiapasonValue>("price");
const choiceCase = defineModel("choice-case");

</script>

<style lang="scss" scoped>
@use "/src/app/styles/media-queries.scss";
.filter-block {
  display: grid;
  grid-template-areas: "item1 item2 item3 item4 item5";
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 55px;

  @include media-queries.media-xlarge {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    column-gap: 30px;
  }

  @include media-queries.media-large {
    grid-template-columns: minmax(100px, 155px) 219px minmax(100px, 155px) 228px minmax(
        100px,
        155px
      );
  }

  @include media-queries.media-medium {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      "item1 item1 item1 item5 item5 item5"
      "item2 item2 item3 item3 item4 item4";
    column-gap: 20px;
    row-gap: 24px;
    margin-bottom: 34px;
  }

  @include media-queries.media-small {
    grid-template-columns: 1fr;
    grid-template-areas:
      "item1"
      "item2"
      "item3"
      "item4"
      "item5";
    row-gap: 24px;
    margin-bottom: 24px;
  }
}
</style>
