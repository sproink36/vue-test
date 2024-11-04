<template>
  <div class="filter-block">
    <InputBlockDrop v-model="choiceRK" :list-items="listRK" />
    <RoominessSelect v-model="roomines" :list-item="listRooms" />
    <DiapasonInput v-model="areaSize" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  DiapasonInput,
  InputBlockDrop,
  RoominessSelect,
} from "../../../shared";
import { IAreaSize } from "../../../shared/ui/DiapasonInput.vue";

const listRK = ["lorem1", "lorem2", "lorem3", "lorem4"];
const listRooms = ["Ст", "1", "2", "3+"];

const roomines = ref<null | string>(listRooms[1] ?? null);
const choiceRK = ref<null | string>(listRK[0] ?? null);
const areaSize = ref<IAreaSize>({
  minArea: 17,
  maxArea: 162,
  currentArea: {
    currentMin: 17,
    currentMax: 162,
  },
});
</script>

<style lang="scss" scoped>
.filter-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
</style>
