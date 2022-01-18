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
  component: _Sorts["default"]
}, {
  path: '/mycart',
  name: 'Carts',
  component: _Carts["default"]
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