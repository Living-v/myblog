<script setup>
import navigationBarPhone from './childComp/navigationBarPhone.vue';
import ArticlePhone from './childComp/articlePhone/index.vue';

</script>

<template>
  <body>
      <header>
        <navigationBarPhone class="phone"></navigationBarPhone>
      </header>
      <main>
        <ArticlePhone class="phone"></ArticlePhone>
      </main>
  </body>
</template>

<style lang="scss" scoped>
body{
  width: 100vw;
  background-image: linear-gradient(30deg, #131a29, #3e4757);
  box-sizing: border-box;
}
/*手机*/
@media screen and (max-width:600px) {
  .pc{
    opacity: 0;
  }
}

/*PC*/
@media screen and (min-width:600px) {
  .phone{
    opacity: 0;
  }
}
</style>
