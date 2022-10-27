<script setup>
  import articleCard from "../../common/articleCard.vue"
  import { ref, defineProps, watch} from 'vue'
  import { useRouter } from "vue-router"
  const router = useRouter()

  const props = defineProps(['article'])

  let allArticle = ref(props.article)

  watch(
    ()=>props.article,
    ()=>{
      allArticle.value = props.article
      firstArticle.value = allArticle.value[0]
      changeArticles(7)
      canPrevious.value = false
      canNext.value = true
      curNumb = 7
    },
    {
      deep:true
    }
  )

  let firstArticle = ref(allArticle.value[0])
  let curNumb = 7
  let curArticles = ref(null)
 
  const changeArticles = (curNumb)=>{
    curArticles.value = allArticle.value.slice(curNumb-6, curNumb)
  }
  changeArticles(curNumb)

  let canNext = ref(true)
  let canPrevious = ref(false)

  const next = ()=>{
    canPrevious.value = true
    if(curNumb + 6 >= allArticle.value.length){
      canNext.value = false
    }
    curNumb = curNumb + 6
    changeArticles(curNumb)
  }

  const previous = ()=>{
    canNext.value = true
    curNumb = curNumb - 6
    if(curNumb === 7){
      canPrevious.value = false
    }
    changeArticles(curNumb)
  }

  const openFirstArticle = ()=>{
    router.push({
      path:"/article",
      query:{
        Id:firstArticle.value._id
      }
    })
  }

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
  <div class="lastArticle">
    <img @click="openFirstArticle" class="lastArticle_img" :src="firstArticle ? firstArticle.titleImg : '../../../assets/cover.png'" alt="">
    <div class="lastArticle_right">
      <div class="date">{{firstArticle? firstArticle.date.substring(0, 16) : '未知'}}</div>
      <div class="title" @click="openFirstArticle">
        {{firstArticle? firstArticle.title : '文章标题丢失'}}
      </div>
      <div class="introduction">
        {{firstArticle? firstArticle.introduction : '文章简介丢失'}}
      </div>
    </div>
  </div>
  <div class="allArticle">
    <div :class="['arrow', 'previous', canPrevious?'':'noPrevious']" @click="previous">
      <svg t="1666062678186" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2448" width="16" height="16"><path d="M828.996915 430.121165l0 111.544469L717.447882 541.665634l0 111.542422L605.898842 653.208056l0 111.544469L494.350827 764.752525 494.350827 653.208069 382.801787 653.208069 382.801787 541.665647 271.253771 541.665647 271.253771 430.121178 159.704732 430.121178 159.704732 207.033263l111.549039 0 0 111.543446 111.548016 0 0 111.544469 111.549039 0 0 111.544469 111.548016 0L605.898842 430.121178l111.549039 0L717.447882 318.576709l111.549039 0L828.996921 207.033263l111.549039 0 0 223.087914L828.996921 430.121178z" p-id="2449"></path></svg>
    </div>
    <div :class="['arrow', 'next', canNext?'':'noNext']" @click="next">
      <svg t="1666062678186" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2448" width="28" height="16"><path d="M828.996915 430.121165l0 111.544469L717.447882 541.665634l0 111.542422L605.898842 653.208056l0 111.544469L494.350827 764.752525 494.350827 653.208069 382.801787 653.208069 382.801787 541.665647 271.253771 541.665647 271.253771 430.121178 159.704732 430.121178 159.704732 207.033263l111.549039 0 0 111.543446 111.548016 0 0 111.544469 111.549039 0 0 111.544469 111.548016 0L605.898842 430.121178l111.549039 0L717.447882 318.576709l111.549039 0L828.996921 207.033263l111.549039 0 0 223.087914L828.996921 430.121178z" p-id="2449"></path></svg>
    </div>
    <articleCard class="articleCard" v-for="(item, index) in curArticles" v-if="curArticles" :articleInfo="item" @click="openArticle(item)"></articleCard>
  </div>
</template>

<style lang='scss' scoped>
.lastArticle{
  min-width: 70rem;
  height: 23rem;
  padding: 1rem 10rem;
  box-sizing: border-box;
  display: flex;
  .lastArticle_img{
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }
  .lastArticle_right{
    width: 40%;
    padding: 0 2rem;
    .date{
      color: rgba(255, 255, 255, 0.705);
      font-size: 19px;
      font-weight: 100;
    }
    .title {
      margin-top: .9375rem;
      width: 100%;
      font-size: 28px;
      font-weight: 100;
      color: #ffffffe0;
      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .introduction {
      margin-top: .9375rem;
      width: 100%;
      font-size: 17px;
      font-weight: 100;
      color: #ffffff81;
    }
  }

}
.allArticle{
  position: relative;
  margin-top: 2rem;
  min-width: 70rem;
  padding: 0 10rem;
  display: flex;
  flex-wrap: wrap;
  .articleCard{
    width: 25rem;
    margin-right: 5rem;
  }
  .arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 0;
    width: 2.5rem;
    height: 5rem;
    background-color: #444857;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover{
      background-color: #47cf73;
      svg{
        color: #444857;
      }
    }
  }
  .previous{
    left: 5rem;
    cursor: pointer;
    svg{
      transform: rotate(90deg) scale(3);
      color: #b7bbc8;
      fill: currentColor;
    }
  }
  .previous.noPrevious{
    display: none;
  }
  .next{
    right: 15rem;
    cursor: pointer;
    svg{
      transform: rotate(-90deg) scale(3);
      color: #b7bbc8;
      fill: currentColor;
    }
  }
  .next.noNext{
    display: none;
  }
}
</style>