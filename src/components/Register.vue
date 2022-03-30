<template>
  <div class="w-130 h-600px border-#bbb border rounded-10px bg-white-200 relative">
    <div class="img-title flex justify-center h-64px pt-20px">
      <div class="w-160px h-full pr-22px flex justify-center"><img alt="" class="h-full" src="@a/64logo.png"></div>
      <div class="title-container text-45px self-center">康乐在线</div>
    </div>
    <div class="w-100 m-auto flex justify-center mt-30">
      <el-form :model="user" label-position="left" label-width="100px">
        <el-form-item v-if="usePhone">
          <template #label>
            <span class="text-lg">手机号</span>
          </template>
          <el-input v-model="user.phone" placeholder="中国大陆手机号" type="text">
            <template #append>
              <el-button>发送验证码</el-button>
            </template>
          </el-input>
          <el-button type="text" @click="usePhone=!usePhone">使用邮箱注册</el-button>
        </el-form-item>
        <el-form-item v-if="!usePhone">
          <template #label>
            <span class="text-lg">邮箱</span>
          </template>
          <el-input v-model="user.email" placeholder="邮箱" type="text">
            <template #append>
              <el-button>发送验证码</el-button>
            </template>
          </el-input>
          <el-button type="text" @click="usePhone=!usePhone">使用手机号注册</el-button>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span class="text-lg">验证码</span>
          </template>
          <el-input v-model="user.code" placeholder="验证码" type="password"/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span class="text-lg">密码</span>
          </template>
          <el-input v-model="user.password" placeholder="密码" type="password"/>
        </el-form-item>
        <div class="flex justify-center">
          <el-button class="p-20px px-10 text-white-500 text-lg bg-#e21 hover:bg-#e21 hover:text-xl hover:text-white">
            注册
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="reg-link absolute right-10 bottom-10 select-none hover:cursor-pointer" @click="gotoPath('/user/login')">
      <div>已有账号&quest;点我去登录&rightarrow;</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { gotoPath } from '@/utils'

const user = reactive({
    account: '',
    password: ''
})

const usePhone = ref(true)
</script>

<style scoped>
.title-container:before {
  content: '';
  border-left: 2px solid #000;
  padding: 0 15px;
}

</style>
