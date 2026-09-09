import { createRouter, createWebHistory } from 'vue-router'
import ArticleFormView from '@/views/ArticleFormView.vue'
import ArticlesView from '@/views/ArticlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/article/new', name: 'modal.create', component: ArticleFormView },
    { path: '/articles', name: 'articles.show', component: ArticlesView },
  ],
})

export default router
