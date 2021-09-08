const Input = () => import(/* webpackChunkName: "input" */ '../pages/form/form-com/Input.vue')

const formRoutes = [
  {
    path: '/input',
    component: Input,
    name: 'Input',
  }
]

export default formRoutes