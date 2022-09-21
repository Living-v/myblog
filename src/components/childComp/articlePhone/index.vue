<script setup>

</script>

<template>
  <div class="article_box">
    <div class="article" v-for="(item, index) in 5" :key="index">
      <img src="../../../assets/Rectangle 4.png" alt="">
      <div class="time">July 2022</div>
      <div class="title">
        Understanding color theory: the color wheel and finding complementary colors
      </div>
      <div class="introduction">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
        incididunt aliquip deserunt reprehenderit elit laborum.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .article_box {
    position: relative;
    width: 100vw;
    height: auto;
    box-sizing: border-box;
    padding: 1.25rem 1.5625rem;

    .article {
      width: 100%;
      margin-bottom: 3.125rem;
      img {
        display: block;
        margin: 0 auto;
        width: 100%;
        border-radius: .625rem;
      }

      .time {
        color: rgba(255, 255, 255, 0.705);
        font-size: small;
        font-weight: 100;
      }

      .title {
        margin-top: .9375rem;
        width: 100%;
        font-size: 24px;
        font-weight: 100;
        color: #ffffffe0;
      }

      .introduction {
        margin-top: .9375rem;
        width: 100%;
        font-size: 16px;
        font-weight: 100;
        color: #ffffff81;
      }
    }
  }
</style>
