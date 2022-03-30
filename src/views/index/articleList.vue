<template>
  <div class="flex flex-col justify-center m-5">
    <div class="title-container w-210 h-25 m-auto overflow-hidden">
      <div id="title"
           class="h-full text-4xl select-none tracking-widest font-500 text-center leading-25 text-shadow-lg">专家文章
      </div>
    </div>
    <div class="m-auto mt-5">
      <ul class="list-none">
        <li v-for="article in articleList" :key="`article-${article.id}`"
            @click="gotoPath(`/article/${article.id}`)">
          <el-card class="w-200 h-85px mt-2">
            <div>
              <div class="text-xl">
                {{ article.title }}
              </div>
              <div>
                <span>{{ article.author }}</span>
                <span>{{ beautyTime(article.create_time) }}</span>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { beautyTime, gotoPath } from '@/utils'
import { onMounted, ref } from 'vue'
import { useArticleStore } from '@/store/article'

const articleStore = useArticleStore()
const articleList = ref([])

const getArticleList = () => {
    articleStore.getArticleList({page_size: 5}).then(res => articleList.value = res.results)
}

onMounted(() => {
    getArticleList()
})
</script>

<style scoped>
.title-container {
  background-image: url('@a/particle.png');
  background-repeat: no-repeat;
  background-size: cover;
}

#title:after {
  content: 'Professional articles';
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  transform: translate(90px, 30px);
  font-style: italic;
}
</style>
