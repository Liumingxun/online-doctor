<template>
  <div class="w-130 h-600px border-#bbb border rounded-10px bg-white-200 relative">
    <div class="img-title flex justify-center h-64px pt-20px">
      <div class="w-160px h-full pr-22px flex justify-center"><img alt="" class="h-full" src="@a/64logo.png"></div>
      <div class="title-container text-45px self-center">康乐在线</div>
    </div>
    <div class="w-100 m-auto flex justify-center mt-30">
      <el-form :model="user" class="w-full" label-position="left" label-width="100px">
        <el-form-item>
          <template #label>
            <span class="text-lg">账号</span>
          </template>
          <el-input v-model="user.account" placeholder="手机号或邮箱" type="text"/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span class="text-lg">密码</span>
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
