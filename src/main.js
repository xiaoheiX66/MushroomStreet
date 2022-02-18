import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request, {
  host
} from './utils/request.js'

Vue.config.productionTip = false
import Vant, {
  Toast,
  Dialog
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.prototype.$request = request;
Vue.prototype.$host = host;
Vue.prototype.$Toast = Toast;
Vue.prototype.$Dialog = Dialog;

// 判断是否登录
router.beforeEach((to, from, next) => {
  let flag = store.getters.isLogin
  if (to.meta.requireAuth == true) {
    if (!flag) {
      Toast.fail('您还未登录!!');
      next({
        path: "/logins"
      })
    } else {
      return next()
    }
  } else {
    return next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')