<script setup>
import {useCountStore} from '@/store/count'
import {storeToRefs} from 'pinia'

defineProps({
    msg: String
})

const { count } = storeToRefs(useCountStore())

</script>

<template>
<div>
  <h1>{{ msg }}</h1>
  <h1>{{count}}</h1>
  <button @click="count++">+1</button>
</div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
