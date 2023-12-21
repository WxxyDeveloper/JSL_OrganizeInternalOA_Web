import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component:() => import('../components/index.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../components/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../components/register.vue')
    },
    {
      path:'/success',
      name:'success',
      component:()=>import('../components/success.vue')
    }
  ]
})

export default router
