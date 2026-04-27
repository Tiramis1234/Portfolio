<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <AppHeader />
    <main class="min-h-[calc(100vh-160px)]">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
