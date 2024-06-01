<script setup lang="ts">
  import type { ISlideData } from '~/components/Slide.vue';

  interface ISlider {
    data: ISlideData[];
  }

  const { data } = defineProps<ISlider>()
</script>

<template>
  <div class="sliderWrapper" >
    <Slide v-for="slide in data" :data="slide"/>
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
  }
</style>
