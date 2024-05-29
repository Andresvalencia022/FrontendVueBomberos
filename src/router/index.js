import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/HomeView.vue'
import Cookies from 'js-cookie';
import { useRoute } from "vue-router";
import APIService from '../services/APIService'

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

router.beforeEach(async (to, from, next) =>{
const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

if (!requiresAuth){
  next();
  return;
}

try {
  const token = Cookies.get('AUTH-TOKEN')
  if (!token) {
    next('/login_bomberos');
    return;
  }

  const { data } = await APIService.verifyUser(token);
  if (!data) {
    next('/login_bomberos');
    return;
  }

  next();

} catch (error) {
  next('/login_bomberos');
}

});


export default router
