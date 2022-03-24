<template>
  <div>
    <content-section v-for="(content, index) in section" :key="`${content}${index}`" :title="content.sectionTitle">
      <div v-for="(item, idx) in content.content" :key="`${item}${idx}`" class="inline-block w-25 h-25 bg-#6cf m-1"
           @click="gotoPath(`/knowledge/${item.id}`)">
        {{ item.name }}
      </div>
    </content-section>
  </div>
</template>

<script setup>
import ContentSection from '@c/ContentSection.vue'
import {gotoPath} from '@/utils'


const section = [
    {
        sectionTitle: '疾病',
        content: [
            {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            }, {
                name: '发烧',
                id: '233'
            },
        ]
    },
    {
        sectionTitle: '疾病',
        content: [
            '感冒',
            '发烧',
            '新冠',
            '失眠',
            '抑郁症',
            '腰椎间盘突出',
            '白癜风',
            '肺癌',
            '颈椎病',
            '不孕不育',
            '痔疮',
            '腋臭',
            '糖尿病',
            '疤痕',
            '肾结石',
            '鼻炎',
            '甲亢',
            '静脉曲张',
            '癫痫',
            '乙肝',
            '脑梗塞',
            '乳腺癌',
            '痤疮'
        ]
    },
]

</script>

<style scoped>

</style>
