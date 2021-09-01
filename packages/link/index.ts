import { App } from 'vue'
import Link from './src/Link.vue'

Link.install = (app: App) => {
  app.component(Link.name, Link)
}

type IWithInstall<T> = T & { install(app: App): void}
const _Link: IWithInstall<typeof Link> = Link

export default _Link