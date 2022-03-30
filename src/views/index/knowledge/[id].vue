<template>
<div>
  <knowledge-banner :category="knowledgeDetail.category" :title="knowledgeDetail.title"></knowledge-banner>
  <el-card class="w-80% m-auto mt-10">
    <v-md-preview id="k-mdp" :text="knowledgeDetail.article"/>
  </el-card>
</div>
</template>

<script setup>
import KnowledgeBanner from '@c/KnowledgeBanner.vue'


const knowledgeDetail = {
    title: '233',
    category: ['呼吸科', '耳鼻喉科', '内科'],
    article: '# 233 \n 223 \b333 \t 2tt2 \n\r ## 233vxs'
}

</script>


<style scoped>

</style>
