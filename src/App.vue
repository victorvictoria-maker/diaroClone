<template>
  <router-view class="wrapper"/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@300;400;700;800&display=swap');

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
}

.wrapper {
  max-width: 600px;
  height: 90%;
  margin: 5% auto;
  background-color: purple;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 16px 22px;
  box-shadow: 0 4px 8px 0px rgba(225, 225, 225, 0.5), 0 0px 2px 0px rgba(225, 225, 225, 0.1);
}

@media screen and (max-width: 480px) {
  .wrapper {
    height: 100vh;
    margin: 0 auto !important;
    border-radius: 0;
  }
}
</style>
