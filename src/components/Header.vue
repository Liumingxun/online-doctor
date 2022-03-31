<template>
  <div id="header-container" :style="{backgroundColor: route.path === '/' ? 'transparent' : 'white'}" class="flex justify-between p-3 h-full box-border">
    <div class="cursor-pointer h-full flex" @click="gotoPath('/')">
      <div class="logo inline-block h-full">
        <img alt="LOGO" class="logo h-full" src="/32logo.png">
      </div>
      <div class="inline-block self-center"><span class="text-xl pl-2">康乐在线医疗</span></div>
    </div>
    <div v-if="needBtn">
      <div v-if="!userStore.isLogin">
        <el-button color="#626aef" plain @click="gotoPath('/user/login')">登录</el-button>
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
import { useAccountStore } from '@/store/account'
import { gotoPath } from '@/utils'
import { useRoute } from 'vue-router'
import { onMounted, onUpdated } from 'vue'

defineProps({
    needBtn: Boolean
})

const route = useRoute()
const userStore = useAccountStore()
const {username} = userStore

function scrollHandler() {
    const header = document.getElementById('header-container')
    header.style.backgroundColor = `rgba(255,255,255, ${window.pageYOffset / 400})`
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
})

onUpdated(() => {
    if (route.path === '/') window.addEventListener('scroll', scrollHandler)
    else window.removeEventListener('scroll', scrollHandler)
})

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
