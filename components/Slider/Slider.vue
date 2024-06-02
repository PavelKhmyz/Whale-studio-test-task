<script setup lang="ts">
  import type { ISlideData } from '~/components/Slider/Slide.vue';
  import Slide from '~/components/Slider/Slide.vue';
  import SliderControl from '~/components/Slider/SliderControl.vue';
  import { store } from '~/lib';

  interface ISlider {
    data: ISlideData[];
  }

  const { data } = defineProps<ISlider>()
</script>

<template>
  <div class="sliderWrapper" >
    <Slide v-for="slide in data" :data="slide" :key="slide.id"/>
  </div>

  <div class="controlsWrapper">
    <SliderControl v-if="!store.modalOpen"/>
  </div>
</template>

<style scoped>
  .sliderWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    height: 100%;

    @media(max-width: 700px) {
      height: 90%;
    }
  }

  .controlsWrapper {
    display: none;

    @media(max-width: 700px) {
      display: block;
    }
  }
</style>
