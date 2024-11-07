<template>
  <div class="cards-block">
    <div class="line"></div>
    <h1 class="title">Вам подходит 375 вариантов</h1>
    <FilterCards
      :listRK
      :listRooms
      :listCase
      v-model:roomines="roomines"
      v-model:choice-RK="choiceRK"
      v-model:area-size="areaSize"
      v-model:price="price"
      v-model:choice-case="choiceCase"
    />
    <SortCards
      v-model:active-sort="activeSort"
      v-model:is-by-price="isByPrice"
      v-model:is-by-area="isByArea"
    />
    <CardsList />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { CardsList, FilterCards } from "../../../widgets";
import SortCards from "./SortCards.vue";
import { IDiapasonValue } from "../../../shared/ui/DiapasonInput.vue";

const listRK = ["lorem1", "lorem2", "lorem3", "lorem4"];
const listRooms = ["Ст", "1", "2", "3+"];
const listCase = ["lorem1", "lorem2", "lorem3", "lorem4"];

const roomines = ref<null | string>(listRooms[1] ?? null);
const choiceRK = ref<null | string>(listRK[0] ?? null);
const areaSize = ref<IDiapasonValue>({
  minValue: 17,
  maxValue: 162,
  step: 1,
  currentValues: {
    currentMin: 17,
    currentMax: 162,
  },
});

const price = ref<IDiapasonValue>({
  minValue: 2.5,
  maxValue: 24.5,
  step: 0.1,
  currentValues: {
    currentMin: 2.5,
    currentMax: 24.5,
  },
});

const choiceCase = ref<null | string>(listRK[0] ?? null);

const activeSort = ref("table");
const isByPrice = ref(true);
const isByArea = ref(false);
</script>
<style lang="scss" scoped>
@import "/src/app/styles/media-queries.scss";
@import "/src/app/styles/variables.scss";

.cards-block {
  display: flex;
  flex-direction: column;

  @include media-xlarge {
    padding-top: 120px;
  }

  @include media-large {
    padding-top: 100px;
  }

  @include media-medium {
    padding-top: 80px;
  }

  @include media-small {
    padding-top: 60px;
  }
}

.line {
  width: 100%;
  height: 1px;
  background-color: #dedede;
  margin-bottom: 40px;

  @include media-small {
    margin-bottom: 32px;
  }
}

.title {
  margin-bottom: 80px;
  font-family: "Averta_Cyrillic_SemiBold";
  font-size: 42px;
  line-height: 42px;
  color: $black-color;

  @include media-medium {
    font-size: 32px;
    line-height: 32px;
  }

  @include media-small {
    margin-bottom: 60px;
    font-size: 28px;
    line-height: 30.8px;
  }
}
</style>
