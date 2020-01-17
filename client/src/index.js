import Vue from 'vue';
import App from './app.vue'
import router from '../route/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { store } from '../store'


Vue.use(ElementUI);
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
console.log(1111111111111)