<template>
  <div class="block">
    <TitleInput>Выбрать ЖК</TitleInput>
    <div class="select">
      <div class="option">{{ selectText }}</div>
      <div class="openSelect"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TitleInput } from "..";

const { selectText = "Любой" } = defineProps<{
  selectText: string;
}>();
</script>
<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;

.block {
  position: relative;
  cursor: pointer;
  flex-grow: 1;
}

.select {
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  padding-left: 14px;
  border: 1px solid #dedede;
  border-radius: 4px;
  background-color: $white-color;
}

.option {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
}

.openSelect {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(100%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid $grey-color;
  width: 0px;
  height: 0px;
  transform: translateY(50%);
}
</style>
