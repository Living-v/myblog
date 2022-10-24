<script setup>
import navigationBarPhone from './childComp/navigationBarPhone.vue';
import ArticlePhone from './childComp/articlePhone/index.vue';
import NavigationBarPC from './childComp/navigationBarPC.vue';
import ArticlePC from './childComp/articlePC/index.vue'
import Footer from './childComp/footer.vue'

import {ref} from 'vue'

import {getArticle} from '../network/home'

let curArticle = ref(null)

getArticle('/getDevTec').then(res =>{
  curArticle.value = res
})

let curType = ref(1)
const getCurType = (e)=>{
  if(curType.value === e.value){
    return
  }
  curType.value = e.value
  console.log(e.value);
  if(e.value === 1){
    getArticle('/getDevTec').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 2){
    getArticle('/getDevInfo').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 3){
    getArticle('/getLifeShare').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 4){
    getArticle('/getJavaScript').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 5){
    getArticle('/getCSS').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 6){
    getArticle('/getFrame').then(res =>{
      curArticle.value = res
    })
  }else if(e.value === 7){
    getArticle('/getNetwork').then(res =>{
      curArticle.value = res
    })
  }
}

</script>

<template>
  <body>
      <header>
        <div class="phone">
          <navigationBarPhone @getCurType="getCurType"></navigationBarPhone>
        </div>
        <div class="pc">
          <NavigationBarPC @getCurType="getCurType"></NavigationBarPC>
        </div>
      </header>
      <main>
        <div class="phone">
          <ArticlePhone :article="curArticle"></ArticlePhone>
        </div>
        <div class="pc">
          <ArticlePC :article="curArticle"></ArticlePC>
        </div>
        <Footer></Footer>
      </main>
  </body>
</template>

<style lang="scss" scoped>
body{
  background-image: linear-gradient(30deg, #131a29, #3e4757);
}
/*手机*/
@media screen and (max-width:600px) {
  .pc{
    display: none;
  }
}

/*PC*/
@media screen and (min-width:600px) {
  body{
    min-width: 90rem;
  }
  .phone{
    display: none;
  }
}
</style>
