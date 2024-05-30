<script setup lang="ts">
import { store } from '~/lib'

const handleOpenSearch = () => {
  store.navigationIsShown = false;
}

const handleCloseSearch = () => {
  store.navigationIsShown = true;
}
</script>

<template>
  <div :class="!store.navigationIsShown ? 'searchBarWrapper searchBarWrapperOpen' : 'searchBarWrapper'">
    <img src="/magnifying-glass.svg" class="searchLogo" alt="Search logo" @click="handleOpenSearch" />
    <input type="text" :class="!store.navigationIsShown ? 'searchInput' : 'searchInputCollapse'"
      placeholder="What are you looking for?" />
    <Transition name="searchClose">
      <img src="/close.svg" class="closeLogo" alt="Search logo" @click="handleCloseSearch"
        v-if="!store.navigationIsShown" />
    </Transition>
  </div>
</template>

<style scoped>
.searchBarWrapperOpen {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.searchBarWrapper {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px 0;

  &::before {
    content: '';
    display: block;
    height: 19px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    display: block;
    height: 19px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  img {
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  .searchInputCollapse {
    border: none;
    padding: 0;
    width: 0;
    transition: all 1s ease;
  }

  .searchInput {
    border: none;
    width: 524px;
    transition: all 2s ease;
  }

  .searchClose-leave-active,
  .searchClose-enter-active {
    transition: all 0.5s ease;
  }

  .searchClose-enter-from,
  .searchClose-leave-to {
    opacity: 0;
    width: 0;
    margin-left: 0;
    margin-right: 0;
  }

  .searchClose-enter-to,
  .searchClose-leave-from {
    opacity: 1;
    width: 14px;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
