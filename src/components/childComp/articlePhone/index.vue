<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from "vue-router"

import articleCard from '../../common/articleCard.vue'

const router = useRouter()

const props = defineProps(['article'])

const openArticle = (item)=>{
    router.push({
      path:"/article",
      query:{
        Id:item._id
      }
    })
  }
</script>

<template>
  <div class="article_box">
    <articleCard v-for="(item, index) in props.article" v-if="props.article" @click="openArticle(item)" :articleInfo="item"></articleCard>
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
