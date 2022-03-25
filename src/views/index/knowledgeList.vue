<template>
  <div class="w-80% m-auto">
    <content-section v-for="(content, index) in section" :key="`content-${index}`" :title="content.sectionTitle">
      <div v-for="(item) in content.content" :key="`${item.id}`" class="inline-block w-25 h-25 bg-#6cf m-1"
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }
]

</script>

<style scoped>

</style>
