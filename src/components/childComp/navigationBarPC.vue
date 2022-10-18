<script setup>
import { ref } from 'vue'

let isTypeClick = ref(0)
let openType = () => {
  isTypeClick.value = 1 ^ isTypeClick.value
}
</script>

<template>
  <div class="header">
    <div class="name">
      <span class="logo">L</span>
      &nbsp; <span style="display: flex; align-items: center;">Living</span>
    </div>
    <div class="navigation-bar">
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
    <div class="search">
      <img style="cursor: pointer;" src="../../assets/home/svg/search.svg" alt="">
      <input type="text" placeholder="Search">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header{
  position: relative;
  height: 10rem;
  min-width: 90rem;
  padding: 0 10rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
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
  .navigation-bar{
      position: relative;
      left: -15em;
      display: flex;
      justify-content: center;
      width: 27rem;
      height: 3em;
      color: rgba(255, 255, 255, 0.541);
      .navigation-item {
        cursor: pointer;
        flex: 1;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        z-index: 1;
        padding: 1.25rem 0;
        &:hover{
          text-decoration: underline;
        }
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
            &:hover{
              text-decoration: underline;
            }
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
    position: relative;
    right: -10px;
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
