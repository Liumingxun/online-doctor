<template>
  <div>
    <index-banner/>
    <div class="m-auto w-75%">
      <div class="flex">
        <div class="inline-block h-80 w-60% box-border px-2">
          <content-section class="h-full" moreLink="knowledgeList" title="科普知识">
            <el-tabs class="h-full" stretch type="card">
              <el-tab-pane v-for="(cate, idx) in indexCategoryList" :key="`cate-${idx}`" :label="cate.name">
                <div v-for="item in cate.sub_cat" :key="`know-${item.id}`" class="inline-block w-15 mx-2px p-5px rounded-10px bg-#ddd text-center cursor-pointer" @click="gotoPath(`/knowledge/${item.id}`)">
                  {{ item.name }}
                </div>
              </el-tab-pane>
            </el-tabs>
          </content-section>
        </div>
        <div class="inline-block h-80 w-40% box-border px-2">
          <content-section class="h-full" moreLink="articleList" title="专家文章">
            <div v-for="article in indexArticleList" :key="`article-${article.id}`"
                 class="justify-between article-item cursor-pointer mb-3px" @click="gotoPath(`/article/${article.id}`)">
              <div class="truncate w-70% inline-block align-middle">{{ article.title }}</div>
              <div class="float-right">{{ beautyTime(article.create_time) }}</div>
            </div>
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
import { useKnowledgeStore } from '@/store/knowledge'
import { onMounted, ref } from 'vue'
import { beautyTime, gotoPath } from '@/utils'

const articleStore = useArticleStore()
const knowledgeStore = useKnowledgeStore()
let indexArticleList = ref([])
let indexCategoryList = ref([])

const getArticleList = () => {
    articleStore.getArticleList({page_size: 5}).then(res => indexArticleList.value = res.results)
}

const getKnowledgeCate = () => {
    knowledgeStore.getKnowledgeCate().then(res => indexCategoryList.value = res)
}

onMounted(() => {
    getArticleList()
    getKnowledgeCate()
})
</script>

<style scoped>
.article-item:before {
  content: '⏺️';
  vertical-align: top;
}
</style>
