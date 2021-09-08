const Button = () => import(/* webpackChunkName: "button" */ '../pages/basic/basic-com/Button.vue')
const Icon = () => import(/* webpackChunkName: "icon" */ '../pages/basic/basic-com/Icon.vue')
const Layout = () => import(/* webpackChunkName: "layout" */ '../pages/basic/basic-com/Layout.vue')
const Link = () => import(/* webpackChunkName: "link" */ '../pages/basic/basic-com/Link.vue')

const basicRoutes = [
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

export default basicRoutes