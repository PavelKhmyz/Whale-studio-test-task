<script setup lang="ts">
import { store } from '~/lib';

interface ICol {
  title: string;
  description: string;
}

export interface ISlideData {
  title: string;
  description: {
    col1: ICol;
    col2: ICol;
  },
  link: string;
  image: string;
  id: string;
}

interface ISlide {
  data: ISlideData;
}

const props = defineProps<ISlide>();

const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <Transition name="background">
    <div class="backgroundWrapper" :style="{backgroundImage: `url(${props.data.image})`}" v-if="String(store.actualSlide) === props.data.id"/>
  </Transition>
  <div :class="String(store.actualSlide) === props.data.id ? 'slideWrapper' : 'slideWrapperCollapse'">
    <h1 class="slideTitle">{{ props.data.title }}</h1>
    <table>
      <tr>
        <td class="columnTitle">
          {{ props.data.description.col1.title }}
        </td>
        <td class="columnTitle">
          {{ props.data.description.col2.title }}
        </td>
      </tr>
      <tr>
        <td class="columnContent">
          {{ props.data.description.col1.description }}
        </td>
        <td class="columnContent">
          {{ props.data.description.col2.description }}
        </td>
      </tr>
    </table>

    <div class="buttonsWrapper">
      <ReadMoreButton @click="handleClick" />
      <ProjectLink :href="props.data.link || ''" />
    </div>
  </div>
</template>

<style scoped>
    .background-enter-active,
    .background-leave-active {
      transition: opacity 1s ease;
    }

    .background-enter-from,
    .background-leave-to {
      opacity: 0;
    }

  .slideWrapper {
    width: 100%;
    height: 440px;
    overflow: hidden;
    transition: width 1s ease, opacity 0.2s 0.3s ease;
  }

  .slideWrapperCollapse {
    width: 0;
    opacity: 0;
    height: 440px;
    overflow: hidden;
    transition: width 1s ease, opacity 0.2s ease;
  }

  .backgroundWrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .slideTitle {
    font-family: "Playfair Display", serif;
    font-size: 96px;
    color: #425A20;
  }

  table {
    border-collapse: collapse;
  }

  .columnTitle {
    font-size: 18px;
    color: #425A20;
    font-weight: 600;
    width: 343px;
    padding-right: 58px;
  }

  .columnContent {
    font-family: FuturaBook, serif;
    font-size: 14px;
    width: 343px;
    color: #444444E5;
    padding-top: 10px;
    padding-right: 58px;

    div {
      max-height: 75px;
      overflow: hidden;
    }
  }

  .buttonsWrapper {
    display: flex;
    margin-top: 40px;
    gap: 40px;
    align-items: center;
  }
</style>
