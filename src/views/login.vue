<template>
  <el-container class="overflow-hidden h-full">
    <el-header>
      <t-header :needBtn="false"/>
    </el-header>
    <el-main class="h-full p-0">
      <div class="loginbg bg-cover h-full flex">
        <div class="text-95px font-serif font-bold select-none self-center">康乐在线<br>与温暖医生零距离</div>
        <div class="self-center"><login/></div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import THeader from '@c/Header.vue'
import Login from '@c/Login.vue'</script>

<style scoped>
.loginbg {
  background-image: url('@a/cool.png');
  background-repeat: no-repeat;
}
</style>
