<template>
  <div>
    <vue-slider v-model="value" class="custom-slider"></vue-slider>
  </div>
</template>

<script lang="ts">
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  data() {
    return {
      value: 50, // Начальное значение
    };
  },
};
</script>
<style lang="scss" scoped>
.custom-slider {
  /* Установите ширину и высоту слайдера */
  width: 300px;
  height: 10px;
}

.custom-slider .slider {
  background-color: #4caf50; /* Цвет фона */
  height: 10px; /* Высота слайдера */
  border-radius: 5px; /* Закругление углов */
}

.custom-slider .dot {
  background-color: #ff5722; /* Цвет кнопки */
  width: 20px; /* Ширина кнопки */
  height: 20px; /* Высота кнопки */
  border-radius: 50%; /* Круглая кнопка */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Тень */
}
</style>
