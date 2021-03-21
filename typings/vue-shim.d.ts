
/* 声明.vue模块，并导出组件同时定义组件类型为 defineComponent 函数类型的返回类型 */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & { install(app: App): void }
  export default component
}

