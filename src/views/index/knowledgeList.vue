<template>
  <div class="w-80% m-auto">
    <content-section v-for="(content, index) in categoryList" :key="`content-${index}`" :title="content.name">
      <more-box>
        <div class="flex flex-wrap justify-around">
          <div v-for="(item) in content.sub_cat" :key="`item-${item.id}`"
               class="w-12% flex-auto m-8px">
            <router-link :to="`/knowledge/${item.id}`" class="rounded w-full inline-block h-25 bg-#6cf2 border border-#ccc text-center">{{ item.name }}</router-link>
          </div>
        </div>
      </more-box>
    </content-section>
  </div>
</template>

<script setup>
import MoreBox from '@c/MoreBox.vue'
import ContentSection from '@c/ContentSection.vue'
import { onMounted, ref } from 'vue'
import { useKnowledgeStore } from '@/store/knowledge'

const knowledgeStore = useKnowledgeStore()

const categoryList = ref([])

const getKnowledgeCate = () => {
    knowledgeStore.getKnowledgeCate().then(res => categoryList.value = res).catch(console.error)
}

onMounted(() => {
    getKnowledgeCate()
})
</script>

<style scoped>
*:link, *:visited, *:active {

  text-decoration: none;
  color: initial;
}
</style>
