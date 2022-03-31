<template>
  <div class="w-80 border-#bbb border rounded-10px pb-30 bg-white-200 bg-opacity-50 relative">
    <div class="img-title flex justify-center h-64px py-20px">
      <div class="w-160px h-full flex justify-center"><img alt="" class="h-full" src="/64logo.png"></div>
      <div class="title-container text-20px self-center">康乐在线</div>
    </div>
    <div class="w-full px-5 box-border m-auto flex justify-center">
      <el-form :model="user" class="w-full" label-position="left" label-width="80px">
        <el-form-item v-if="usePhone">
          <template #label>
            <span>手机号</span>
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
            <span>邮箱</span>
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
            <span>验证码</span>
          </template>
          <el-input v-model="user.code" placeholder="验证码" type="password"/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span>密码</span>
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
* {
  --el-font-size-base: 12px
}

.title-container:before {
  content: '';
  border-left: 2px solid #000;
  padding: 0 15px;
}

</style>
