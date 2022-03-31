<template>
<div>
  <knowledge-banner :category="depart" :title="knowledgeDetail.name" />
  <el-card class="w-80% m-auto mt-10">
    <v-md-preview id="k-mdp" :text="knowledgeDetail.body"/>
  </el-card>
</div>
</template>

<script setup>
import KnowledgeBanner from '@c/KnowledgeBanner.vue'
import { useKnowledgeStore } from '@/store/knowledge'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'


const knowledgeId = useRoute().params.id
const knowledgeStore = useKnowledgeStore()
const knowledgeDetail = ref({})
let depart = ref([])


const getKnowledgeDetail = (knowledgeId) => {
    knowledgeStore.getKnowledgeDetail(knowledgeId).then(res => {
        knowledgeDetail.value = res
        depart.value = res.depart.map((item) => {
            return item.name
        })
    })
}

onMounted(() => {
    getKnowledgeDetail(knowledgeId)
})

</script>


<style scoped>

</style>
