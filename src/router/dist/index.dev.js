"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Sorts = _interopRequireDefault(require("../views/Sorts.vue"));

var _Carts = _interopRequireDefault(require("../views/Carts.vue"));

var _Mines = _interopRequireDefault(require("../views/Mines.vue"));

var _Details = _interopRequireDefault(require("../views/Details.vue"));

var _NormalHots = _interopRequireDefault(require("../views/Sorts/NormalHots.vue"));

var _Jackets = _interopRequireDefault(require("../views/Sorts/Jackets.vue"));

var _Skirts = _interopRequireDefault(require("../views/Sorts/Skirts.vue"));

var _Pants = _interopRequireDefault(require("../views/Sorts/Pants.vue"));

var _Suits = _interopRequireDefault(require("../views/Sorts/Suits.vue"));

var _WomanShoes = _interopRequireDefault(require("../views/Sorts/WomanShoes.vue"));

var _Baggs = _interopRequireDefault(require("../views/Sorts/Baggs.vue"));

var _ManSkirts = _interopRequireDefault(require("../views/Sorts/ManSkirts.vue"));

var _ManShoes = _interopRequireDefault(require("../views/Sorts/ManShoes.vue"));

var _MotherLadys = _interopRequireDefault(require("../views/Sorts/MotherLadys.vue"));

var _UnderWears = _interopRequireDefault(require("../views/Sorts/UnderWears.vue"));

var _HomeFunish = _interopRequireDefault(require("../views/Sorts/HomeFunish.vue"));

var _RightCatch = _interopRequireDefault(require("../views/Sorts/RightCatch.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/home',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/sorts',
  name: 'Sorts',
  component: _Sorts["default"],
  redirect: {
    name: "NormalHots"
  },
  children: [{
    name: "NormalHots",
    path: "normalhots",
    component: _NormalHots["default"]
  }, {
    path: "jackets",
    component: _Jackets["default"]
  }, {
    path: "skirts",
    component: _Skirts["default"]
  }, {
    path: "pants",
    component: _Pants["default"]
  }, {
    path: "suits",
    component: _Suits["default"]
  }, {
    path: "womanshoes",
    component: _WomanShoes["default"]
  }, {
    path: "baggs",
    component: _Baggs["default"]
  }, {
    path: "manskirts",
    component: _ManSkirts["default"]
  }, {
    path: "manshoes",
    component: _ManShoes["default"]
  }, {
    path: "motherladys",
    component: _MotherLadys["default"]
  }, {
    path: "underwears",
    component: _UnderWears["default"]
  }, {
    path: "homefunnishing",
    component: _HomeFunish["default"]
  }, {
    path: "rightcatch",
    component: _RightCatch["default"]
  }]
}, {
  path: '/mycart',
  name: 'Carts',
  component: _Carts["default"]
}, {
  path: '/details',
  name: 'Details',
  component: _Details["default"]
}, {
  path: '/details/:id',
  name: 'Details',
  component: _Details["default"]
}, {
  path: '/mines',
  name: 'Mines',
  component: _Mines["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;