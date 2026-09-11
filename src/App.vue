<template>
  <AppHeader :class="{ 'border-b border-b-border': route.name === 'modal.create' }" />
  <ArticleToolbar v-if="toolbarToggle" />
  <main :class="{ 'px-4 py-8 flex-1 md:px-8': route.name === 'articles.show' }">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ArticleToolbar from '@/components/layout/ArticleToolbar.vue'
import { provide, ref } from 'vue'
import { modalDisplayKey } from '@/keys.ts'
import { useRoute } from 'vue-router'

const toolbarToggle = ref(true)

provide(modalDisplayKey, toolbarToggle)

const route = useRoute()
</script>
