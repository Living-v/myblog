<script setup>
  import { ref } from 'vue'

  let props = defineProps(['articleInfo'])

</script>

<template>
<div v-if="props.articleInfo">
  <div class="article">
    <img :src="articleInfo.titleImg" alt="">
    <div class="date">{{articleInfo.date.substring(0, 16)}}</div>
    <div class="title">
      {{articleInfo.title}}
    </div>
    <div class="introduction">
      {{articleInfo.introduction}}
    </div>
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