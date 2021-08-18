import Button from '@y-ui/button'; //(import Button from '../button';)通过yarn i 生成软链
import Icon from '@y-ui/icon';
import ButtonGroup from '@y-ui/button-group';
import { App } from 'vue';


const components = [
  Button,
  Icon,
  ButtonGroup,
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 使用组件库是可以 createApp().use(xxx)
export default {
  install
}