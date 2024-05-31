<script setup lang="ts">
import { ref } from 'vue';

const language = ref<string>('eng')
</script>

<template>
  <div class="language-switch">
    <input name="language" type="radio" id="rus" value="rus" v-model="language">
    <label for="rus">RUS</label>

    <input name="language" type="radio" id="eng" value="eng" v-model="language">
    <label for="eng">ENG</label>
  </div>
</template>

<style scoped>
.language-switch {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;

  &::before {
    content: '';
    display: block;
    height: 19px;
    //margin-right: 40px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
}

input {
  display: none;

  &:checked+label {
    background-color: rgba(74, 100, 36, 0.1);
    color: #333333;
  }
}

label {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 45px;
  border-radius: 5px;
  font-weight: 600;
  color: rgba(51, 51, 51, 0.5);
  cursor: pointer;

  &:first-of-type {
    margin-right: 14px;
    margin-left: 40px;

    @media (max-width: 800px) {
      margin-left: 20px;
    }

    @media (max-width: 400px) {
      margin-left: 0;
    }
  }
}
</style>
