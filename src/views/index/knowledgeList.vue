<template>
  <div class="w-80% m-auto">
    <content-section v-for="(content, index) in categoryList" :key="`content-${index}`" :title="content.name">
      <div class="flex flex-wrap">
        <div v-for="(item) in content.sub_cat" :key="`item-${item.id}`" class="flex-auto inline-block w-25 h-25 bg-#6cf m-1"
             @click="gotoPath(`/knowledge/${item.id}`)">
          {{ item.name }}
        </div>
      </div>
    </content-section>
  </div>
</template>

<script setup>
import ContentSection from '@c/ContentSection.vue'
import { gotoPath } from '@/utils'
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

</style>
