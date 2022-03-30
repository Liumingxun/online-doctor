<template>
  <div>
    <index-banner/>
    <div class="m-auto w-75%">
      <div class="flex">
        <div class="inline-block w-60% box-border px-2">
          <content-section moreLink="knowledgeList" title="科普知识">
            <el-tabs type="card">
              <el-tab-pane label="">

              </el-tab-pane>
            </el-tabs>
          </content-section>
        </div>
        <div class="inline-block w-40% box-border px-2">
          <content-section moreLink="articleList" title="专家文章">
              <ul class="list-inside list-circle">
                <li v-for="article in indexArticleList" :key="`article-${article.id}`" class="flex justify-between article-item cursor-pointer" @click="gotoPath(`/article/${article.id}`)">
                  <div class="truncate w-70%">{{ article.title }}</div>
                  <div>{{ beautyTime(article.create_time) }}</div>
                </li>
              </ul>
          </content-section>
        </div>
      </div>
      <div class="box-border px-2">
        <content-section title="感谢信">
          <el-carousel :interval="5000" arrow="never" indicator-position="none" type="card">
            <el-carousel-item>
              <el-card>
                <template #header>
                  💝感谢XX医院的X大夫救我狗命
                </template>
                <div class="indent-2em">
                  超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，
                </div>
              </el-card>
            </el-carousel-item>
            <el-carousel-item></el-carousel-item>
            <el-carousel-item></el-carousel-item>
          </el-carousel>
        </content-section>
      </div>
    </div>
  </div>
</template>

<script setup>
import IndexBanner from '@c/IndexBanner.vue'
import ContentSection from '@c/ContentSection.vue'
import { useArticleStore } from '@/store/article'
import { onMounted, ref } from 'vue'
import { beautyTime, gotoPath } from '@/utils'

const articleStore = useArticleStore()
let indexArticleList = ref([])

const getArticleList = () => {
    articleStore.getArticleList({page_size: 5}).then(res => indexArticleList.value = res.results)
}

onMounted(() => {
    getArticleList()
})
</script>

<style scoped>
</style>
