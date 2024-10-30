<template>
  <div class="filter-block">
    <InputBlockDrop select-text="Любой" />
    <RoominessSelect
      @select-roomines="selectRoomines"
      :currentRoom="roomines"
    />
    <InputSelectRC />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  // DiapasonInput,
  InputBlockDrop,
  RoominessSelect,
} from "../../../shared";
import DiapasonInput1 from "../../../shared/ui/DiapasonInput1.vue";
import InputSelectRC from "../../../shared/ui/InputSelectRC.vue";
const roomines = ref<null | string>(null);
// const rangeSquare = ref({ first: 0, second: 0 });

function selectRoomines(numberRooms: string) {
  if (roomines.value === numberRooms) {
    roomines.value = null;
  } else {
    roomines.value = numberRooms;
  }
}
</script>

<style lang="scss" scoped>
.filter-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
</style>
