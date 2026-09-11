<template>
  <div class="flex items-baseline justify-between mb-5">
    <p class="text-xs text-muted-foreground">n articles</p>
    <p class="text-xs text-muted-foreground">Page n of n</p>
  </div>

  <div class="grid grid-cols-1 gap-5">
    <ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard /><ArticleCard />
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/Card/ArticleCard.vue'
</script>
