import { createRouter, createWebHistory } from 'vue-router'
import basicRoutes from './basic'
import formRoutes from './form'

const Home = () => import(/* webpackChunkName: "home" */ '../pages/Index.vue')


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: '',
    },
    ...basicRoutes,
    ...formRoutes
  ]
})

export default router