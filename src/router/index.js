import { createRouter, createWebHistory } from 'vue-router'
import MainLayoutVue from '../views/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import { useIsLoggedInStore } from '../stores/isLoggedIn'
import { useToast } from '@/composables/toastC'

const toast = useToast()

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
        },
        {
          path: 'profile',
          component: () => import('../views/customer/profileView.vue')
        },
        {
          path: 'request/edit/:type/:idx',
          component: () => import('../views/customer/requestEdit.vue')
        },
        {
          path: 'contact',
          component: () => import('../views/contact/contactLayout.vue')
        },
        {
          path: 'contact-history',
          component: () => import('../views/contact/finishedCview.vue')
        },
        {
          path: 'contact-admin',
          component: () => import('../views/admin/allocateLayout.vue')
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
      ],
      beforeEnter: (to, from, next) => {
        const store = useIsLoggedInStore()
        console.log(store)
        if (store.isLoggedIn) {
          toast.sendToast('error', 'alreadyLogin')
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/redirectPage.vue')
    }
    // {
    //   path: '/test2/:type/:idx',
    //   name: 'test2',
    //   component: () => import('../views/customer/requestEdit.vue')
    // }
  ]
})

// /contact에서 다른곳으로 이동할때 경고창(작성중인 내용이 있을때) 띄우기
// router.beforeEach((to, from, next) => {
//   if (from.path === '/contact') {
//     if (confirm('작성중인 내용이 있습니다. 정말로 이동하시겠습니까?')) {
//       next()
//     } else {
//       next(false)
//     }
//   } else {
//     next()
//   }
// })
export default router
