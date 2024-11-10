<template>
  <li class="card">
    <div class="action">
      <ActionIcon />
    </div>
    <div class="favorites" @click="$emit('selectFavorite', data.id)">
      <FavoriteIcon :is-favorites="data.isFavorites" />
    </div>
    <div class="scales">
      <ScalesIcon />
    </div>
    <div class="img"></div>
    <p class="title">{{ data.titleRK }}</p>
    <p class="description">{{ data.description }}</p>
    <ul class="addInfo">
      <template v-for="(item, index) in data.addInfo" :key="item">
        <li class="addInfo__item">
          <span class="addInfo__text">{{ item }}</span>
        </li>
        <span
          class="addInfo__circle"
          v-if="index !== data.addInfo.length - 1"
        ></span>
      </template>
    </ul>
    <div class="line"></div>
    <div class="price">
      <p class="price__defualt" :class="{ defualt_active: data.discount }">
        {{ data.price }}
      </p>
      <p class="price__discount" v-if="data.discount">{{ data.discount }}</p>
      <p class="price__percent" v-if="data.discount">{{ data.percent }}</p>
    </div>
    <ul class="tags">
      <template v-for="(item, index) in data.tags" :key="item">
        <li class="tags__item" v-if="index < 2">
          {{ item }}
        </li>
      </template>
      <div class="tags__rest tags__item" v-if="data.tags.length > 2">
        +{{ data.tags.length - 2 }}
        <ul class="tags__hidden-list tags__item">
          <template v-for="(item, index) in data.tags">
            <li class="tags__hidden-item" v-if="index >= 2">{{ item }}</li>
          </template>
        </ul>
      </div>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ActionIcon, FavoriteIcon, ScalesIcon } from "../../../shared/ui/icons";

export interface ICardItem {
  isAction: boolean;
  isFavorites: boolean;
  img: string;
  titleRK: string;
  description: string;
  addInfo: string[];
  price: string;
  discount: string;
  percent: string;
  tags: string[];
  id: symbol;
}
// string | File

defineProps<{ data: ICardItem }>();
</script>
<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;
@use "/src/app/styles/mixins/common" as *;

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 295px;
  padding: 20px 20px 24px 20px;
  border: 1px solid #eaeaea;
  font-size: 14px;
}

.action {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid $orangeForsythia-color;
  border-radius: 50%;
  background-color: $white-color;
}

.favorites,
.scales {
  @include flex-center;
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.favorites {
  top: 12px;
  right: 46px;
}

.scales {
  top: 12px;
  right: 12px;
}

.img {
  width: 100%;
  height: 256px;
  margin-bottom: 24px;
}

.title {
  color: $blueUSAFA-color;
  margin-bottom: 6px;
}

.description {
  font-family: "Averta_Cyrillic_SemiBold";
  font-size: 16px;
  color: $black-color;
  margin-bottom: 12px;
}

.addInfo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 6px;
  margin-bottom: 16px;
}

.addInfo__item {
  display: inline-flex;
  align-items: center;
}

.addInfo__text {
  line-height: 22px;
  color: #9aadc6;
}

.addInfo__circle {
  display: block;
  width: 4px;
  height: 4px;
  border: 0;
  border-radius: 50%;
  background-color: #224e9c;
}

.line {
  width: 100%;
  border-top: 1px solid #e2e2e2;
  margin-bottom: 14px;
}

.price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.price__defualt {
  margin-right: 8px;
  font-family: "Averta_Cyrillic_SemiBold";
  font-size: 18px;
  line-height: 25px;
  color: #242328;
}

.price__defualt.defualt_active {
  color: #fdc83e;
}

.price__discount {
  margin-right: auto;
  line-height: 17.3px;
  text-decoration: line-through;
  color: $black-color;
}

.price__percent {
  @include flex-center;
  height: 25px;
  width: 39px;
  border: 0px solid;
  border-radius: 30.54px;
  background-color: $orangeForsythia-color;
  font-size: 14px;
  line-height: 17.3px;
  color: $white-color;
}

.tags {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.tags__item {
  @include flex-center;
  height: 29px;
  padding: 0 10px;
  border: 0;
  border-radius: 16px;
  font-family: "Open Sans";
  background-color: #e5f3ff;
  font-size: 12px;
  line-height: 16.34px;
  color: #224e9c;
}

.tags__rest {
  position: relative;
  cursor: pointer;
}

.tags__hidden-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 6px 10px;
  gap: 4px;
  height: auto;
  border-radius: 8px;
  cursor: default;
  z-index: 10;
}

.tags__hidden-item {
  font-family: "Open Sans";
  font-size: 12px;
  line-height: 16.34px;
  color: #224e9c;
}
</style>

