<template>
  <button class="readMoreButton">Read More</button>
</template>

<style scoped>
  .readMoreButton {
    width: 200px;
    height: 46px;
    background-color: #597D4E;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border: none;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    @media(max-width: 480px) {
      width: 150px;

      &::before {
        width: 150px !important;
      }
    }

    @media(max-width: 410px) {
      width: 200px;

      &::before {
        width: 200px !important;
      }
    }

    &:hover {
      background-color: #425A20;
    }

    &:active {
      background-color: #597D4E;
    }

    &::before {
      box-sizing: border-box;
      content: "";
      width: 200px;
      height: 46px;
      border-radius: 5px;
      border: 0.5px solid black;
      transform: rotate(-2deg);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
