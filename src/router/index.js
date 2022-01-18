import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sorts from '../views/Sorts.vue'
import Carts from '../views/Carts.vue'
import Mines from '../views/Mines.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sorts',
    name: 'Sorts',
    component:Sorts
  },
  {
    path: '/mycart',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/mines',
    name: 'Mines',
    component: Mines
  },
]

const router = new VueRouter({
  routes
})

export default router
