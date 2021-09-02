import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/common.scss';
import './assets/styles/fonts/style.css';
import YUI from 'y-ui'
import 'theme-chalk/src/index.scss'

createApp(App)
  .use(YUI)
  .use(router)
  .mount('#app')