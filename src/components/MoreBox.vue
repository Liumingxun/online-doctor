<template>
  <div>
    <div ref="s" class="overflow-hidden"><slot /></div>
    <div v-if="toggle" class="text-center cursor-pointer hover:font-bold" @click="moreHandler">&downdownarrows; 点我展开更多 &downdownarrows;</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const p = defineProps({
    maxHeight: {
        type: Number,
        default: 200,
        required: false
    }
})

const s = ref(null)
const toggle = ref(false)

const moreHandler = () => {
    toggle.value = !toggle.value
    console.log(s.value.style.height = `${s.value.firstElementChild.getBoundingClientRect().height}px`)
}

onMounted(() => {
    const rect = s.value.getBoundingClientRect()
    console.log(rect.height)
    if (p.maxHeight < rect.height) {
        toggle.value = true
        s.value.style.height = `${p.maxHeight}px`
    }
})


</script>

<style scoped>

</style>
