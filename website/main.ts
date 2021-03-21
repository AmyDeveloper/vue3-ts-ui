import { createApp } from 'vue'
import App from './App.vue'
import YUI from 'y-ui'
import 'theme-chalk/lib/index.css'

createApp(App)
  .use(YUI)
  .mount('#app')