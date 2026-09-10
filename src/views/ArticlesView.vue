<template>
  <div class="flex items-baseline justify-between mb-5">
    <p class="text-xs text-muted-foreground">n articles</p>
    <p class="text-xs text-muted-foreground">Page n of n</p>
  </div>

  <ArticleCard />
</template>

<script setup lang="ts">
import ArticleCard from '@/components/Card/ArticleCard.vue'
</script>
