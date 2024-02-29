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
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/customer/profileView.vue')
        },
        {
          path: 'request/edit/:type/:idx',
          name: 'requestEdit',
          component: () => import('../views/customer/requestEdit.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/contact/contactLayout.vue')
        },
        {
          path: 'contact-history',
          name: 'contact-history',
          component: () => import('../views/contact/finishedCview.vue')
        },
        {
          path: 'contact-admin',
          name: 'contact-admin',
          component: () => import('../views/admin/allocateLayout.vue')
        },
        {
          path: 'answer',
          name: 'answer',
          component: () => import('../views/admin/answerPageLayout.vue'),
          children: [
            {
              path: '',
              name: 'answerTable',
              component: () => import('@/components/admin/adminContactTable.vue')
            },
            {
              path: ':idx',
              name: 'answerForm',
              component: () => import('../views/admin/answerLayout.vue')
            }
          ]
        },
        {
          path: 'management',
          name: 'management',
          component: () => import('../views/admin/management/managementView.vue')
        },
        {
          path: 'data',
          name: 'board',
          component: () => import('../views/admin/board/boardLayout.vue'),
          children: [
            {
              path: '',
              name: 'boardTable',
              component: () => import('@/components/admin/board/boardTable.vue')
            },
            {
              path: 'write',
              name: 'boardWrite',
              component: () => import('@/components/admin/board/boardWrite.vue')
            },
            {
              path: 'view/:idx',
              name: 'boardView',
              component: () => import('@/components/admin/board/boardView.vue')
            },
            {
              path: 'edit/:idx',
              name: 'boardUpdate',
              component: () => import('@/components/admin/board/boardUpdate.vue')
            }
          ]
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
