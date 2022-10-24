<script setup>
import { ref, defineProps } from 'vue'
import articleCard from '../../common/articleCard.vue'

const props = defineProps(['article'])


</script>

<template>
  <div class="article_box">
    <articleCard v-for="(item, index) in props.article" :articleInfo="item"></articleCard>
  </div>
</template>

<style lang="scss" scoped>
  .article_box {
    position: relative;
    width: 100vw;
    height: auto;
    box-sizing: border-box;
    padding: 1.25rem 1.5625rem;
  }
</style>
