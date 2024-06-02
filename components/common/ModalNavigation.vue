<script setup lang="ts">
import { store } from '~/lib';
import NavigationLink from '~/components/common/NavigationLink.vue'

const wrapper = ref<HTMLElement | null>(null);

const onMouseEnter = (event: Event) => {
  if(wrapper.value) {
    for (let child of wrapper.value.children) {
      const typedChild = child as HTMLElement;
      const typedEventTarget = event.target as HTMLElement;

      if (typedChild.innerText !== typedEventTarget.innerText) {
        typedChild.style.color = 'rgba(68, 68, 68, 0.4)'
      } else {
        typedChild.style.color = '#425A20'
      }
    }
  }
}

const onMouseLeave = () => {
  if(wrapper.value) {
    for (let child of wrapper.value.children) {
      const typedChild = child as HTMLElement;

      typedChild.style.color = '#444444'
    }
  }
}
</script>

<template>
  <Transition name="background">
    <div class="modalBackground" v-if="store.modalOpen"/>
  </Transition>
  <div :class="!store.modalOpen ? 'modalWrapperCollapse' : 'modalWrapper'">
    <nav class="modalNavigationWrapper" ref="wrapper">
      <NavigationLink
          href="/"
          title="About us"
          :mouse-enter="onMouseEnter"
          :mouse-leave="onMouseLeave"
          img="/hoverImg2.png"
          alt="About us image"
          :classNames="{ link: 'link', image: 'rightImage' }"
      />
      <NavigationLink
          href="/"
          title="Interior"
          :mouse-enter="onMouseEnter"
          :mouse-leave="onMouseLeave"
          img="/hoverImg.png"
          alt="Interior image"
          :classNames="{ link: 'link', image: 'leftImage' }"
      />
      <NavigationLink
          href="/"
          title="Architecture"
          :mouse-enter="onMouseEnter"
          :mouse-leave="onMouseLeave"
          img="/hoverImg2.png"
          alt="Architecture image"
          :classNames="{ link: 'link', image: 'rightImage' }"
      />
      <NavigationLink
          href="/"
          title="Portfolio"
          :mouse-enter="onMouseEnter"
          :mouse-leave="onMouseLeave"
          img="/hoverImg.png"
          alt="Portfolio image"
          :classNames="{ link: 'link', image: 'leftImage' }"
      />
      <NavigationLink
          href="/"
          title="Contact"
          :mouse-enter="onMouseEnter"
          :mouse-leave="onMouseLeave"
          img="/hoverImg2.png"
          alt="Contact image"
          :classNames="{ link: 'link', image: 'rightImage' }"
      />
    </nav>
  </div>
</template>

<style>
  .modalBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    transition: opacity 1s ease;
  }

  .background-enter-active,
  .background-leave-active {
    transition: opacity 1s ease;
  }

  .background-enter-from,
  .background-leave-to {
    opacity: 0;
  }

  .modalWrapperCollapse {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .modalWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - var(--header-height) - var(--padding-top) - var(--padding-bottom) - var(--footer-height));
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .modalNavigationWrapper {
    display: flex;
    flex-direction: column;

    .rightImage {
      position: absolute;
      top: -120px;
      right: -310px;

      @media (max-width: 1100px) {
        width: 230px;
        right: -280px;
      }

      @media (max-width: 1100px) {
        right: -220px;
      }

      @media (max-width: 740px) {
        display: none;
      }
    }

    .leftImage {
      position: absolute;
      top: -120px;
      left: -310px;

      @media (max-width: 1100px) {
      width: 230px;
      left: -280px;
      }

      @media (max-width: 1100px) {
        left: -220px;
      }

      @media (max-width: 740px) {
        display: none;
      }
    }

    .link {
      font-family: 'Playfair Display', serif;
      font-weight: 400;
      font-size: 48px;
      text-align: center;
      color: #444444;
      height: 104px;
      position: relative;
      top: 0;
      left: 0;

      @media (max-width: 1000px) {
        font-size: 36px;
      }
    }
  }
</style>
