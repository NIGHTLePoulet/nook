<template>
  <AppHeader :class="{'border-b border-b-border': route.name === 'modal.create'}"/>
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
import { useRoute } from 'vue-router'

const toolbarToggle = ref(true)

provide(modalDisplayKey, toolbarToggle)

const route = useRoute()
console.log(route)
</script>
