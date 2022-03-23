<template>
  <div class="flex justify-between p-3 h-full box-border">
    <div class="cursor-pointer h-full flex" @click="gotoPath('/')">
      <div class="logo inline-block h-full">
        <img alt="LOGO" class="logo h-full" src="@a/logo.png">
      </div>
      <div class="inline-block self-center"><span class="text-xl">康乐在线医疗</span></div>
    </div>
    <div v-if="needBtn">
      <div v-if="!userStore.isLogin">
        <el-button color="#626aef" plain @click="gotoPath('/login')">登录</el-button>
      </div>
      <div v-else>
        <el-dropdown>
          <span id="username">{{ username + '' }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-button type="text">个人中心</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="text">退出登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAccountStore} from '../store/account'
import {gotoPath} from '@/utils'

defineProps({
    needBtn: Boolean
})
const userStore = useAccountStore()
const {username} = userStore


</script>

<style scoped>
#username:after {
  width: 0;
  height: 0;
  content: '';
  position: absolute;
  transform: translate(5px, 25%);
  border: 4px solid transparent;
  border-top: 8px solid #606266;
}

img.logo {
}
</style>
