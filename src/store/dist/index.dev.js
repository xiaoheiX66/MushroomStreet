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
      console.log("前端传过来的校验", payload);
      state.cartlists.forEach(function (item) {
        if (item._id === payload.id) {
          item.qty = payload.qty;
        }

        localStorage.setItem("cartData", JSON.stringify(state.cartlists));
      });
    },
    // 处理当前要删除的商品
    removeFromCart: function removeFromCart(state, payload) {
      console.log("前面删除传过来的id值", payload);
      state.cartlists = state.cartlists.filter(function (item) {
        return item._id != payload;
      });
      localStorage.setItem("cartData", JSON.stringify(state.cartlists));
    }
  },
  actions: {
    addToCarts: function addToCarts() {
      return regeneratorRuntime.async(function addToCarts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  modules: {}
});

exports["default"] = _default;