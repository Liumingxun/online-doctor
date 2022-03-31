<script setup>
import THeader from '@c/Header.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <el-container>
    <el-header :class="route.path === '/' ? 'fixed' : ''" class="p-0 w-full">
      <t-header :needBtn="true"/>
    </el-header>
    <el-main class="p-0">
      <router-view />
    </el-main>
  </el-container>
</template>
