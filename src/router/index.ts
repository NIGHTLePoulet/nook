import { createRouter, createWebHistory } from 'vue-router'
import ModalView from '@/views/ModalView.vue'
import ArticlesView from '@/views/ArticlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/article/new', name: 'modal.create', component: ModalView },
    { path: '/articles', name: 'articles.show', component: ArticlesView },
  ],
})

export default router
