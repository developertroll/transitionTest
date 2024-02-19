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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/loginLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/login/selectLogin.vue')
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('../views/login/customerLogin.vue')
        },
        {
          path: 'admin',
          name: 'admin',
          component: () => import('../views/login/adminLogin.vue')
        }
      ]
    }
  ]
})

// router.beforeEach((to) => {
//   const store = useIsLoggedInStore()
//   // login children들은 store만 체크
//   if (!store.isLoggedIn && !to.path.includes('login')) {
//     return '/login'
//   }
// })

export default router
