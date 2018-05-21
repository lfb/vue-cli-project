import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VueLocalStorage from 'vue-ls';

Vue.config.productionTip = false
Vue.use(VueLocalStorage);

router.beforeEach((to, from, next) => {
  // 路由进入需要做什么
  console.log('beforeEach..');
});

router.afterEach(() => {
  console.log('afterEach..');
});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
