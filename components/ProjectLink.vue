<script setup lang="ts">
  interface IProjectLink {
    href: string;
  }

  const props = defineProps<IProjectLink>();
</script>

<template>
  <a :href="props.href">
    <img src="/triangleFill.svg" alt="triangle" />
    View project
  </a>
</template>

<style scoped>
  a {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 18px;
    font-weight: 600;
    color: #425A20;
    position: relative;

    &:before {
      position: absolute;
      top: 2px;
      left: -1px;
      z-index: 1;
      content: url('/triangle.svg');
    }
  }
</style>
