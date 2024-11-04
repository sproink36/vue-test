<template>
  <div class="block">
    <TitleInput>Выбрать ЖК</TitleInput>
    <div class="select">
      <div class="option">{{}}</div>
      <DropDaunIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TitleInput } from "..";
import { DropDaunIcon } from "./icons";
</script>

<style lang="scss">
@use "/src/app/styles/variables" as *;
</style>
