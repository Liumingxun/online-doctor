<template>
  <div class="knowledge-banner h-45 pl-10 pt-10">
    <div class="title text-4xl">{{title}}</div>
    <div v-if="category && category.length !== 0" class="about-category mt-13">
      <span>相关科室：</span>
      <el-tag v-for="(item, idx) in category" :key="`i-c-${idx}`" class="mr-1 select-none cursor-pointer" size="large" @click="gotoPath('/')">
        {{item}}
      </el-tag>
    </div>
  </div>
</template>

<script setup>


defineProps({
    title: String,
    category: Array
})

</script>

<style scoped>
.about-category {
  line-height: 32px;
}

.knowledge-banner {
  background: rgb(235,237,141);
  background: -moz-linear-gradient(13deg, rgba(235,237,141,1) 0%, rgba(30,228,171,1) 55%, rgba(2,197,212,1) 93%, rgba(0,212,255,1) 100%);
  background: -webkit-linear-gradient(13deg, rgba(235,237,141,1) 0%, rgba(30,228,171,1) 55%, rgba(2,197,212,1) 93%, rgba(0,212,255,1) 100%);
  background: linear-gradient(13deg, rgba(235,237,141,1) 0%, rgba(30,228,171,1) 55%, rgba(2,197,212,1) 93%, rgba(0,212,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ebed8d",endColorstr="#00d4ff",GradientType=1);
}
</style>
