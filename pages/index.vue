<script setup lang="ts">
import { store } from '~/lib';
import type { ISlideData } from '~/components/Slider/Slide.vue';
import Slider from '~/components/Slider/Slider.vue';
import { sliderApi } from '~/api/slider-api';

const { data } = await sliderApi.GET<ISlideData[]>();

if(data.value) {
  store.totalSlides = data.value.map((slide) => +slide.id)
}

useHead({
  title: 'AR.CHI',
})
</script>

<template>
  <main :class="store.modalOpen ?  'mainWrapperCollapse' : 'mainWrapper'">
    <Slider v-if="data" :data="data"/>
  </main>
</template>

<style scoped>
  .mainWrapperCollapse {
    width: 100%;
    height: 0;
    transition: height 0.5s ease;
    overflow: hidden;
  }
  .mainWrapper {
    width: 100%;
    height: 100%;
    transition: height 0.5s ease;
    overflow: hidden;
  }
</style>
