<template>
  <div class="bg-#FFF5E9 h-45 pl-10 pt-10">
    <div class="title text-4xl">{{title}}</div>
    <div class="about-category mt-13">
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
</style>
