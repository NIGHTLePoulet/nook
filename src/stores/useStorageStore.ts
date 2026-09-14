import { defineStore } from 'pinia'
import type { Article } from '@/types/article.types'
import { initLocalStorage } from '@/composables/useLocalStorage.ts'

export const useStorageStore = defineStore('storage', {
  state: () => {
    return {
      articles: initLocalStorage(),
    }
  },
})
