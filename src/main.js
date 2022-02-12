import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request,{host} from './utils/request.js'

Vue.config.productionTip = false
import Vant,{Toast} from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Toast);
// import { Tabbar, TabbarItem ,Icon ,NavBar,Toast,Swipe, SwipeItem,
//   Lazyload ,Image as VanImage,Card,Tab, Tabs,Sidebar, SidebarItem ,Col, Row
//   ,RadioGroup, Radio,Checkbox, CheckboxGroup,ActionBar, ActionBarIcon, ActionBarButton} from 'vant';
// Vue.use(Tabbar);
// Vue.use(TabbarItem);
// Vue.use(Icon);
// Vue.use(NavBar);
// Vue.use(Toast);

// Vue.use(Swipe);
// Vue.use(SwipeItem);
// Vue.use(Lazyload);
// Vue.use(VanImage);
// Vue.use(Card);
// Vue.use(Tab);
// Vue.use(Tabs);
// Vue.use(Sidebar);
// Vue.use(SidebarItem);
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(ActionBar);
// Vue.use(ActionBarIcon);
// Vue.use(ActionBarButton);

Vue.prototype.$request = request;
Vue.prototype.$host =host;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
