<template>
  <div class="block">
    <TitleInput>Выбрать ЖК</TitleInput>
    <div class="select">
      <div class="option">{{}}</div>
      <object class="dropDaunIcon" data="/src/shared/ui/icons/dropDaunIcon.svg" type="image/svg+xml">
        иконка
      </object>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TitleInput } from "..";
</script>

<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;

.dropDaunIcon {
    color: red;
}
</style>
