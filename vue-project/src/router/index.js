import { createRouter, createWebHistory } from 'vue-router'


import AppHome from "../components/AppHome.vue";
import AppRegister from "../components/AppRegister.vue";
import AppLogin from "../components/AppLogin.vue";
import AppCart from "../components/AppCart.vue";
import AppOrders from "../components/AppOrders.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister,
    },
    {
      path: '/orders',
      name: 'orders',
      component: AppOrders,
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart,
    },
  ]
})

export default router
