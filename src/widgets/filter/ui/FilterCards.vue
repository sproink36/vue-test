<template>
  <div class="filter-block">
    <InputBlockDrop v-model="choiceRK" :list-items="listRK" />
    <RoominessSelect v-model="roomines" :list-item="listRooms" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  InputBlockDrop,
  RoominessSelect,
} from "../../../shared";


const listRK = ["lorem1", "lorem2", "lorem3", "lorem4"];
const listRooms = ["Ст", "1", "2", "3+"];

const roomines = ref<null | string>(listRooms[1] ?? null);
const choiceRK = ref<null | string>(listRK[0] ?? null);
</script>

<style lang="scss" scoped>
.filter-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
</style>
