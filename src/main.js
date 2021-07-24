import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router/index.js';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';

Vue.component(Button.name, Button);
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
