<script setup>
import navigationBar from './childComp/navigationBar.vue';

</script>

<template>
  <body>
      <header>
        <navigationBar></navigationBar>
      </header>
  </body>
</template>

<style scoped>
body{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(30deg, #131a29, #3e4757);
}
</style>
