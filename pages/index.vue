<script setup lang="ts">
import { store } from '~/lib';
import type { ISlideData } from '~/components/Slide.vue';

const { data } = await useFetch<ISlideData[]>('https://664878da2bb946cf2fa0af05.mockapi.io/api/v1/menu');

if(data.value) {
  store.totalSlides = data.value.map((slide: ISlideData) => +slide.id)
}
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
