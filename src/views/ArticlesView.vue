<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-baseline justify-between mb-5">
      <p class="text-xs text-muted-foreground">n articles</p>
      <p class="text-xs text-muted-foreground">Page n of n</p>
    </div>

    <div id="display-cards" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/Card/ArticleCard.vue'
import { getOgMetadata } from '@/services/ogService.ts'
import { onMounted } from 'vue'
import { useStorageStore } from '@/stores/useStorageStore.ts'

const store = useStorageStore()

/*onMounted(async () => {
  const data = await getOgMetadata('https://example.com/article-2')
  console.log(data)
})*/
</script>
