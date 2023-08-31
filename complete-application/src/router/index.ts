import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useFusionAuth} from "@fusionauth/vue-sdk";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        const fusionAuth = useFusionAuth();
        if (fusionAuth.isLoggedIn()) {
          return '/account';
        }
      }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
      beforeEnter: () => {
        const fusionAuth = useFusionAuth();
        if (!fusionAuth.isLoggedIn()) {
          return '/';
        }
      }
    },
    {path: '/:pathMatch(.*)*', redirect: '/'},
  ]
})

export default router
