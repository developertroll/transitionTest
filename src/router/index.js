import { createRouter, createWebHistory } from 'vue-router'
import MainLayoutVue from '../views/MainLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: MainLayoutVue,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
