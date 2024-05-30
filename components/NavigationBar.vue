<script setup lang="ts">
import { store } from '~/lib';
</script>

<template>
  <Transition name="navigation" mode="out-in">
    <nav class="navigationWrapper" v-if="store.navigationIsShown">
      <NavigationLink
          href="/"
          title="About us"
      />
      <NavigationLink
          href="/"
          title="Architecture"
      />
      <NavigationLink
          href="/"
          title="Interior"
      />
      <NavigationLink
          href="/"
          title="Contact"
      />
      <NavigationLink
          href="/"
          title="Shop"
      />
    </nav>
  </Transition>
</template>

<style scoped>
.navigationWrapper {
  display: flex;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  width: 470px;
}

a {
  position: relative;
  color: #444444;
  font-weight: 600;
  white-space: nowrap;
  transition: all 1s ease;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #444444;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.navigation-leave-active {
  transition: opacity 0.5s ease;
}

.navigation-enter-active {
  transition: all 1s ease;
}

.navigation-enter-from {
  opacity: 0;
  width: 0;
}

.navigation-enter-to {
  opacity: 1;
  width: 470px;
}

.navigation-leave-to {
  opacity: 0;
}
</style>
