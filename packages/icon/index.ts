import { App } from 'vue'
import Icon from './src/Icon.vue'
Icon.install = (app: App): void=> {
  app.component(Icon.name, Icon)
}

type IWithInstall<T> = T & { install(app: App): void}

const _Icon: IWithInstall<typeof Icon> = Icon
export default _Icon