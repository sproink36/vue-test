<template>
  <p class="title" :style="{ color: color }"><slot></slot></p>
</template>

<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>

<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;

.title {
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 11px;
  color: $grey-color;
}
</style>
