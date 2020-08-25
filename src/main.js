import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Resume from "./pages/Resume";
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.config.productionTip = false;


const routes = [
  { path: '/', component: Resume, alias: '/resume' },
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
