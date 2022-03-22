<template>
  <div class="w-600px h-600px border-#bbb border rounded-10px bg-white-200">
    <div class="img-title flex justify-center h-15%">
      <div class="w-160px h-full pr-22px"><img alt="" class="h-full w-full" src="@a/logo.png"></div>
      <div class="title text-45px self-center">康乐在线</div>
    </div>
    <div class="flex justify-center h-85% pt-10px">
      <el-form :model="user" label-position="left" label-width="100px">
        <el-form-item label="账号">
          <el-input v-model="user.account" type="text"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" type="password"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {useAccountStore} from '../store/account'
import {reactive} from 'vue'

const accountStore = useAccountStore()
const user = reactive({
    account: '',
    password: ''
})

</script>

<style scoped>
.title:before {
  content: '';
  border-left: 2px solid #000;
  padding: 0 15px;
}
</style>
