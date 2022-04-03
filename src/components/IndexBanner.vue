<template>
  <div id="banner" class="h-848px w-100% bg-cover">
    <div class="px-60 py-30 text-60px font-serif font-bold color-#fff select-none text-shadow-lg">
    <div>康乐在线</div>
    <div class="text-right">与温暖医生零距离</div>
    </div>
    <div class="flex justify-center flex-wrap">
      <el-button class="rounded-10px p-60px text-50px font-extrabold shadow-gray-500 shadow-lg" type="primary" @click="gotoPath('/findDoctor')">找医生</el-button>
      <el-button class="rounded-10px p-60px text-50px font-extrabold shadow-gray-500 shadow-lg" type="primary" @click="gotoPath('/askDetail')">在线问</el-button>
      <el-button class="rounded-10px p-60px text-50px font-extrabold shadow-gray-500 shadow-lg" type="primary" @click="gotoPath('/knowledgeList')">查知识</el-button>
    </div>
  </div>
</template>

<script setup>
import { gotoPath } from '@/utils'</script>

<style scoped>
#banner {
  background-image: url('/sky.jpg');
  background-repeat: no-repeat;
}
</style>
