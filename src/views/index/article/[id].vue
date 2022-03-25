<template>
  <div>
    <el-card class="w-80% m-auto mt-10">
      <template #header>
        <div class="text-center relative">
          <h1>233</h1>
          <div class="inline-block">
            <span>{\{author}}</span>
            <el-button class="ml-2" size="small" type="primary" @click="talkTo">在线咨询</el-button>
          </div>
          <div class="inline-block mx-5 color-#ccc">|</div>
          <div class="inline-block">
            <span>{\{date}}</span>
          </div>
        </div>
      </template>
      <v-md-preview id="mdp" :text="src"/>
    </el-card>
  </div>
</template>

<script setup>
// import {useRoute} from 'vue-router'
//
// const route = useRoute()
//
// const articleId = route.params.id

const src = `
# 一级标题
## 二级标题

233

veuiyige
`


</script>

<style scoped>

</style>
