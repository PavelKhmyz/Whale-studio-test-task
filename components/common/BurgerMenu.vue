<script setup lang="ts">
import { store } from '~/lib'

const handleOpenModal = () => {
  store.modalOpen = true;
}

const handleCloseModal = () => {
  store.modalOpen = false;
}
</script>

<template>
  <button class="burgerMenu" @click="handleOpenModal" v-if="!store.modalOpen">
    <img src="/burger.svg" class="burgerLogo" alt="Burger Menu">
  </button>

  <button class="burgerMenu" @click="handleCloseModal" v-if="store.modalOpen">
    <span>Close</span>
    <img src="/close.svg" class="closeButton" alt="Close Button">
  </button>
</template>

<style scoped>
.burgerMenu {
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: FuturaDemi, serif;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 420px) {
    span {
      display: none;
    }
  }

  .closeButton {
    width: 20px;
    margin-left: 14px;

    @media (max-width: 420px) {
      margin-left: 0;
    }
  }
}
</style>
