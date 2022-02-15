"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Sorts.vue'));
    });
  },
  redirect: {
    name: "NormalHots"
  },
  children: [{
    name: "NormalHots",
    path: "normalhots",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/NormalHots.vue'));
      });
    }
  }, {
    path: "jackets",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/Jackets.vue'));
      });
    }
  }, {
    path: "skirts",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/Skirts.vue'));
      });
    }
  }, {
    path: "pants",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/Pants.vue'));
      });
    }
  }, {
    path: "suits",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/Suits.vue'));
      });
    }
  }, {
    path: "womanshoes",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/WomanShoes.vue'));
      });
    }
  }, {
    path: "baggs",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/Baggs.vue'));
      });
    }
  }, {
    path: "manskirts",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/ManSkirts.vue'));
      });
    }
  }, {
    path: "manshoes",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/ManShoes.vue'));
      });
    }
  }, {
    path: "motherladys",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/MotherLadys.vue'));
      });
    }
  }, {
    path: "underwears",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/UnderWears.vue'));
      });
    }
  }, {
    path: "homefunnishing",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/HomeFunish.vue'));
      });
    }
  }, {
    path: "rightcatch",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Sorts/RightCatch.vue'));
      });
    }
  }]
}, {
  path: '/mycart',
  name: 'Carts',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Carts.vue'));
    });
  },
  meta: {
    requireAuth: true
  }
}, {
  path: '/details',
  name: 'Details',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Details.vue'));
    });
  }
}, {
  path: '/details/:id',
  name: 'Details',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Details.vue'));
    });
  }
}, {
  path: '/logins',
  name: 'Logins',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Logins.vue'));
    });
  }
}, {
  path: '/regs',
  name: 'Regs',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Regs.vue'));
    });
  }
}, {
  path: '/mines',
  name: 'Mines',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Mines.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;