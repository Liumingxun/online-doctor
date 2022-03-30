<template>
  <div>
    <el-card class="w-80% m-auto mt-10">
      <template #header>
        <div class="text-center relative">
          <h1>{{ articleDetail.title }}</h1>
          <div class="inline-block">
            <span>{{ articleDetail.author }}</span>
            <el-button class="ml-2" size="small" type="primary">在线咨询</el-button>
          </div>
          <div class="inline-block mx-5 color-#ccc">|</div>
          <div class="inline-block">
            <span>{{ beautyTime(articleDetail.create_time, true) }}</span>
          </div>
        </div>
      </template>
      <v-md-preview id="mdp" :text="articleDetail.body"/>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useArticleStore } from '@/store/article'
import { beautyTime } from '@/utils'

const route = useRoute()
const articleId = route.params.id
const articleStore = useArticleStore()
const articleDetail = ref({})

const getArticleDetail = (id) => {
    articleStore.getArticleDetail(id).then(res => articleDetail.value = res)
}

onMounted(() => {
    getArticleDetail(articleId)
})
</script>

<style scoped>

</style>
