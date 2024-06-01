<script setup lang="ts">
  import { store } from '~/lib';

  const pagesViewModel = (page: number) => {
    if(page < 10) {
      return `0${page}`
    }

    return page;
  }

  const calculateProgressBar = () => {
    return `width: ${100 / store.totalSlides.length * store.actualSlide}%`
  }
</script>

<template>
  <div class="sliderControlWrapper">
    <button
        @click="store.actualSlide--"
        :disabled="store.actualSlide === 1"
        class="slideButton"
    >
      <img src="/chevron.svg" alt="chevronPrev" />
    </button>

    <span class="pageViewModel">
      {{ pagesViewModel(store.actualSlide) }}
    </span>

    <div class="progressBar">
      <div class="progressBarInner" :style="calculateProgressBar()"/>
    </div>

    <span class="pageViewModel">
      {{ pagesViewModel(store.totalSlides.length) }}
    </span>

    <button
        @click="store.actualSlide++"
        :disabled="store.actualSlide === store.totalSlides.length"
        class="slideButton"
    >
      <img src="/chevron.svg" alt="chevronPrev" style="transform: rotate(180deg)"/>
    </button>
  </div>
</template>

<style scoped>
  .sliderControlWrapper {
    display: flex;
    margin-left: 140px;
    align-items: center;
  }

  .slideButton {
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 20px;
  }

  .pageViewModel {
    font-family: Zilla Slab, serif;
    font-size: 18px;
    color: #222222;
  }

  .progressBar {
    width: 210px;
    height: 1px;
    background: #425A2061;
    margin: 0 13px;
    position: relative;

    .progressBarInner {
      height: 1px;
      background-color: #425A20;
    }
  }
</style>
