<template>
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z"
      :style="customStyle"
    />
  </svg>
</template>
<script setup lang="ts">
const { customStyle = { fill: "#666666" } } = defineProps<{
  customStyle?: Record<string, string>;
}>();
</script>
