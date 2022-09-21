<script setup>
import { ref } from 'vue'

let isTypeClick = ref(0)
let openType = () => {
  isTypeClick.value = 1 ^ isTypeClick.value
}

let isShowMore = ref(1)
let showMore = () => {
  isShowMore.value = 1 ^ isShowMore.value
}

let isOpenInput = ref(0)
let openInput = () => {
  isOpenInput.value = 1 ^ isOpenInput.value
}

</script>
<template>
  <div class="header">
    <div class="name" v-show="isShowMore">
      <span class="logo">L</span>
      &nbsp; <span style="display: flex; align-items: center;">Living</span>
    </div>
    <div class="more-button" @click="showMore">
      <img src="../../assets/home/svg/menu.svg" alt="">
    </div>
    <div class="search-button" v-show="isShowMore && !isOpenInput" @click.stop="openInput">
      <img src="../../assets/home/svg/search.svg" alt="">
    </div>
    <div class="navigation-bar animate__animated animate__fadeInDown" v-show="!isShowMore">
      <div class="navigation-item"><span>开发技术</span></div>
      <div class="navigation-item"><span>技术资讯</span></div>
      <div class="navigation-item"><span>生活分享</span></div>
      <div class="navigation-item show_more_item">
        <span @click="openType" style="display: flex;">
          技术类别
          <span>
            <img v-show="isTypeClick" src="../../assets/home/svg/down.svg" alt="">
            <img v-show="!isTypeClick" src="../../assets/home/svg/up.svg" alt="">
          </span>
        </span>
          <ul class="animate__animated animate__fadeInDown more" v-show="isTypeClick">
            <li>JavaScript</li>
            <li>CSS</li>
            <li>框架 组件</li>
            <li>网络</li>
          </ul>
      </div>
    </div>
    <div v-show="isOpenInput" class="search">
      <img src="../../assets/home/svg/search.svg" alt="">
      <input type="text">
    </div>
  </div>
</template>

<style scoped lang="scss">
/*手机*/
  .header {
    position: relative;
    color: #fff;
    width: 100vw;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem;
    .name {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      color: rgba(255, 255, 255, 0.66);
      .logo {
        width: 1.8em;
        height: 1.8em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        background-color: #4b5563;
      }
    }
    .more-button{
      height: 1.5rem;
      width: 1.5rem;
    }
    .search-button{    
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .navigation-bar{
      position: absolute;
      right: 3%;
      display: flex;
      justify-content: center;
      width: 90%;
      height: 3em;
      .navigation-item {
        flex: 1;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        z-index: 1;
        padding: 1.25rem 0;
      }
      .show_more_item{
        display: flex;
        width: auto;
        flex-direction: column;
        overflow:visible;
        .more{
          position: absolute;
          display: flex;
          flex-direction: column;
          top: 3rem;
          width: 5.1875rem;
          line-height: 1.7em;
          transition: display 0.5s ease-in-out;
          li{
            list-style-type: none;
          }
        }
      }
      .more p { 
        position: absolute;
        color: #9e9e9e;
        width: 4.5em;
        text-align: center;
        transition: opacity ease-in 1s, transform 1s;
        transform: translateY(-1.3em);
        opacity: 0;
        z-index: -1;
      }
      .more p:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .search{
      width: 7rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #343e4e;
      border-radius: 6.25rem;
      img{
        height: .875rem;
        width: .875rem;  
        margin-right: .3125rem;
      }
      input{
        width: 4rem;
        background-color: #343e4e;
        outline:none;
        border: none;
        box-shadow:none;
        color: rgba(255, 255, 255, 0.568);
      }
    }
  }
</style>