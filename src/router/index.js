import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/loteria',
      name: 'lottery',
      component: () => import('../views/lottery.vue'),
    },
    {
      path: '/login_bomberos',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },{
      path: '/inicio_de_sesion',
      name: 'access',
      // component: Access,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'eventos',
          name: 'event',
          component: () => import('../views/navigation/Event.vue'),
        },
        {
          path: 'noticias',
          name: 'news',
          component: () => import('../views/navigation/News.vue'),
        },
        {
          path: 'ganador_boleta',
          name: 'winningTicket',
          component: () => import('../views/navigation/WinningTicket.vue'),
        }, 
        {
          path: 'usuarios',
          name: 'users',
          component: () => import('../views/navigation/users.vue'),
        },

      ]
    },
    
   
  ]
})

export default router
