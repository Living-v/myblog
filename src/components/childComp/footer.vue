<script setup>
  import { ref } from 'vue'
  import {getMotto} from '../../network/home'

  let Motto = ref(null)
  getMotto().then(res =>{
    Motto.value = res.motto
  })
</script>

<template>
  <div class="footer">
    「  {{Motto}} 」
  </div>
</template>

<style lang='scss' scoped>
.footer{
  color: rgba(240, 248, 255, 0.712);
  text-align: center;
}
</style>