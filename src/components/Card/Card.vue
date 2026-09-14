<template>
  <article
    class="rounded-[14px] overflow-hidden flex flex-col bg-card border border-border shadow-sm"
  >
    <div class="relative overflow-hidden h-45 bg-muted">
      <slot name="card__media"></slot>
    </div>

    <div class="flex flex-col flex-1 p-4 gap-2">
      <slot name="card__content"></slot>
    </div>
  </article>
</template>
