import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let extradata = localStorage.getItem("extradata")
try{
  extradata = JSON.parse(extradata) || []
}catch(err){
  extradata =[]
}
let userinfo = localStorage.getItem("userinfo")
try{
  userinfo = JSON.parse(userinfo) || {}
}catch(err){
  userinfo = {}
}
let cartlists = localStorage.getItem("cartData")
try{
  cartlists = JSON.parse(cartlists) || []
}catch(err){
  cartlists = []
}

export default new Vuex.Store({
  state: {
    extradata,
    userinfo,
    cartlists
  },
  getters:{
    isLogin(state){
      return !!state.userinfo.id
    }
  },
  mutations: {
    isLogins(state,payload){
      state.userinfo = payload;
      localStorage.setItem("userinfo",JSON.stringify(state.userinfo))
    },
    loginOut(state){
      state.userinfo = {}
      localStorage.removeItem("userinfo")
    },
    // 添加购物车
    addToCart(state,payload){
      state.cartlists.unshift(payload)
      localStorage.setItem("cartData",JSON.stringify(state.cartlists))
    },
    // 检验传过来的数据并进行更正修改数量
    modifyqty(state,payload){
      state.cartlists.forEach((item)=>{
        if(item._id===payload.id){
          item.qty=payload.qty;
        }
        localStorage.setItem("cartData",JSON.stringify(state.cartlists))
      })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
