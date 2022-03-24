<template>
<div>
  <div class="m-4 flex justify-between">
    <div class="section-title">{{title}}</div>
    <div v-if="moreLink !== undefined" class="cursor-pointer hover:color-blue-300 section-more" @click="handleMore">查看更多</div>
  </div>
  <div class="rounded-10px border border-gray-200 shadow py-2 px-5 bg-white">
    <slot></slot>
  </div>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const p = defineProps({
    title: String,
    moreLink: String
})

const router = useRouter()
const handleMore = () => {
    router.push({
        path: p.moreLink
    })
}
</script>

<style scoped>
.section-title:before, .section-more:after {
  content: '///';
  font-weight: 900;
  color: dodgerblue;
  text-shadow: 1px 1px 3px rgba(0,0,0, 30%);
  padding-right: 4px;
}

.section-more:after {
  content: '>>>';
  color: unset;
}

.section-more:hover:after {
  color: rgb(147,197,253);
}
</style>
