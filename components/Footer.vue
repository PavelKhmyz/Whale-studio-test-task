<script setup lang="ts">
import { store } from '~/lib';
import NavigationLink from '~/components/common/NavigationLink.vue'
</script>

<template>
  <footer class="footerWrapper" :style="store.modalOpen && { justifyContent: 'center' }">
    <NavigationLink
      title="Facebook"
      href="https://www.facebook.com/"
      :classNames="{ link: 'footerLink' }"
    />
    <NavigationLink
      title="Vkontakte"
      href="https://vk.com/"
      :classNames="{ link: 'footerLink' }"
    />
    <NavigationLink
      title="Behance"
      href="https://www.behance.net/"
      :classNames="{ link: 'footerLink' }"
    />

    <SliderControl v-if="!store.modalOpen"/>
  </footer>
</template>

<style scoped>
  .footerWrapper {
    display: flex;
    gap: 35px;
    width: 100%;
    height: var(--footer-height);

    @media(max-width: 700px) {
      justify-content: center;
    }

    div {
      @media(max-width: 700px) {
        display: none;
      }
    }
  }

  .footerLink {
    font-weight: 600;
    color: #333333;
    position: relative;
    transition: all 1s ease;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #333333;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
</style>
