import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/HomeView.vue'
import Cookies from 'js-cookie';
import { useRoute } from "vue-router";
import APIService from '../services/APIService'
import { UseUserStore } from '../stores/UseUserStore'


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
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
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
  const UserStore = UseUserStore()
  const { data } = await APIService.verifyUser(token);
  if (!data) {
    next('/login_bomberos');
    return;
  }
  //  Asigna los datos del usuario a objectUser en useUserStore
   UserStore.objectUser.id = data.user.id
   UserStore.objectUser.name = data.user.name
   UserStore.objectUser.last_name = data.user.last_name
   UserStore.objectUser.phone = data.user.phone
   UserStore.objectUser.email = data.user.email
   UserStore.objectUser.state = data.user.state

  next();

} catch (error) {
  next('/login_bomberos');
}
});

export default router
