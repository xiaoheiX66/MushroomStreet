"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var extradata = localStorage.getItem("extradata");

try {
  extradata = JSON.parse(extradata) || [];
} catch (err) {
  extradata = [];
}

var userinfo = localStorage.getItem("userinfo");

try {
  userinfo = JSON.parse(userinfo) || {};
} catch (err) {
  userinfo = {};
}

var cartlists = localStorage.getItem("cartData");

try {
  cartlists = JSON.parse(cartlists) || [];
} catch (err) {
  cartlists = [];
}

var _default = new _vuex["default"].Store({
  state: {
    extradata: extradata,
    userinfo: userinfo,
    cartlists: cartlists
  },
  getters: {
    isLogin: function isLogin(state) {
      return !!state.userinfo.id;
    }
  },
  mutations: {
    isLogins: function isLogins(state, payload) {
      state.userinfo = payload;
      localStorage.setItem("userinfo", JSON.stringify(state.userinfo));
    },
    loginOut: function loginOut(state) {
      state.userinfo = {};
      localStorage.removeItem("userinfo");
    },
    // 添加购物车
    addToCart: function addToCart(state, payload) {
      state.cartlists.unshift(payload);
      localStorage.setItem("cartData", JSON.stringify(state.cartlists));
    },
    // 检验传过来的数据并进行更正修改数量
    modifyqty: function modifyqty(state, payload) {
      state.cartlists.forEach(function (item) {
        if (item._id === payload.id) {
          item.qty = payload.qty;
        }

        localStorage.setItem("cartData", JSON.stringify(state.cartlists));
      });
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;