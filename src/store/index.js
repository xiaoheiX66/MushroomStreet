import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let extradata = window.localStorage.getItem("extradata")
try {
  extradata = JSON.parse(extradata) || []
} catch (err) {
  extradata = []
}
let userinfo = window.sessionStorage.getItem("userinfo")
try {
  userinfo = JSON.parse(userinfo) || {}
} catch (err) {
  userinfo = {}
}
let cartlists = window.localStorage.getItem("cartData")
try {
  cartlists = JSON.parse(cartlists) || []
} catch (err) {
  cartlists = []
}

export default new Vuex.Store({
  state: {
    extradata,
    userinfo,
    cartlists
  },
  getters: {
    isLogin(state) {
      return !!state.userinfo.id
    }
  },
  mutations: {
    isLogins(state, payload) {
      state.userinfo = payload;
      window.sessionStorage.setItem("userinfo", JSON.stringify(state.userinfo))
    },
    loginOut(state) {
      state.userinfo = {}
      window.sessionStorage.removeItem("userinfo")
    },
    // 添加购物车
    addToCart(state, payload) {
      state.cartlists.unshift(payload)
      window.localStorage.setItem("cartData", JSON.stringify(state.cartlists))
    },
    // 检验传过来的数据并进行更正修改数量
    modifyqty(state, payload) {
      console.log("前端传过来的校验", payload);
      state.cartlists.forEach((item) => {
        if (item._id === payload.id) {
          item.qty = payload.qty;
        }
        window.localStorage.setItem("cartData", JSON.stringify(state.cartlists))
      })
    },
    // 处理当前要删除的商品
    removeFromCart(state, payload) {
      console.log("前面删除传过来的id值", payload);
      state.cartlists = state.cartlists.filter(item => item._id != payload)
      window.localStorage.setItem("cartData", JSON.stringify(state.cartlists))
    }
  },
  actions: {
    async addToCarts() {

    }
  },
  modules: {}
})