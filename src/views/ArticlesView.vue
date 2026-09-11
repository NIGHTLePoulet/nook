<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-baseline justify-between mb-5">
      <p class="text-xs text-muted-foreground">n articles</p>
      <p class="text-xs text-muted-foreground">Page n of n</p>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/Card/ArticleCard.vue'
</script>
