<script setup lang="ts">
import { store } from '~/lib';

const wrapper = ref<HTMLElement | null>(null);

const onMouseEnter = (event: Event) => {
  if(wrapper.value) {
    for (let child of wrapper.value.children) {
      const typedChild = child as HTMLElement;
      const typedEventTarget = event.target as HTMLElement;

      if (typedChild.innerText !== typedEventTarget.innerText) {
        typedChild.style.color = 'rgba(68, 68, 68, 0.4)'
      } else {
        typedChild.style.color = '#444444'
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
  #app {
    background-image: url(/background.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    height: calc(100vh - 70px - 61px - 19px);
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .modalNavigationWrapper {
    display: flex;
    flex-direction: column;

    .rightImage {
      position: absolute;
      top: -120px;
      right: -310px
    }

    .leftImage {
      position: absolute;
      top: -120px;
      left: -310px
    }

    .link {
      font-family: 'Playfair Display', serif;
      font-weight: 400;
      font-size: 48px;
      text-align: center;
      color: #444444;
      height: 104px;
      position: relative;
    }
  }
</style>
