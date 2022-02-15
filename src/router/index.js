import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Sorts from '../views/Sorts.vue'
// import Carts from '../views/Carts.vue'
// import Mines from '../views/Mines.vue'
// import Details from '../views/Details.vue'
// import Logins from '../views/Logins.vue'
// import Regs from '../views/Regs.vue'

// import NormalHots from '../views/Sorts/NormalHots.vue'
// import Jackets from '../views/Sorts/Jackets.vue'
// import Skirts from '../views/Sorts/Skirts.vue'
// import Pants from '../views/Sorts/Pants.vue'
// import Suits from '../views/Sorts/Suits.vue'
// import WomanShoes from '../views/Sorts/WomanShoes.vue'
// import Baggs from '../views/Sorts/Baggs.vue'
// import ManSkirts from '../views/Sorts/ManSkirts.vue'
// import ManShoes from '../views/Sorts/ManShoes.vue'
// import MotherLadys from '../views/Sorts/MotherLadys.vue'
// import UnderWears from '../views/Sorts/UnderWears.vue'
// import HomeFunish from '../views/Sorts/HomeFunish.vue'
// import RightCatch from '../views/Sorts/RightCatch.vue'


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
    component:()=>import ('../views/Sorts.vue'),
    redirect:{name:"NormalHots"},
    children:[
      {name:"NormalHots",path:"normalhots", component:()=>import ('../views/Sorts/NormalHots.vue'),},
      {path:"jackets",component:()=>import ('../views/Sorts/Jackets.vue')},
      {path:"skirts",component:()=>import ('../views/Sorts/Skirts.vue')},
      {path:"pants",component:()=>import ('../views/Sorts/Pants.vue')},
      {path:"suits",component:()=>import ('../views/Sorts/Suits.vue')},
      {path:"womanshoes",component:()=>import ('../views/Sorts/WomanShoes.vue')},
      {path:"baggs",component:()=>import ('../views/Sorts/Baggs.vue')},
      {path:"manskirts",component:()=>import ('../views/Sorts/ManSkirts.vue')},
      {path:"manshoes",component:()=>import ('../views/Sorts/ManShoes.vue')},
      {path:"motherladys",component:()=>import ('../views/Sorts/MotherLadys.vue')},
      {path:"underwears",component:()=>import ('../views/Sorts/UnderWears.vue')},
      {path:"homefunnishing",component:()=>import ('../views/Sorts/HomeFunish.vue')},
      {path:"rightcatch",component:()=>import ('../views/Sorts/RightCatch.vue')}
    ]
  },
  {
    path: '/mycart',
    name: 'Carts',
    component: ()=>import('../views/Carts.vue'),
    meta:{requireAuth:true}
  },
  {
    path: '/details',
    name: 'Details',
    component: ()=>import('../views/Details.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: ()=>import('../views/Details.vue')
  },
  {
    path: '/logins',
    name: 'Logins',
    component: ()=>import('../views/Logins.vue')
  },
  {
    path: '/regs',
    name: 'Regs',
    component: ()=>import('../views/Regs.vue')
  },
  {
    path: '/mines',
    name: 'Mines',
    component: ()=>import('../views/Mines.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router
