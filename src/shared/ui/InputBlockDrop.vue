<template>
  <div class="block">
    <TitleInput><slot></slot></TitleInput>
    <div
      class="select"
      @click="isShowList = !isShowList"
      v-click-outside="clickOutSide"
    >
      <div class="option">{{ choiceSelected }}</div>
      <DropDaunIcon />
      <Transition>
        <ul class="list" ref="list-ref" v-if="isShowList">
          <li
            class="list__item"
            v-for="item in listItems"
            :key="item"
            @click="selectItem(item)"
          >
            {{ item }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TitleInput } from "..";
import { DropDaunIcon } from "./icons";

defineProps<{
  listItems: string[];
}>();

const choiceSelected = defineModel();

const isShowList = ref(false);

function selectItem(item: string) {
  choiceSelected.value = item;
  isShowList.value = false;
}

function clickOutSide() {
  isShowList.value = false;
}
</script>
<style lang="scss" scoped>
@use "/src/app/styles/variables" as *;
@use "/src/app/styles/mixins/common" as *;
// .block {
//   width: 230px;
// }

.select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  padding: 0 14px;
  @include input-defualt;
}

.option {
  width: max-content;
}

.list {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  z-index: 50;
  border: 1px solid #dedede;
  border-radius: 4px;
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list__item {
  display: flex;
  align-items: center;
  padding: 20px 14px;
  background-color: $white-color;
}

.list__item:hover {
  background-color: $squant-color;
}

.list__item:not(:last-child) {
  border-bottom: 1px solid #dedede;
}
</style>
