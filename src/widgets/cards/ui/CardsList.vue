<template>
  <div class="block">
    <ul class="list">
      <CardItem
        v-for="item in cardList"
        :key="item.id"
        :data="item"
        @select-favorite="selectFavorite"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardItem, { ICardItem } from "./CardItem.vue";

const cardList = ref<ICardItem[]>([
  {
    isAction: true,
    isFavorites: false,
    img: "",
    titleRK: "ЖК «Министерские озера»",
    description: "3-комнатная квартира № 262, 65.6 м²",
    addInfo: ["Литер 14", "Этаж 10", "Сдача 1 кв. 2026"],
    price: "12 886 400 ₽",
    discount: "12 886 400 ₽",
    percent: "10%",
    tags: ["Отделка", "Вид на горы", "Лоджия", "Рассрочка"],
    id: Symbol("uniqueId"),
  },
  {
    isAction: true,
    isFavorites: false,
    img: "",
    titleRK: "ЖК «Министерские озера»",
    description: "3-комнатная квартира № 262, 65.6 м²",
    addInfo: ["Литер 14", "Этаж 10", "Сдача 1 кв. 2026"],
    price: "12 886 400 ₽",
    discount: "",
    percent: "",
    tags: ["Отделка", "Вид на горы", "Лоджия", "Рассрочка"],
    id: Symbol("uniqueId"),
  },
  {
    isAction: true,
    isFavorites: false,
    img: "",
    titleRK: "ЖК «Министерские озера»",
    description: "3-комнатная квартира № 262, 65.6 м²",
    addInfo: ["Литер 14", "Этаж 10", "Сдача 1 кв. 2026"],
    price: "12 886 400 ₽",
    discount: "12 886 400 ₽",
    percent: "10%",
    tags: ["Отделка", "Вид на горы", "Лоджия", "Рассрочка"],
    id: Symbol("uniqueId"),
  },
]);

function selectFavorite(id: symbol) {
  const card = cardList.value.find((el) => el.id === id);
  if (card) {
    console.log(card);
    card["isFavorites"] = !card.isFavorites;
  }
}
</script>
<style lang="scss" scoped></style>
