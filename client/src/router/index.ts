import { createRouter, createWebHistory } from 'vue-router'
import { doesSessionExist } from 'supertokens-web-js/recipe/session'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { PUBLIC_ROUTES } from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('../views/LoginView.vue')
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

router.beforeEach(async (to, _from) => {
  if (PUBLIC_ROUTES.has(String(to.name)) || (await doesSessionExist())) {
    return true
  }
  return { name: 'login' }
})

export default router
