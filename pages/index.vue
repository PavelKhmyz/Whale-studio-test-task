<script setup lang="ts">
import { store } from '~/lib';
</script>

<template>
  <main :class="store.modalOpen ?  'mainWrapperCollapse' : 'mainWrapper'">
    <h1>Some Content</h1>
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
