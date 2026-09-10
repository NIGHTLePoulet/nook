<template>
  <Card>

    <template #card__media>

      <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=380&fit=crop&auto=format" alt="Image of the article"
           class="size-full object-cover "
      />

      <div class="absolute size-2.5 top-3 left-3 rounded-full bg-primary">
      </div>

      <button class="absolute bottom-3 right-3 size-7 rounded-full flex items-center justify-center text-white bg-black/55 opacity-0" title="Delete article">
        <DeleteIcon />
      </button>

    </template>

    <template #card__content>
      <div class="flex items-center justify-between">
        <span
          class="inline-flex items-center rounded-full font-medium px-2 py-0.5 text-xs bg-tag-design-bg text-tag-design-fg"
          >Design</span
        >
        <p class="text-xs text-muted-foreground">n min</p>
      </div>

      <h3 class="text-base font-semibold leading-snug line-clamp-2 font-display text-card-foreground">Title</h3>

      <p class="text-xs leading-relaxed line-clamp-2 text-muted-foreground">
        How type designers are reinventing the typographic palette with axes that bend weight,
        width, and optical size in real time — and why it matters for the open web.
      </p>

      <div class="flex flex-wrap gap-1">
        <span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground cursor-pointer">#web</span>
      </div>

      <div class="flex items-center justify-between pt-1">
        <time class="text-xs text-muted-foreground"> Sep 10, 2026</time>

        <div class="flex items-center gap-1.5">
          <span class="text-xs text-muted-foreground">Unread</span>
          <button class="inline-flex h-6 w-11 relative items-center rounded-full bg-muted" title="Mark as read">
            <span class="inline-block size-4 rounded-full bg-white shadow-sm translate-x-1"></span>
          </button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
</script>
