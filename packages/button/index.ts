import { createApp } from '@vue/runtime-dom'
import { App } from 'vue'
import Button from './src/button.vue'
Button.install = (app: App): void=> {
  app.component(Button.name, Button) // 注册全局组件
}

//合并类型 给 component: ReturnType<typeof defineComponent> 加 install 类型
type IWithInstall<T> = T &  { install(app: App):void }
const _Button: IWithInstall<typeof Button> = Button
export default _Button


// createApp({}).use(Button)