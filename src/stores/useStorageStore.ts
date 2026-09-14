import { defineStore } from 'pinia'
import type { Article } from '@/types/article.types'

export const useStorageStore = defineStore('storage', {
  state: () => {
    return {
      articles: [] as Article[]
    }
  }
})
