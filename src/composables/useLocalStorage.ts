import type { Article } from '@/types/article.types.ts'

export function initLocalStorage(): Article[] {
  const articles: string | null = localStorage.getItem('articles')

  if (!articles) {
    localStorage.setItem('articles', '[]')
    return []
  }

  return JSON.parse(articles)
}
