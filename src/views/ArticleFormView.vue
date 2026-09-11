<template>
  <div class="min-h-full px-4 py-8">
    <section class="max-w-xl mx-auto">
      <RouterLink
        :to="{name: 'articles.show'}"
        class="inline-flex items-center gap-1.5 text-sm font-medium mb-8 text-muted-foreground"
        @click="toolbarToggle = true"
      >
        <PreviousPageIcon />

        Back to library
      </RouterLink>

      <h1 class="text-3xl font-medium mb-1 font-display text-foreground">Save an article</h1>
      <p class="text-sm mb-8 text-muted-foreground">
        Paste a URL and we will fetch the details automatically.
      </p>

      <form action="/article/new" method="POST">
        <label class="mb-6 inline-block w-full">
          <span
            class="inline-block text-xs font-semibold mb-1.5 uppercase tracking-wide text-muted-foreground"
          >
            Article URL
          </span>
          <input
            type="url"
            class="w-full px-4 py-3 outline-none bg-card border-[1.5px] border-border text-foreground rounded-xl text-sm"
            placeholder="https://example.com/my-article"
            required
          />
        </label>

        <article>
          <div class="rounded-[14px] overflow-hidden mb-6 bg-card border border-border shadow-sm">
            <div class="h-45 bg-muted relative">
              <span
                class="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground"
                >Preview</span
              >
              <img src="#" alt="Article image" class="size-full object-cover" />
            </div>

            <div class="p-4">
              <h2
                class="text-base font-semibold leading-snug font-display mb-1 text-card-foreground"
              >
                Title
              </h2>
              <p class="text-xs leading-relaxed line-clamp-2 text-muted-foreground">
                A growing movement of developers is pushing back against the always-ship culture.
                They argue that thoughtful pacing produces better products, healthier teams, and
                longer-lasting companies.
              </p>

              <p class="text-xs mt-2 text-muted-foreground">n min read</p>
            </div>
          </div>

          <div role="group" aria-label="Article category" class="mb-5">
            <h3 class="text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
              Category
            </h3>

            <div class="flex items-center flex-wrap gap-2">
              <button
                v-for="button in categoryButtonArray"
                :key="button"
                class="cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground first:bg-foreground first:text-background"
              >
                {{ button }}
              </button>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
              Tags
            </h3>

            <div class="mb-2 flex flex-wrap gap-1.5">
              <button class="cursor-pointer inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground">
                #Test

                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 2l6 6M8 2L2 8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="flex gap-2">
              <label class="w-full">
                <input
                  type="text"
                  class="flex-1 w-full px-4 py-2.5 rounded-xl text-sm outline-none bg-card border-[1.5px] border-border text-foreground"
                  placeholder="Add a tag and press Enter"
                />
              </label>

              <button
                class="px-4 py-2.5 rounded-xl text-sm font-semibold bg-secondary text-secondary-foreground cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </article>

        <button
          type="submit"
          class="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-primary cursor-pointer text-primary-foreground disabled:opacity-40 disabled: pointer-events-none"
          disabled
        >
          Paste a URL above to continue
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { modalDisplayKey } from '@/keys.ts'
import PreviousPageIcon from '@/components/icons/PreviousPageIcon.vue'

const route = useRoute()
const toolbarToggle = inject(modalDisplayKey)

if (route.name === 'modal.create') {
  toolbarToggle.value = false
}

const categoryButtonArray = ['Technology', 'Design', 'Science', 'Culture', 'Health', 'Business']
</script>
