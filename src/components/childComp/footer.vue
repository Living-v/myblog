<script setup>
  import { ref, defineProps } from 'vue'

  const props =  defineProps(['sentence'])
  console.log(props);
  // sentence.value = 
  
</script>

<template>
  <div class="footer">
    「  {{props.sentence}} 」
  </div>
</template>

<style lang='scss' scoped>
.footer{
  color: rgba(240, 248, 255, 0.712);
  text-align: center;
}
</style>