<template>
  <div id="banner" class="h-848px w-100% bg-cover text-center">
    <div class="py-30 pb-50 text-95px font-serif font-bold select-none text-shadow-lg">康乐在线&emsp;与温暖医生零距离</div>
    <div class="flex justify-center flex-wrap">
      <el-button class="rounded-10px p-60px text-50px font-extrabold" type="primary">找医生</el-button>
      <el-button class="rounded-10px p-60px text-50px font-extrabold" type="primary">在线问</el-button>
      <el-button class="rounded-10px p-60px text-50px font-extrabold" type="primary" @click="gotoPath('/knowledgeList')">查知识</el-button>
    </div>
  </div>
</template>

<script setup>
import {gotoPath} from '@/utils'</script>

<style scoped>
#banner {
  background-image: url('@a/sky.jpg');
  background-repeat: no-repeat;
}
</style>
