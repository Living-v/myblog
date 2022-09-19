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
    <div class="search-button" v-show="isShowMore">
      <img src="../../assets/home/svg/search.svg" alt="">
    </div>
    <div class="navigation-bar" v-show="!isShowMore">
      <div class="navigation-item"><span>开发技术</span></div>
      <div class="navigation-item"><span>技术资讯</span></div>
      <div class="navigation-item"><span>生活分享</span></div>
      <div class="navigation-item"><span @click="openType">技术类别</span>
        <span>
          <img v-show="isTypeClick" src="../../assets/home/svg/down.svg" alt="">
          <img v-show="!isTypeClick" src="../../assets/home/svg/up.svg" alt="">
        </span>
        <div class="more">
          <p :class="[isTypeClick ? 'moreActive' : '']">JavaScript</p>
          <p :class="[isTypeClick ? 'moreActive' : '']">CSS</p>
          <p :class="[isTypeClick ? 'moreActive' : '']">框架 组件</p>
          <p :class="[isTypeClick ? 'moreActive' : '']">网络</p>
        </div>
      </div>
    </div>
    <!-- <div class="search">
      <img src="../../assets/home/svg/search.svg" alt="">
      <input type="text">
    </div> -->
  </div>
</template>

<style scoped lang="scss">
/*手机*/
@media screen and (max-width:600px) {
  .header {
    position: relative;
    color: #fff;
    box-sizing: border-box;
    width: 100vw;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    .name {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      transition: display, ease-in-out, 2s;
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
    .search-button{
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .navigation-bar{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      width: 90%;
      .navigation-item {
        flex: 1;
        user-select: none;
        z-index: 1;
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
  }

}

/*PC*/
@media screen and (min-width:600px) {
  .header {
    color: #fff;
    position: relative;
    width: 1000px;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .more-button{
      opacity: 0;
    }
    .search-button{
      opacity: 0;
      width: 1.5rem;
      height: 1.5rem;
    }
    .name {
      position: absolute;
      display: flex;
    }

    .name .logo {
      width: 1.8em;
      height: 1.8em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      color: #fff;
      background-color: #4b5563;
    }

    .navigation-bar {
      position: absolute;
      margin-left: 8em;
      display: flex;
      width: 40em;
    }

    .navigation-item {
      flex: 1;
      user-select: none;
      z-index: 1;
    }

    .navigation-item span:hover {
      cursor: pointer;
      text-decoration: underline;
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

    .more p.moreActive:first-child {
      opacity: 1;
      transform: translateY(0.2em);
    }

    .more p.moreActive:nth-child(2) {
      opacity: 1;
      transform: translateY(1.8em);
    }

    .more p.moreActive:nth-child(3) {
      opacity: 1;
      transform: translateY(3.4em);
    }

    .more p.moreActive:last-child {
      opacity: 1;
      transform: translateY(5em);
    }

    .search {
      position: absolute;
      right: 0;
      background-color: #283241;
      padding: 0 0 0 0.6em;
      height: 2em;
      width: 10em;
      border-radius: 100px;
      display: flex;
      align-items: center;
      user-select: none;
    }

    .search input {
      width: 7em;
      height: 80%;
      margin-left: 0.5em;
      background-color: #283241;
      border: none;
      outline: none;
      color: #9e9e9e;
    }
  }
}
</style>