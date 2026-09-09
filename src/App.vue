<template>
  <AppHeader />
  <ArticleToolbar v-if="toolbarToggle" />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ArticleToolbar from '@/components/ArticleToolbar.vue'
import { provide, ref } from 'vue'
import { modalDisplayKey } from '@/keys.ts'

const toolbarToggle = ref(true)

provide(modalDisplayKey, toolbarToggle)
</script>
