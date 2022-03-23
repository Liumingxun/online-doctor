<template>
  <el-container class="overflow-hidden h-full">
    <el-header>
      <t-header :needBtn="false"/>
    </el-header>
    <el-main class="h-full p-0">
      <div class="logregbg bg-cover h-full flex justify-around">
        <div class="text-95px font-serif font-bold select-none self-center">康乐在线<br>与温暖医生零距离</div>
        <div class="self-center"><register/></div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import THeader from '@c/Header.vue'
import Register from '@c/Register.vue'</script>

<style scoped>
.logregbg {
  background-image: url('@a/cool.png');
  background-repeat: no-repeat;
}
</style>
