import { App } from 'vue'

import Col from './src/col'

Col.install = (app: App) => {
  app.component(Col.name, Col)
}

type IWithInstall<T> = T & { install(app: App): void}
const _Col = Col as IWithInstall<typeof Col>
export default _Col