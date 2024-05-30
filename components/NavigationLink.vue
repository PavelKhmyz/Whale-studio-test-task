<script setup lang="ts">
interface INavigationLink {
  title: string;
  href: string;
  img?: string;
  alt?: string;
  classNames?: {
    link?: string;
    image?: string;
  }
  mouseEnter?(event: Event): void;
  mouseLeave?(event?: Event): void
}

const props = defineProps<INavigationLink>();
const showImg = ref(false);

const onMouseEnter = (event: Event) => {
  showImg.value = true;

  if(props.mouseEnter) {
    props.mouseEnter(event);
  }
}

const onMouseLeave = (event: Event) => {
  showImg.value = false;

  if(props.mouseLeave) {
    props.mouseLeave(event);
  }
}
</script>

<template>
  <a :href="props.href" @mouseenter="onMouseEnter " @mouseleave="onMouseLeave" :class="props.classNames?.link">
    {{ props.title }}
    <Transition name="fade" v-if="props.img">
      <img :src="props.img" :alt="props.alt" :class="props.classNames?.image" v-if="showImg"/>
    </Transition>
  </a>
</template>

<style scoped>
  .fade-leave-active,
  .fade-enter-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
