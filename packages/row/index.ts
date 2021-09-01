import { App } from 'vue'

import Row from './src/row'

Row.install = (app: App) => {
  app.component(Row.name, Row)
}

type IWithInstall<T> = T & { install(app: App): void}
const _Row = Row as IWithInstall<typeof Row>
export default _Row
