<template>
  <div class="block">
    <TitleInput>Комнатность</TitleInput>
    <ul class="list">
      <li
        class="list__item"
        v-for="item in listItem"
        :key="item"
        :class="{ active: currentRoom === item }"
        @click="$emit('selectRoomines', item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TitleInput } from "..";

defineProps<{
  currentRoom: string | null;
}>();

defineEmits(["selectRoomines"]);

const listItem = ["Ст", "1", "2", "3+"];
</script>

<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;

.block {
  flex-grow: 1;
}

.list {
  display: flex;
  align-items: center;
  width: 230px;
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
