import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
