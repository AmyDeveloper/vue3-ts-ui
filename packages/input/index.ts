import { App } from 'vue'

import Input from './src/Input.vue'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}

type IWithInstall<T> = T & { install(app: App): void}
const _Input: IWithInstall<typeof Input> = Input
export default _Input