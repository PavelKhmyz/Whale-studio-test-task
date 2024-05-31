<script setup lang="ts">
import { store } from '~/lib'
</script>

<template>
  <header class="headerWrapper">

    <div class="container">
      <div class="headerLeftSection">
        <a href="/" class="logo">AR.CHI</a>
        <LanguageToggle />
      </div>

      <div class="headerRightSection">

        <Transition name="rightSectionFade">
          <div class="fadeWrapper" v-if="!store.modalOpen">
            <NavigationBar  />
            <SearchBar />
          </div>
        </Transition>

        <BurgerMenu />

      </div>
    </div>
    <MobileSearch />
    <ModalNavigation />

  </header>
</template>

<style scoped>
.headerWrapper {
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    height: var(--header-height);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .headerLeftSection {
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 800px) {
      gap: 20px
    }

    .logo {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 24px;
      color: #444444;
    }
  }

  .headerRightSection {
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 800px) {
      gap: 20px
    }

    .fadeWrapper {
      display: flex;
    }
  }

  .rightSectionFade-leave-active,
  .rightSectionFade-enter-active {
    transition: opacity 0.5s ease;
  }

  .rightSectionFade-enter-from,
  .rightSectionFade-leave-to {
    opacity: 0;
  }
}
</style>
