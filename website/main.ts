import { createApp } from 'vue'
import App from './App.vue'
import YUI from 'y-ui'
import 'theme-chalk/src/index.scss'

createApp(App)
  .use(YUI)
  .mount('#app')