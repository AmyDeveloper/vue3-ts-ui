import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './pages/Index.vue')
const Button = () => import(/* webpackChunkName: "button" */ './pages/Button.vue')
const Icon = () => import(/* webpackChunkName: "icon" */ './pages/Icon.vue')
const Layout = () => import(/* webpackChunkName: "layout" */ './pages/Layout.vue')
const Link = () => import(/* webpackChunkName: "link" */ './pages/Link.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/button',
      component: Button,
      name: 'Button',
    },
    {
      path: '/icon',
      component: Icon,
      name: 'Icon',
    },
    {
      path: '/layout',
      component: Layout,
      name: 'Layout',
    },
    {
      path: '/link',
      component: Link,
      name: 'Link',
    }
  ]
})

export default router