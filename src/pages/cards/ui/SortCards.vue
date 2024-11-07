<template>
  <div class="block">
    <div class="filter-block">
      <p class="title">Сортировать:</p>
      <div class="filter" @click="isByPrice = !isByPrice">
        <span>по цене</span>
        <DropDaunIcon
          class="filter-icon"
          :class="{ rotate: isByPrice }"
          :custom-style="{ fill: '#263E66' }"
        />
      </div>
      <div class="filter" @click="isByArea = !isByArea">
        <span>по площади</span>
        <DropDaunIcon
          class="filter-icon"
          :class="{ rotate: isByArea }"
          :custom-style="{ fill: '#263E66' }"
        />
      </div>
    </div>
    <div class="sort-block">
      <div
        class="sort"
        :class="{ active: activeSort === 'list' }"
        @click="activeSort = 'list'"
      >
        <SortListIcon
          :custom-style="{
            stroke: activeSort === 'list' ? '#FFFFFF' : '#000000',
          }"
          @click="activeSort = 'list'"
        />
      </div>
      <div
        class="sort"
        :class="{ active: activeSort === 'table' }"
        @click="activeSort = 'table'"
      >
        <SortTableIcon
          :custom-style="{
            stroke: activeSort === 'table' ? '#FFFFFF' : '#000000',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DropDaunIcon,
  SortListIcon,
  SortTableIcon,
} from "../../../shared/ui/icons";

const activeSort = defineModel("active-sort");
const isByPrice = defineModel("is-by-price");
const isByArea = defineModel("is-by-area");
</script>

<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;
@use "/src/app/styles/media-queries.scss";
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @include media-queries.media-medium {
    margin-bottom: 38px;
  }

  @include media-queries.media-small {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 40px;
  }
}

.filter-block {
  display: flex;
  font-family: "Averta_Cyrillic_Light";

  @include media-queries.media-small {
    font-size: 14px;
    line-height: 21.7px;
  }
}

.title {
  margin-right: 15px;
  color: $grey-color;
}

.filter {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  color: #263e66;
  cursor: pointer;
}

.filter span {
  font-weight: 300;
}

.filter-icon {
  &.rotate {
    transform: rotateZ(180deg);
  }
}

.filter:first-of-type {
  margin-right: 20px;
}

.sort-block {
  display: flex;
  gap: 6px;
}

.sort {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: $white-color;
  border: 1px solid #dedede;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: $orangeForsythia-color;
    border-color: $orangeForsythia-color;
    color: $white-color;
  }
}
</style>
