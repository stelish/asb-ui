import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Default from './layout/Default.vue';
import NoSideBar from './layout/NoSideBar.vue';

Vue.config.productionTip = false;

Vue.component('default-layout', Default);
Vue.component('no-sidebar-layout', NoSideBar);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
