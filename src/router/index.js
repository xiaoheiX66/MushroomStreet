import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sorts from '../views/Sorts.vue'
import Carts from '../views/Carts.vue'
import Mines from '../views/Mines.vue'
import Details from '../views/Details.vue'
import Logins from '../views/Logins.vue'
import Regs from '../views/Regs.vue'

import NormalHots from '../views/Sorts/NormalHots.vue'
import Jackets from '../views/Sorts/Jackets.vue'
import Skirts from '../views/Sorts/Skirts.vue'
import Pants from '../views/Sorts/Pants.vue'
import Suits from '../views/Sorts/Suits.vue'
import WomanShoes from '../views/Sorts/WomanShoes.vue'
import Baggs from '../views/Sorts/Baggs.vue'
import ManSkirts from '../views/Sorts/ManSkirts.vue'
import ManShoes from '../views/Sorts/ManShoes.vue'
import MotherLadys from '../views/Sorts/MotherLadys.vue'
import UnderWears from '../views/Sorts/UnderWears.vue'
import HomeFunish from '../views/Sorts/HomeFunish.vue'
import RightCatch from '../views/Sorts/RightCatch.vue'


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
    component:Sorts,
    redirect:{name:"NormalHots"},
    children:[
      {name:"NormalHots",path:"normalhots",component:NormalHots},
      {path:"jackets",component:Jackets},
      {path:"skirts",component:Skirts},
      {path:"pants",component:Pants},
      {path:"suits",component:Suits},
      {path:"womanshoes",component:WomanShoes},
      {path:"baggs",component:Baggs},
      {path:"manskirts",component:ManSkirts},
      {path:"manshoes",component:ManShoes},
      {path:"motherladys",component:MotherLadys},
      {path:"underwears",component:UnderWears},
      {path:"homefunnishing",component:HomeFunish},
      {path:"rightcatch",component:RightCatch}
    ]
  },
  {
    path: '/mycart',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/logins',
    name: 'Logins',
    component: Logins
  },
  {
    path: '/regs',
    name: 'Regs',
    component: Regs
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
