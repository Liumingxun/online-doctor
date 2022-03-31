<template>
  <div class="w-80 border-#bbb border rounded-10px pb-30 bg-white-200 bg-opacity-50 relative">
    <div class="img-title flex justify-center h-64px py-20px">
      <div class="w-160px h-full flex justify-center"><img alt="" class="h-full" src="/64logo.png"></div>
      <div class="title-container text-20px self-center">康乐在线</div>
    </div>
    <div class="w-full px-5 box-border m-auto flex justify-center">
      <el-form :model="user" class="w-full" label-position="left" label-width="80px">
        <el-form-item>
          <template #label>
            <span>账号</span>
          </template>
          <el-input v-model="user.account" placeholder="手机号或邮箱" type="text"/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span>密码</span>
          </template>
          <el-input v-model="user.password" placeholder="密码" type="password"/>
        </el-form-item>
        <div class="flex justify-center">
          <el-button class="p-20px px-10 text-white-500 text-lg bg-#e21 hover:bg-#e21 hover:text-xl hover:text-white">登录</el-button>
        </div>
      </el-form>
    </div>
    <div class="reg-link absolute right-10 bottom-10 select-none hover:cursor-pointer" @click="gotoPath('/user/register')">
      <div>还没账号&quest;点我去注册&rightarrow;</div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { gotoPath } from '@/utils'


const user = reactive({
    account: '',
    password: ''
})

</script>

<style scoped>
.title-container:before {
  content: '';
  border-left: 2px solid #000;
  padding: 0 15px;
}

</style>
