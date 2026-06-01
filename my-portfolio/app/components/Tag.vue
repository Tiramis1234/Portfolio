<template>
  <span class="inline-block border text-[11px] px-2 py-[1px] rounded mx-0.5" :class="tagClass">{{ text }}</span>
</template>

<script setup>
const props = defineProps({
  text: String,
  color: { type: String, default: '' }
})

const tagClass = computed(() => {
  const map = {
    red: 'border-[#3d1f1f] text-[#ff6b6b] bg-[#1a0e0e]',
    green: 'border-[#1a3a1a] text-[#56d364] bg-[#0e1a0e]',
    yellow: 'border-[#3a2e0a] text-[#ffd866] bg-[#1a1500]'
  }
  return map[props.color] || 'border-[#30363d] text-[#79c0ff] bg-[#161b22]'
})
</script>
