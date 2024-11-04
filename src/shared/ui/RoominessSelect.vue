<template>
  <div class="block">
    <TitleInput>Комнатность</TitleInput>
    <ul class="list">
      <li
        class="list__item"
        v-for="item in listItem"
        :key="item"
        :class="{ active: roomines === item }"
        @click="selectRoominess(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TitleInput } from "..";

const roomines = defineModel();

defineProps<{
  listItem: string[];
}>();

function selectRoominess(selectRoom: string) {
  if (roomines.value === selectRoom) {
    roomines.value = null;
  } else {
    roomines.value = selectRoom;
  }
}
</script>

<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;

.block {
  width: 230px;
}

.list {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.list__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 1px solid #dedede;
  border-radius: 100%;
  color: $black-color;
  cursor: pointer;

  &:hover {
    border-color: $orangeForsythia-color;
    color: $orangeForsythia-color;
  }

  &.active {
    background-color: $orangeForsythia-color;
    border-color: $orangeForsythia-color;
    color: $white-color;
    font-weight: 700;
  }
}
</style>
