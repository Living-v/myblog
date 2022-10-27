<script setup>
import { ref} from 'vue'
import {getArticleDetail} from '../network/home'
import {useRoute} from 'vue-router'

const ArticleId = useRoute().query.Id

const  ArticleInfo = ref(null)

getArticleDetail(ArticleId).then(res=>{
    ArticleInfo.value = res
})

</script>

<template>
    <div class="main-box">
        <p class="date">{{ArticleInfo?.date}}</p>
        <h1 class="title">{{ArticleInfo?.title}}</h1>
        <img class="titleImg" :src="ArticleInfo?.titleImg" alt="">
        <div class="content" v-html="ArticleInfo?.content"></div>
        <div class="footer">
            Copyright (c) 2022 - Design By Living
        </div>
    </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 50rem){
    .titleImg{
        width: 90% !important;
        height: 100% !important;
    }
}
.main-box{
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-image: linear-gradient(30deg, #131a29, #3e4757);
    display: flex;
    flex-direction: column;
    align-items: center;
    .date{
        margin: 1rem;
        box-sizing: border-box;
        text-align: center;
        color: #ffffff6e;
    }
    .title{
        margin: 0 2rem;
        color: #ffffffc5;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 26px;
    }
    .titleImg{
        width: 50rem;
        height: 25rem;
        border-radius: 10px;
    }
    .content{
        max-width: 43rem;
        display: inline;
        color: #ffffffce;
        margin: 2rem 2rem 0 2rem;
    }
    .footer{
        margin: 2rem;
        color: #ffffff6e;
        font-size: small;
    }
}
</style>