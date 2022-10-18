<script setup>
import navigationBarPhone from './childComp/navigationBarPhone.vue';
import ArticlePhone from './childComp/articlePhone/index.vue';
import NavigationBarPC from './childComp/navigationBarPC.vue';
import ArticlePC from './childComp/articlePC/index.vue'

</script>

<template>
  <body>
      <header>
        <div class="phone">
          <navigationBarPhone></navigationBarPhone>
        </div>
        <div class="pc">
          <NavigationBarPC></NavigationBarPC>
        </div>
      </header>
      <main>
        <div class="phone">
          <ArticlePhone ></ArticlePhone>
        </div>
        <div class="pc">
          <ArticlePC ></ArticlePC>
        </div>
      </main>
  </body>
</template>

<style lang="scss" scoped>
body{
  background-image: linear-gradient(30deg, #131a29, #3e4757);
}
/*手机*/
@media screen and (max-width:600px) {
  .pc{
    display: none;
  }
}

/*PC*/
@media screen and (min-width:600px) {
  body{
    min-width: 90rem;
  }
  .phone{
    display: none;
  }
}
</style>
