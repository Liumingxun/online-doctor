<template>
  <el-container class="overflow-hidden h-full">
    <el-header class="p-0">
      <t-header :needBtn="false"/>
    </el-header>
    <el-main class="h-full p-0">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script setup>
import THeader from '@c/Header.vue'</script>

<style>
.logregbg {
  background-image: url('@a/cool.png');
  background-repeat: no-repeat;
}
</style>
