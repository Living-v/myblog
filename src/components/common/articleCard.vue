<script setup>
  import { ref } from 'vue'
</script>

<template>
  <div class="article">
    <img src="../../assets/Rectangle 4.png" alt="">
    <div class="date">July 2022</div>
    <div class="title">
      什么是Vue？它做了什么？从Vue生命周期来了解Vue什么是Vue？它做了什么？从Vue生命周期来了解Vue
    </div>
    <div class="introduction">
      Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
      incididunt aliquip deserunt reprehenderit elit laborum.
    </div>
  </div>
</template>

<style lang='scss' scoped>
.article {
  width: 100%;
  margin-bottom: 3.125rem;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    border-radius: .625rem;
  }

  .date {
    color: rgba(255, 255, 255, 0.705);
    font-size: small;
    font-weight: 100;
  }

  .title {
    margin-top: .9375rem;
    width: 100%;
    height: 4rem;
    font-size: 24px;
    font-weight: 100;
    color: #ffffffe0;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:2; //显示的行
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .introduction {
    margin-top: .9375rem;
    width: 100%;
    font-size: 16px;
    font-weight: 100;
    color: #ffffff81;
  }
}
</style>