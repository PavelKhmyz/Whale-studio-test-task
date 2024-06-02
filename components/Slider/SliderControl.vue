<script setup lang="ts">
  import { store } from '~/lib';

  const pagesViewModel = (page: number) => {
    if(page < 10) {
      return `0${page}`
    }

    return page;
  }

  const calculateProgressBar = () => {
    if(!store.totalSlides.length) {
      return 'width: 0'
    }
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

    <ClientOnly>
      <span class="pageViewModel">
        {{ pagesViewModel(store.actualSlide) }}
      </span>

      <div class="progressBar">
        <div class="progressBarInner" :style="calculateProgressBar()"/>
      </div>

      <span class="pageViewModel">
        {{ pagesViewModel(store.totalSlides.length) }}
      </span>
    </ClientOnly>

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

    @media (max-width: 1000px) {
      margin-left: 70px;
    }

    @media (max-width: 930px) {
      margin-left: 0;
    }
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

    &:first-of-type {
      margin-right: 20px;
    }

    &:last-of-type {
      margin-left: 20px;
    }
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

    @media (max-width: 800px) {
      width: 130px;
    }

    @media (max-width: 700px) {
      width: 100%;
    }

    .progressBarInner {
      height: 1px;
      background-color: #425A20;
    }
  }
</style>
