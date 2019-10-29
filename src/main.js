import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Default from './layouts/Default'
import Empty from './layouts/Empty'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI);

Vue.component('default-layout', Default);
Vue.component('empty-layout', Empty);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
