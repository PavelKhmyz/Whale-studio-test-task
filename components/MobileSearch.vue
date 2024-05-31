<script setup lang="ts">
import { store } from '~/lib'
</script>

<template>
  <div :class="!store.modalOpen ? 'mobileSearchBarWrapper' : 'mobileSearchBarWrapper mobileSearchBarWrapperCollapse'">
    <img src="/magnifying-glass.svg" class="searchLogo" alt="Search logo" />
    <input type="text" class="mobileSearchInput"
           placeholder="What are you looking for?" />
  </div>
</template>

<style scoped>
  .mobileSearchBarWrapperCollapse {
    height: 0 !important;
    border-bottom: none !important;
  }
  .mobileSearchBarWrapper {
    display: none;
    align-items: center;
    width: 100%;
    height: 51px;
    overflow: hidden;
    background-color: white;
    gap: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;

    &::before, &::after {
      content: '';
      display: block;
      height: 19px;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 740px) {
      display: flex;
    }
  }

  .mobileSearchInput {
    width: 100%;
    border: none;
  }
</style>
