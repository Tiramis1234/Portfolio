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
    red: 'border-[#2e2350] text-[#a78bfa] bg-[#130e24]',
    blue: 'border-[#123a5a] text-[#38bdf8] bg-[#0b1a2a]',
    green: 'border-[#123a3a] text-[#7dd3fc] bg-[#0b1a1f]',
    yellow: 'border-[#3a2e0a] text-[#fbbf24] bg-[#1a1500]'
  }
  return map[props.color] || 'border-[#30363d] text-[#79c0ff] bg-[#161b22]'
})
</script>
