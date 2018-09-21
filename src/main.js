import Vue from 'vue'
import App from './App'
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);

new Vue({
  el: '#app',
  render: h => h(App)
})