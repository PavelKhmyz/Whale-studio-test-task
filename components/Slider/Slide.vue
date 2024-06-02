<script setup lang="ts">
import ReadMoreButton from '~/components/Slider/ReadMoreButton.vue';
import ProjectLink from '~/components/Slider/ProjectLink.vue';
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
      <tbody>
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
      </tbody>
    </table>

    <div class="buttonsWrapper">
      <ReadMoreButton @click="handleClick" />
      <ProjectLink :href="props.data.link || '/'" />
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

    @media(max-width: 1400px) {
      transition: opacity 1s ease;
    }

    @media(max-width: 810px) {
      height: 500px;
    }

    @media(max-width: 350px) {
      height: 530px;
    }
  }

  .slideWrapperCollapse {
    width: 0;
    opacity: 0;
    height: 440px;
    overflow: hidden;
    transition: width 1s ease, opacity 0.2s ease;

    @media(max-width: 1400px) {
      transition: opacity 0.5s 0.5s ease;
    }

    @media(max-width: 810px) {
      height: 500px;
    }

    @media(max-width: 350px) {
      height: 530px;
    }
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

    @media(max-width: 570px) {
      font-size: 70px;
      margin: 25px 0;
    }

    @media(max-width: 430px) {
      font-size: 50px;
    }
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

    @media(max-width: 570px) {
      padding-right: 30px;
    }
  }

  .columnContent {
    font-family: FuturaBook, serif;
    font-size: 14px;
    width: 343px;
    color: #444444E5;
    padding-top: 10px;
    padding-right: 58px;

    @media(max-width: 570px) {
      padding-right: 30px;
    }

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

    @media(max-width: 480px) {
      gap: 20px;
    }

    @media(max-width: 410px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
