<script setup lang="ts">
import { store } from '~/lib';
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
  </footer>
</template>

<style scoped>
  .footerWrapper {
    display: flex;
    gap: 35px;
    width: 100%;
  }

  .footerLink {
    font-weight: 600;
  }
</style>
