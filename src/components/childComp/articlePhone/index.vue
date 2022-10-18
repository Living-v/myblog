<script setup>
import articleCard from '../../common/articleCard.vue'

</script>

<template>
  <div class="article_box">
    <div v-for="(item, index) in 5" :key="index">
      <articleCard></articleCard>
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
  }
</style>
