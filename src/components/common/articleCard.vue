<script setup>
  import { ref } from 'vue'

  let props = defineProps(['articleInfo'])
</script>

<template>
<div v-if="props.articleInfo">
  <div class="article">
    <img :src="articleInfo.titleImg? articleInfo.titleImg:'../../assets/cover.png'" alt="">
    <div class="date">{{articleInfo.date? articleInfo.date.substring(0, 16) : '未知'}}</div>
    <div class="title">
      {{articleInfo.title? articleInfo.title : '文章标题丢失'}}
    </div>
    <div class="introduction">
      {{articleInfo.introduction? articleInfo.introduction:'文章简介丢失'}}
    </div>
  </div>
</div>

</template>

<style lang='scss' scoped>
@media screen and (max-width:600px) {
  .article {
    img {
      width: 21.0625rem !important;
      height: 12.125rem !important;
    }
  }
}
.article {
  width: 100%;
  margin-bottom: 3.125rem;
  img {
    display: block;
    margin: 0 auto;
    width: 26.0625rem;
    height: 16.125rem;
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
    font-size: 24px;
    font-weight: 100;
    color: #ffffffe0;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:1; //显示的行
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .introduction {
    margin-top: .3rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:4; //显示的行
    font-size: 16px;
    font-weight: 100;
    color: #ffffff81;
  }
}
</style>