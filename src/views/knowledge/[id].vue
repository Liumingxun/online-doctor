<template>
<div>{{route.params}}</div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()

const router =useRouter()
router.push({})
</script>

<style scoped>

</style>
