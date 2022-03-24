<script setup>
import THeader from '@c/Header.vue'</script>

<template>
  <el-container>
    <el-header class="p-0">
      <t-header :needBtn="true"/>
    </el-header>
    <el-main class="p-0">
      <router-view/>
    </el-main>
  </el-container>
</template>
