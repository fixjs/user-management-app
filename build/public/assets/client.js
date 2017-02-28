webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(88);
/* harmony export (immutable) */ __webpack_exports__["getUserGroupsRequest"] = getUserGroupsRequest;
/* harmony export (immutable) */ __webpack_exports__["getUserGroupsSuccess"] = getUserGroupsSuccess;
/* harmony export (immutable) */ __webpack_exports__["getGroupUsersRequest"] = getGroupUsersRequest;
/* harmony export (immutable) */ __webpack_exports__["getGroupUsersSuccess"] = getGroupUsersSuccess;
/* harmony export (immutable) */ __webpack_exports__["getGroupUsersFailure"] = getGroupUsersFailure;
/* harmony export (immutable) */ __webpack_exports__["getUserGroupsFailure"] = getUserGroupsFailure;
/* harmony export (immutable) */ __webpack_exports__["createUserGroupRequest"] = createUserGroupRequest;
/* harmony export (immutable) */ __webpack_exports__["createUserGroupSuccess"] = createUserGroupSuccess;
/* harmony export (immutable) */ __webpack_exports__["createUserGroupFailure"] = createUserGroupFailure;
/* harmony export (immutable) */ __webpack_exports__["removeUserGroupsRequest"] = removeUserGroupsRequest;
/* harmony export (immutable) */ __webpack_exports__["removeUserGroupsSuccess"] = removeUserGroupsSuccess;
/* harmony export (immutable) */ __webpack_exports__["removeUserGroupsFailure"] = removeUserGroupsFailure;
/* harmony export (immutable) */ __webpack_exports__["loadUserGroups"] = loadUserGroups;
/* harmony export (immutable) */ __webpack_exports__["createUserGroup"] = createUserGroup;
/* harmony export (immutable) */ __webpack_exports__["removeSelectedUserGroups"] = removeSelectedUserGroups;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




function getUserGroupsRequest() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* GET_USER_GROUPS_REQUEST */]
  };
}

function getUserGroupsSuccess(list) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* GET_USER_GROUPS_SUCCESS */],
    payload: {
      list: list
    }
  };
}

function getGroupUsersRequest(name) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* GET_GROUP_USERS_REQUEST */],
    payload: {
      name: name
    }
  };
}

function getGroupUsersSuccess(name, list) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* GET_GROUP_USERS_SUCCESS */],
    payload: {
      name: name,
      list: list
    }
  };
}

function getGroupUsersFailure(name, error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* GET_GROUP_USERS_FAILURE */],
    payload: {
      name: name,
      error: error
    }
  };
}

function getUserGroupsFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* GET_USER_GROUPS_FAILURE */],
    payload: {
      error: error
    }
  };
}

function createUserGroupRequest(newGroup) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* CREATE_USER_GROUP_REQUEST */],
    payload: {
      newGroup: newGroup
    }
  };
}

function createUserGroupSuccess(newGroup) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* CREATE_USER_GROUP_SUCCESS */],
    payload: {
      newGroup: newGroup
    }
  };
}

function createUserGroupFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* CREATE_USER_GROUP_FAILURE */],
    payload: {
      error: error
    }
  };
}

function removeUserGroupsRequest(selectedUserGroups) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* REMOVE_USER_GROUPS_REQUEST */],
    payload: {
      selectedUserGroups: selectedUserGroups
    }
  };
}

function removeUserGroupsSuccess() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* REMOVE_USER_GROUPS_SUCCESS */]
  };
}

function removeUserGroupsFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["l" /* REMOVE_USER_GROUPS_FAILURE */],
    payload: {
      error: error
    }
  };
}

function loadUserGroups() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var list;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(getUserGroupsRequest());
              _context.prev = 1;
              _context.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["a" /* getUserGroups */]();

            case 4:
              list = _context.sent;

              dispatch(getUserGroupsSuccess(list));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              dispatch(getUserGroupsFailure(_context.t0));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function createUserGroup(name) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var newGroup;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(createUserGroupRequest({ name: name }));
              _context2.prev = 1;
              _context2.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["b" /* createUserGroup */](name);

            case 4:
              newGroup = _context2.sent;

              dispatch(createUserGroupSuccess(newGroup));
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              dispatch(createUserGroupFailure(_context2.t0));

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function removeSelectedUserGroups(selectedUserGroups) {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(removeUserGroupsRequest(selectedUserGroups));
              _context3.prev = 1;
              _context3.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["c" /* removeUserGroups */](selectedUserGroups);

            case 4:
              dispatch(removeUserGroupsSuccess());
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](1);

              dispatch(removeUserGroupsFailure(_context3.t0));

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 7]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_mdl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var title = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a.logo, src: '/logo.png', alt: 'InterNations', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Layout"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Header"],
          { transparent: true, title: title, style: { color: 'black', background: '#203049' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Navigation"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              'Home'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/groups', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              'Groups'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/users', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              'Users'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Drawer"],
          { style: { background: '#222d32', color: '#fff' }, title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Navigation"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: this
              },
              'Home'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/groups', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              'Groups'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
              { to: '/users', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              'Users'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_mdl__["Content"],
          { style: { background: '#ecf0f5' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          this.props.children
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(216);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['to', 'children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        _extends({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};


/* harmony default export */ __webpack_exports__["a"] = Link;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* unused harmony export Headers */
/* unused harmony export Request */
/* unused harmony export Response */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* harmony default export */ __webpack_exports__["a"] = self.fetch.bind(self);
var Headers = self.Headers;
var Request = self.Request;
var Response = self.Response;

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conf__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return assignGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unassignGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createUserGroup; });
/* harmony export (immutable) */ __webpack_exports__["c"] = removeUserGroups;
var removeUserGroup = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(userGroup) {
    var resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */] + '/' + userGroup._id, __WEBPACK_IMPORTED_MODULE_2__conf__["b" /* removeConfig */]);

          case 2:
            resp = _context.sent;

            if (!(resp.status !== 200)) {
              _context.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function removeUserGroup(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var getUserGroups = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */], __WEBPACK_IMPORTED_MODULE_2__conf__["c" /* getConfig */]);

          case 2:
            resp = _context2.sent;

            if (!(resp.status !== 200)) {
              _context2.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context2.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserGroups() {
    return _ref2.apply(this, arguments);
  };
}();

var loadGroupUsers = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(groupName) {
    var resp;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */] + '/' + groupName + '/users', __WEBPACK_IMPORTED_MODULE_2__conf__["c" /* getConfig */]);

          case 2:
            resp = _context3.sent;

            if (!(resp.status !== 200)) {
              _context3.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context3.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function loadGroupUsers(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var assignGroupUsers = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(groupName, selectedUsers) {
    var resp;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */] + '/' + groupName + '/users', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["d" /* postConfig */])(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(selectedUsers, '_id')));

          case 2:
            resp = _context4.sent;

            if (!(resp.status !== 200)) {
              _context4.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context4.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function assignGroupUsers(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var unassignGroupUsers = function () {
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(groupName, selectedUsers) {
    var resp;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */] + '/' + groupName + '/users', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["e" /* putConfig */])(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(selectedUsers, '_id')));

          case 2:
            resp = _context5.sent;

            if (!(resp.status !== 200)) {
              _context5.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context5.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function unassignGroupUsers(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

var createUserGroup = function () {
  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(name) {
    var resp;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["d" /* postConfig */])({ name: name }));

          case 2:
            resp = _context6.sent;

            if (!(resp.status !== 200)) {
              _context6.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context6.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function createUserGroup(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

function removeUserGroups(selectedUserGroups) {
  return Promise.all(selectedUserGroups.map(removeUserGroup));
}

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(88);
/* harmony export (immutable) */ __webpack_exports__["getUsersListRequest"] = getUsersListRequest;
/* harmony export (immutable) */ __webpack_exports__["getUsersListSuccess"] = getUsersListSuccess;
/* harmony export (immutable) */ __webpack_exports__["getUsersListFailure"] = getUsersListFailure;
/* harmony export (immutable) */ __webpack_exports__["createUserRequest"] = createUserRequest;
/* harmony export (immutable) */ __webpack_exports__["createUserSuccess"] = createUserSuccess;
/* harmony export (immutable) */ __webpack_exports__["createUserFailure"] = createUserFailure;
/* harmony export (immutable) */ __webpack_exports__["removeUsersRequest"] = removeUsersRequest;
/* harmony export (immutable) */ __webpack_exports__["removeUsersSuccess"] = removeUsersSuccess;
/* harmony export (immutable) */ __webpack_exports__["removeUsersFailure"] = removeUsersFailure;
/* harmony export (immutable) */ __webpack_exports__["assignUsersRequest"] = assignUsersRequest;
/* harmony export (immutable) */ __webpack_exports__["assignUsersSuccess"] = assignUsersSuccess;
/* harmony export (immutable) */ __webpack_exports__["assignUsersFailure"] = assignUsersFailure;
/* harmony export (immutable) */ __webpack_exports__["unassignUsersRequest"] = unassignUsersRequest;
/* harmony export (immutable) */ __webpack_exports__["unassignUsersSuccess"] = unassignUsersSuccess;
/* harmony export (immutable) */ __webpack_exports__["unassignUsersFailure"] = unassignUsersFailure;
/* harmony export (immutable) */ __webpack_exports__["loadUsers"] = loadUsers;
/* harmony export (immutable) */ __webpack_exports__["loadGroupUsers"] = loadGroupUsers;
/* harmony export (immutable) */ __webpack_exports__["createUser"] = createUser;
/* harmony export (immutable) */ __webpack_exports__["assignSelectedUsers"] = assignSelectedUsers;
/* harmony export (immutable) */ __webpack_exports__["unassignSelectedUsers"] = unassignSelectedUsers;
/* harmony export (immutable) */ __webpack_exports__["removeSelectedUsers"] = removeSelectedUsers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






function getUsersListRequest() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["m" /* GET_USERS_LIST_REQUEST */]
  };
}

function getUsersListSuccess(list) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["n" /* GET_USERS_LIST_SUCCESS */],
    payload: {
      list: list
    }
  };
}

function getUsersListFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["o" /* GET_USERS_LIST_FAILURE */],
    payload: {
      error: error
    }
  };
}

function createUserRequest(newUser) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["p" /* CREATE_USER_REQUEST */],
    payload: {
      newUser: newUser
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["q" /* CREATE_USER_SUCCESS */],
    payload: {
      newUser: newUser
    }
  };
}

function createUserFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["r" /* CREATE_USER_FAILURE */],
    payload: {
      error: error
    }
  };
}

function removeUsersRequest(selectedUsers) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["s" /* REMOVE_USERS_REQUEST */],
    payload: {
      selectedUsers: selectedUsers
    }
  };
}

function removeUsersSuccess() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["t" /* REMOVE_USERS_SUCCESS */]
  };
}

function removeUsersFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["u" /* REMOVE_USERS_FAILURE */],
    payload: {
      error: error
    }
  };
}

function assignUsersRequest(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["v" /* ASSIGN_USERS_REQUEST */],
    payload: payload
  };
}
function assignUsersSuccess(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["w" /* ASSIGN_USERS_SUCCESS */],
    payload: payload
  };
}
function assignUsersFailure(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["x" /* ASSIGN_USERS_FAILURE */],
    payload: payload
  };
}

function unassignUsersRequest(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["y" /* UNASSIGN_USERS_REQUEST */],
    payload: payload
  };
}
function unassignUsersSuccess(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["z" /* UNASSIGN_USERS_SUCCESS */],
    payload: payload
  };
}
function unassignUsersFailure(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["A" /* UNASSIGN_USERS_FAILURE */],
    payload: payload
  };
}

function loadUsers() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var list;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(getUsersListRequest());
              _context.prev = 1;
              _context.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["a" /* getUsers */]();

            case 4:
              list = _context.sent;

              dispatch(getUsersListSuccess(list));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              dispatch(getUsersListFailure(_context.t0));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function loadGroupUsers(name) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var list;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersRequest"])(name));
              _context2.prev = 1;
              _context2.next = 4;
              return __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["d" /* loadGroupUsers */](name);

            case 4:
              list = _context2.sent;

              dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersSuccess"])(name, list));
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersFailure"])(name, _context2.t0));

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function createUser(newUser) {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      var newGroup;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(createUserRequest(newUser));
              _context3.prev = 1;
              _context3.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["b" /* createUser */](newUser);

            case 4:
              newGroup = _context3.sent;

              dispatch(createUserSuccess(newUser));
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](1);

              dispatch(createUserFailure(_context3.t0));

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 8]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}

function assignSelectedUsers(groupName, selectedUsers) {
  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch(assignUsersRequest({ groupName: groupName, selectedUsers: selectedUsers }));
              _context4.prev = 1;
              _context4.next = 4;
              return __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["e" /* assignGroupUsers */](groupName, selectedUsers);

            case 4:
              dispatch(assignUsersSuccess({ groupName: groupName, selectedUsers: selectedUsers }));
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](1);

              dispatch(assignUsersFailure({ groupName: groupName, error: _context4.t0 }));

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 7]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
}

function unassignSelectedUsers(groupName, selectedUsers) {
  return function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch(unassignUsersRequest({ groupName: groupName, selectedUsers: selectedUsers }));
              _context5.prev = 1;
              _context5.next = 4;
              return __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["f" /* unassignGroupUsers */](groupName, selectedUsers);

            case 4:
              dispatch(unassignUsersSuccess({ groupName: groupName, selectedUsers: selectedUsers }));
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](1);

              dispatch(unassignUsersFailure({ groupName: groupName, error: _context5.t0 }));

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[1, 7]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
}

function removeSelectedUsers(selectedUsers) {
  return function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch(removeUsersRequest(selectedUsers));
              _context6.prev = 1;
              _context6.next = 4;
              return __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["c" /* removeUsers */](selectedUsers);

            case 4:
              dispatch(removeUsersSuccess());
              _context6.next = 10;
              break;

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6['catch'](1);

              dispatch(removeUsersFailure(_context6.t0));

            case 10:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[1, 7]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()();

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_users__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_css__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UsersDataTable__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_mdl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_mdl__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/users/Users.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var emptyUserInfo = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  birthDate: null
};

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props, context) {
    _classCallCheck(this, Users);

    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props, context));

    _initialiseProps.call(_this);

    var selectedGroup = props.selectedGroup;


    _this.state = {
      newUser: _extends({}, emptyUserInfo),
      showCreateUserDialog: false,
      showAssignUserDialog: false,
      showRemoveConfirm: false,
      errorMessage: '',
      removeError: '',
      selectedGroup: selectedGroup
    };

    _this.createUser = _this.createUser.bind(_this);
    _this.removeSelectedUsers = _this.removeSelectedUsers.bind(_this);
    _this.assignSelectedUsers = _this.assignSelectedUsers.bind(_this);
    _this.unassignSelectedUsersFromGroup = _this.unassignSelectedUsersFromGroup.bind(_this);
    return _this;
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      var selectedGroup = this.props.selectedGroup;
      var _props = this.props,
          _props$list = _props.list,
          list = _props$list === undefined ? [] : _props$list,
          loading = _props.loading,
          loaded = _props.loaded,
          loadError = _props.loadError;
      var _props$usersList = this.props.usersList,
          usersList = _props$usersList === undefined ? [] : _props$usersList;
      var _state = this.state,
          showCreateUserDialog = _state.showCreateUserDialog,
          showAssignUserDialog = _state.showAssignUserDialog,
          showRemoveConfirm = _state.showRemoveConfirm,
          errorMessage = _state.errorMessage,
          _state$selectedRows = _state.selectedRows,
          selectedRows = _state$selectedRows === undefined ? [] : _state$selectedRows,
          removeError = _state.removeError,
          _state$newUser = _state.newUser,
          newUser = _state$newUser === undefined ? emptyUserInfo : _state$newUser;

      var usersCanBeRemoved = void 0;

      if (selectedGroup) {
        usersCanBeRemoved = selectedRows.length;
        usersList = usersList.filter(function (_ref) {
          var email = _ref.email;
          return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(list, { email: email });
        });
      } else {
        usersCanBeRemoved = !!selectedRows.filter(function (item) {
          return !item.groups.length;
        }).length;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__Users_css___default.a.usersContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          },
          selectedGroup ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 215
              },
              __self: this
            },
            'Members of ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 215
                },
                __self: this
              },
              selectedGroup
            )
          ) : 'Users'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_mdl__["FABButton"],
          { onClick: this.showUserDialog, className: __WEBPACK_IMPORTED_MODULE_6__Users_css___default.a.addRemoveUser, ripple: true, colored: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Icon"], { name: 'add', __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          })
        ),
        usersCanBeRemoved ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_mdl__["FABButton"],
          { onClick: this.showRemoveConfirm, className: __WEBPACK_IMPORTED_MODULE_6__Users_css___default.a.addRemoveUser, ripple: true, colored: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Icon"], { name: 'remove', __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          })
        ) : null,
        loaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_UsersDataTable__["a" /* default */], { selectedGroup: selectedGroup, list: list, onSelectionChanged: this.onSelectionChanged, __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Dialog"],
          { open: showCreateUserDialog, __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 234
              },
              __self: this
            },
            'User Information'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Textfield"], {
              onChange: this.onInputChange('email'),
              label: 'Email',
              value: newUser.email,
              floatingLabel: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Textfield"], {
              onChange: this.onInputChange('firstName'),
              label: 'FirstName',
              value: newUser.firstName,
              floatingLabel: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 242
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Textfield"], {
              onChange: this.onInputChange('lastName'),
              label: 'LastName',
              value: newUser.lastName,
              floatingLabel: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_mdl__["Textfield"], {
              onChange: this.onInputChange('phoneNumber'),
              label: 'PhoneNumber',
              value: newUser.phoneNumber,
              floatingLabel: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              },
              __self: this
            }),
            errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_6__Users_css___default.a.errorMessage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 260
                },
                __self: this
              },
              errorMessage
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 262
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { onClick: this.createUser, type: 'button', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 263
                },
                __self: this
              },
              'Save'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { type: 'button', onClick: this.hideCreateUserDialog, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 264
                },
                __self: this
              },
              'Cancel'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Dialog"],
          { open: showAssignUserDialog, __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 268
              },
              __self: this
            },
            selectedGroup ? selectedGroup : 'Assign'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 269
              },
              __self: this
            },
            usersList.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_UsersDataTable__["a" /* default */], { list: usersList, selectedRows: this.selectedUsers, mini: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 273
              },
              __self: this
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 276
                },
                __self: this
              },
              'All the users have been already assigned to ',
              selectedGroup,
              '!'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 280
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { onClick: this.assignSelectedUsers, type: 'button', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 281
                },
                __self: this
              },
              'Assign'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { type: 'button', onClick: this.hideAssignUserDialog, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 282
                },
                __self: this
              },
              'Cancel'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Dialog"],
          { open: showRemoveConfirm, __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 286
              },
              __self: this
            },
            selectedGroup || 'Users'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 287
              },
              __self: this
            },
            removeError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_6__Users_css___default.a.errorMessage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 289
                },
                __self: this
              },
              removeError
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 290
                },
                __self: this
              },
              this.confirmMessage()
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_mdl__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 293
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { onClick: this.removeSelectedUsers, type: 'button', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 294
                },
                __self: this
              },
              selectedGroup ? 'Unassign' : 'Remove'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_mdl__["Button"],
              { type: 'button', onClick: this.hideRemoveConfirm, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 297
                },
                __self: this
              },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return Users;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.selectedUsers = [];
  this.createUser = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var newUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newUser = this.state.newUser;

            if (newUser) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return');

          case 3:
            _context.next = 5;
            return this.props.actions.createUser(newUser);

          case 5:
            if (this.props.created) {
              this.hideCreateUserDialog();
              this.props.actions.loadUsers();
            } else {
              this.setState({
                errorMessage: 'This user can not be created!'
              });
            }

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  this.removeSelectedUsers = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var selectedGroup;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            selectedGroup = this.props.selectedGroup;

            if (!selectedGroup) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', this.unassignSelectedUsersFromGroup());

          case 3:
            return _context2.abrupt('return', this.removeUsers());

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  this.removeUsers = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var selectedRows;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selectedRows = this.state.selectedRows;
            _context3.next = 3;
            return this.props.actions.removeSelectedUsers(selectedRows.filter(function (item) {
              return !item.groups.length;
            }));

          case 3:
            if (this.props.removed) {
              this.hideRemoveConfirm();
              this.props.actions.loadUsers();
            } else {
              this.setState({
                removeError: 'One or more of these users can not be removed!'
              });
            }

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  this.showUserDialog = function () {
    var selectedGroup = _this2.props.selectedGroup;

    if (selectedGroup) {
      return _this2.showAssignUserDialog();
    }
    return _this2.showCreateUserDialog();
  };

  this.showCreateUserDialog = function () {
    _this2.setState({
      showCreateUserDialog: true,
      newUser: _extends({}, emptyUserInfo)
    });
  };

  this.hideCreateUserDialog = function () {
    _this2.setState({
      showCreateUserDialog: false,
      newUser: _extends({}, emptyUserInfo),
      errorMessage: ''
    });
  };

  this.showAssignUserDialog = function () {
    _this2.setState({
      showAssignUserDialog: true
    });
  };

  this.hideAssignUserDialog = function () {
    _this2.setState({
      showAssignUserDialog: false
    });
  };

  this.assignSelectedUsers = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
    var selectedGroup;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            selectedGroup = this.props.selectedGroup;
            _context4.next = 3;
            return this.props.actions.assignSelectedUsers(selectedGroup, this.selectedUsers);

          case 3:
            if (!this.props.assigned) {
              _context4.next = 11;
              break;
            }

            this.hideAssignUserDialog();
            _context4.next = 7;
            return this.props.actions.loadUsers();

          case 7:
            _context4.next = 9;
            return this.props.actions.loadGroupUsers(selectedGroup);

          case 9:
            _context4.next = 12;
            break;

          case 11:
            this.setState({
              errorMessage: 'This user can not be created!'
            });

          case 12:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  this.unassignSelectedUsersFromGroup = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
    var selectedRows, selectedGroup;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            selectedRows = this.state.selectedRows;
            selectedGroup = this.props.selectedGroup;
            _context5.next = 4;
            return this.props.actions.unassignSelectedUsers(selectedGroup, selectedRows);

          case 4:
            if (!this.props.unassigned) {
              _context5.next = 12;
              break;
            }

            this.hideRemoveConfirm();
            _context5.next = 8;
            return this.props.actions.loadUsers();

          case 8:
            _context5.next = 10;
            return this.props.actions.loadGroupUsers(selectedGroup);

          case 10:
            _context5.next = 13;
            break;

          case 12:
            this.setState({
              errorMessage: 'This user can not be unassigned!'
            });

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  this.showRemoveConfirm = function () {
    _this2.setState({
      showRemoveConfirm: true
    });
  };

  this.hideRemoveConfirm = function () {
    _this2.setState({
      showRemoveConfirm: false,
      removeError: ''
    });
  };

  this.onSelectionChanged = function (selectedRows) {
    _this2.setState({
      selectedRows: selectedRows
    });
  };

  this.onInputChange = function (field) {
    return function (e) {
      var state = _this2.state;
      _this2.setState(_extends({}, state, {
        newUser: _extends({}, state.newUser, _defineProperty({}, field, e.target.value))
      }));
    };
  };

  this.confirmMessage = function () {
    var selectedGroup = _this2.props.selectedGroup;

    if (selectedGroup) {
      return 'Are you sure you want to remove the selected users from ' + selectedGroup + '?';
    }
    return 'You can only remove users which are not assigned to any groups! Are you sure you want to remove them?';
  };
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var selectedGroup = _ref2.selectedGroup;

  var groupUsers = void 0;
  if (selectedGroup) {
    groupUsers = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, 'groups.groupUsers[' + selectedGroup + ']', {});
  }
  return _extends({}, state.users, {
    usersList: state.users.list
  }, selectedGroup ? {
    list: groupUsers.list || [],
    loading: !!groupUsers.loading,
    loaded: !!groupUsers.loaded
  } : null);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["a" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_2__actions_users__, dispatch),
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Users_css___default.a)(Users));

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GROUPS_API_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USERS_API_PATH; });
/* unused harmony export headers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return putConfig; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var GROUPS_API_PATH = 'https://' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* host */] + '/apis/groups';
var USERS_API_PATH = 'https://' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* host */] + '/apis/users';

var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

var getConfig = {
  method: 'get',
  headers: headers
};
var removeConfig = {
  method: 'delete',
  headers: headers
};
var postConfig = function postConfig(body) {
  return _extends({
    method: 'post',
    headers: headers
  }, body ? {
    body: JSON.stringify(body)
  } : null);
};

var putConfig = function putConfig(body) {
  return _extends({
    method: 'put',
    headers: headers
  }, body ? {
    body: JSON.stringify(body)
  } : null);
};

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf__ = __webpack_require__(218);
/* unused harmony export removeUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createUser; });
/* harmony export (immutable) */ __webpack_exports__["c"] = removeUsers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var removeUser = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(user) {
    var resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */] + '/' + user._id, __WEBPACK_IMPORTED_MODULE_1__conf__["b" /* removeConfig */]);

          case 2:
            resp = _context.sent;

            if (!(resp.status !== 200)) {
              _context.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function removeUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUsers = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */], __WEBPACK_IMPORTED_MODULE_1__conf__["c" /* getConfig */]);

          case 2:
            resp = _context2.sent;

            if (!(resp.status !== 200)) {
              _context2.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context2.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUsers() {
    return _ref2.apply(this, arguments);
  };
}();

var createUser = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(newUser) {
    var resp;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conf__["d" /* postConfig */])(newUser));

          case 2:
            resp = _context3.sent;

            if (!(resp.status !== 200)) {
              _context3.next = 5;
              break;
            }

            throw new Error(resp.statusText);

          case 5:
            return _context3.abrupt('return', resp.json());

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

function removeUsers(selectedUsers) {
  return Promise.all(selectedUsers.map(removeUser));
}

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl_extra_material_js__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl_extra_material_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl_extra_material_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fastclick__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_router__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_PathUtils__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_history__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_App__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_configureStore__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_DOMUtils__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_devUtils__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_devUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__core_devUtils__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/client.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(location, action) {
    var route;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_4_universal_router___default.a.resolve(routes, _extends({}, context, {
              path: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_5_query_string___default.a.parse(location.search)
            }));

          case 6:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            if (!route.redirect) {
              _context.next = 12;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_7__core_history__["a" /* default */].replace(route.redirect);
            return _context.abrupt('return');

          case 12:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__components_App__["a" /* default */],
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                },
                __self: this
              },
              route.component
            ), container, function () {
              return onRenderComplete(route, location);
            });
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 22;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__core_devUtils__["ErrorReporter"], { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: this
            }), container);
            throw _context.t0;

          case 22:

            console.error(_context.t0); // eslint-disable-line no-console

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */













// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__store_configureStore__["a" /* default */])(window.APP_STATE, { history: __WEBPACK_IMPORTED_MODULE_7__core_history__["a" /* default */] })
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__core_DOMUtils__["a" /* updateMeta */])('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    if (window.ga) {
      window.ga('send', 'pageview', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_history_PathUtils__["createPath"])(location));
    }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_3_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_7__core_history__["a" /* default */].location;
var routes = __webpack_require__(326).default;__WEBPACK_IMPORTED_MODULE_7__core_history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__core_devUtils__["ErrorReporter"], { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./routes', function () {
    routes = require('./routes').default; // eslint-disable-line global-require

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/UsersDataTable/UsersDataTable.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var arrayPush = Array.prototype.push;

var UsersDataTable = function (_React$Component) {
  _inherits(UsersDataTable, _React$Component);

  function UsersDataTable(props, context) {
    _classCallCheck(this, UsersDataTable);

    var _this = _possibleConstructorReturn(this, (UsersDataTable.__proto__ || Object.getPrototypeOf(UsersDataTable)).call(this, props, context));

    _initialiseProps.call(_this);

    var list = props.list,
        selectedGroup = props.selectedGroup,
        _props$selectedRows = props.selectedRows,
        selectedRows = _props$selectedRows === undefined ? [] : _props$selectedRows;


    _this.state = {
      list: list,
      selectedGroup: selectedGroup,
      selectedRows: selectedRows
    };
    return _this;
  }

  _createClass(UsersDataTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var list = _ref.list,
          selectedGroup = _ref.selectedGroup;

      this.setState({
        list: list,
        selectedGroup: selectedGroup
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedGroup = _state.selectedGroup,
          _state$list = _state.list,
          list = _state$list === undefined ? [] : _state$list;
      var _props$mini = this.props.mini,
          mini = _props$mini === undefined ? false : _props$mini;


      var tableHeaders = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
        { key: 'email', name: 'email', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        'Email'
      )].concat(_toConsumableArray(mini ? [] : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
        { key: 'firstName', name: 'firstName', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        },
        'FirstName'
      ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
        { key: 'lastName', name: 'lastName', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        },
        'LastName'
      )]));

      if (!mini && !selectedGroup) {
        tableHeaders.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
          { key: 'groups', name: 'groups',
            cellFormatter: function cellFormatter(groups) {
              return groups && groups.length ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(groups, 'name').join(', ') : 'UnAssigned';
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          'Groups'
        ));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DataTable"],
        {
          className: __WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css___default.a.usersDataTable,
          ref: 'usersTable',
          selectable: true,
          sortable: true,
          shadow: 0,
          rowKeyColumn: '_id',
          rows: list,
          onSelectionChanged: this.onSelectionChanged,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        tableHeaders
      );
    }
  }]);

  return UsersDataTable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectionChanged = function (rows) {
    var _state$list2 = _this2.state.list,
        list = _state$list2 === undefined ? [] : _state$list2;

    var selectedRows = rows.map(function (_id) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(list, { _id: _id });
    });
    _this2.setState({
      selectedRows: selectedRows
    });
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(_this2.props.selectedRows)) {
      _this2.props.selectedRows.splice(0);
      arrayPush.apply(_this2.props.selectedRows, selectedRows);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isFunction(_this2.props.onSelectionChanged)) {
      _this2.props.onSelectionChanged(selectedRows);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css___default.a)(UsersDataTable);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export port */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return host; });
/* unused harmony export databaseUrl */
/* unused harmony export analytics */
/* unused harmony export auth */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

var port = process.env.PORT || 3000;
var host = process.env.WEBSITE_HOSTNAME || 'user-management-app.herokuapp.com';

var databaseUrl = process.env.DATABASE_URL || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/user-management-app';

var analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};

var auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(83)))

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(764).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(627)
  };
}

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(88);
var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  list: [],
  loading: false,
  loaded: false,
  loadError: false,
  isCreating: false,
  created: false,
  createError: false,
  isRemoving: false,
  removed: false,
  removeError: false,
  selectedUserGroups: [],
  groupUsers: {}
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* createReducer */])(initialState, (_createReducer = {}, _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* GET_USER_GROUPS_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    loading: true,
    loaded: false
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* GET_USER_GROUPS_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    loading: false,
    loaded: true,
    list: payload.list
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* GET_GROUP_USERS_REQUEST */], function (state, _ref) {
  var name = _ref.name;

  return _extends({}, state, {
    groupUsers: _defineProperty({}, name, {
      loading: true,
      loaded: false
    })
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* GET_GROUP_USERS_SUCCESS */], function (state, _ref2) {
  var name = _ref2.name,
      list = _ref2.list;

  return _extends({}, state, {
    groupUsers: _defineProperty({}, name, {
      loading: false,
      loaded: true,
      list: list
    })
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* GET_GROUP_USERS_FAILURE */], function (state, _ref3) {
  var name = _ref3.name,
      error = _ref3.error;

  return _extends({}, state, {
    groupUsers: _defineProperty({}, name, {
      loading: false,
      loaded: false,
      list: [],
      error: error
    })
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* GET_USER_GROUPS_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    loading: false,
    loaded: false,
    list: [],
    loadError: payload.error
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* CREATE_USER_GROUP_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    isCreating: true,
    created: false,
    newGroup: payload.newGroup
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* CREATE_USER_GROUP_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    isCreating: false,
    created: true,
    newGroup: payload.newGroup
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* CREATE_USER_GROUP_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: false,
    createError: payload.error
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* REMOVE_USER_GROUPS_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: true,
    removed: false,
    selectedUserGroups: payload.selectedUserGroups
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* REMOVE_USER_GROUPS_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: true
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["l" /* REMOVE_USER_GROUPS_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: false,
    removeError: payload.error
  });
}), _createReducer));

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime__ = __webpack_require__(320);





/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
  runtime: __WEBPACK_IMPORTED_MODULE_3__runtime__["a" /* default */],
  groups: __WEBPACK_IMPORTED_MODULE_1__groups__["a" /* default */],
  users: __WEBPACK_IMPORTED_MODULE_2__users__["a" /* default */]
});

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(88);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(88);
var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  list: [],
  loading: false,
  loaded: false,
  loadError: false,
  isCreating: false,
  created: false,
  createError: false,
  isRemoving: false,
  removed: false,
  removeError: null,
  assigning: false,
  assigned: false,
  assignError: null,
  unassigning: false,
  unassigned: false,
  unassignError: null,
  groupName: '',
  selectedUsers: []
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* createReducer */])(initialState, (_createReducer = {}, _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* GET_USERS_LIST_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    loading: true,
    loaded: false
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["n" /* GET_USERS_LIST_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    loading: false,
    loaded: true,
    list: payload.list
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["o" /* GET_USERS_LIST_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    loading: false,
    loaded: false,
    list: [],
    loadError: payload.error
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["p" /* CREATE_USER_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    isCreating: true,
    created: false,
    newGroup: payload.newGroup
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["q" /* CREATE_USER_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    isCreating: false,
    created: true,
    newGroup: payload.newGroup
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* CREATE_USER_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: false,
    createError: payload.error
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["s" /* REMOVE_USERS_REQUEST */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: true,
    removed: false,
    selectedUsers: payload.selectedUsers
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["t" /* REMOVE_USERS_SUCCESS */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: true
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["u" /* REMOVE_USERS_FAILURE */], function (state, payload) {
  return _extends({}, state, {
    isRemoving: false,
    removed: false,
    removeError: payload.error
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["v" /* ASSIGN_USERS_REQUEST */], function (state, _ref) {
  var groupName = _ref.groupName,
      selectedUsers = _ref.selectedUsers;

  return _extends({}, state, {
    assigning: true,
    assigned: false,
    assignError: null,
    groupName: groupName,
    selectedUsers: selectedUsers
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["w" /* ASSIGN_USERS_SUCCESS */], function (state, _ref2) {
  var groupName = _ref2.groupName,
      selectedUsers = _ref2.selectedUsers;

  return _extends({}, state, {
    assigning: false,
    assigned: true,
    assignError: null,
    groupName: groupName,
    selectedUsers: selectedUsers
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["x" /* ASSIGN_USERS_FAILURE */], function (state, _ref3) {
  var groupName = _ref3.groupName,
      error = _ref3.error;

  return _extends({}, state, {
    assigning: false,
    assigned: true,
    assignError: error,
    groupName: groupName
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["y" /* UNASSIGN_USERS_REQUEST */], function (state, _ref4) {
  var groupName = _ref4.groupName,
      selectedUsers = _ref4.selectedUsers;

  return _extends({}, state, {
    unassigning: true,
    unassigned: false,
    unassignError: null,
    groupName: groupName,
    selectedUsers: selectedUsers
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["z" /* UNASSIGN_USERS_SUCCESS */], function (state, _ref5) {
  var groupName = _ref5.groupName,
      selectedUsers = _ref5.selectedUsers;

  return _extends({}, state, {
    unassigning: false,
    unassigned: true,
    unassignError: null,
    groupName: groupName,
    selectedUsers: selectedUsers
  });
}), _defineProperty(_createReducer, __WEBPACK_IMPORTED_MODULE_1__constants__["A" /* UNASSIGN_USERS_FAILURE */], function (state, _ref6) {
  var groupName = _ref6.groupName,
      error = _ref6.error;

  return _extends({}, state, {
    unassigning: false,
    unassigned: true,
    unassignError: error,
    groupName: groupName
  });
}), _createReducer));

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_groups__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Groups_css__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Groups_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Groups_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/groups/Groups.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Groups = function (_React$Component) {
  _inherits(Groups, _React$Component);

  function Groups(props, context) {
    _classCallCheck(this, Groups);

    // const {list} = props;


    // if(_.isArray(list) && list.length){
    //   context.store.dispatch(getUserGroupsSuccess(list));
    // }

    var _this = _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props, context));

    _this.createUserGroup = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var newGroupName;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newGroupName = this.state.newGroupName;
              _context.next = 3;
              return this.props.actions.createUserGroup(newGroupName);

            case 3:
              if (this.props.created) {
                this.hideGroupDialog();
                this.props.actions.loadUserGroups();
              } else {
                this.setState({
                  errorMessage: 'This group can not be created!'
                });
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    _this.removeSelectedUserGroups = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var selectedRows;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              selectedRows = this.state.selectedRows;
              _context2.next = 3;
              return this.props.actions.removeSelectedUserGroups(selectedRows.filter(function (item) {
                return !item.users.length;
              }));

            case 3:
              if (this.props.removed) {
                this.hideRemoveConfirm();
                this.props.actions.loadUserGroups();
              } else {
                this.setState({
                  removeError: 'One or more of these groups can not be removed!'
                });
              }

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    _this.showGroupDialog = function () {
      _this.setState({
        showDialog: true,
        newGroupName: ''
      });
    };

    _this.hideGroupDialog = function () {
      _this.setState({
        showDialog: false,
        newGroupName: '',
        errorMessage: ''
      });
    };

    _this.showRemoveConfirm = function () {
      _this.setState({
        showRemoveConfirm: true
      });
    };

    _this.hideRemoveConfirm = function () {
      _this.setState({
        showRemoveConfirm: false,
        removeError: ''
      });
    };

    _this.onSelectionChanged = function (rows) {
      var _this$props$list = _this.props.list,
          list = _this$props$list === undefined ? [] : _this$props$list;

      var selectedRows = rows.map(function (i) {
        return list[i];
      });
      _this.setState({
        selectedRows: selectedRows
      });
    };

    _this.state = {
      newGroupName: '',
      showDialog: false,
      showRemoveConfirm: false,
      errorMessage: '',
      removeError: ''
      // list
    };

    _this.createUserGroup = _this.createUserGroup.bind(_this);
    _this.removeSelectedUserGroups = _this.removeSelectedUserGroups.bind(_this);
    return _this;
  }

  // componentWillReceiveProps({list}){
  //   this.setState({
  //     list
  //   });
  // }

  _createClass(Groups, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var loaded = this.props.loaded;

      if (!loaded) {
        // this.props.actions.loadUserGroups();
      }
    }
  }, {
    key: 'getList',
    value: function getList() {
      var _props$list = this.props.list,
          list = _props$list === undefined ? [] : _props$list;

      list.forEach(function (item) {
        item.link = '/groups/' + item.name;
      });
      return list;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = this.getList();
      var _props = this.props,
          loading = _props.loading,
          loaded = _props.loaded,
          loadError = _props.loadError;
      var _state = this.state,
          showDialog = _state.showDialog,
          showRemoveConfirm = _state.showRemoveConfirm,
          errorMessage = _state.errorMessage,
          _state$selectedRows = _state.selectedRows,
          selectedRows = _state$selectedRows === undefined ? [] : _state$selectedRows,
          removeError = _state.removeError,
          newGroupName = _state.newGroupName;

      var groupsCanBeRemoved = !!selectedRows.filter(function (item) {
        return !item.users.length;
      }).length;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a.groupsContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          },
          'Groups'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["FABButton"],
          { onClick: this.showGroupDialog, className: __WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a.addRemoveGroup, ripple: true, colored: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_mdl__["Icon"], { name: 'add', __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          })
        ),
        groupsCanBeRemoved ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["FABButton"],
          { onClick: this.showRemoveConfirm, className: __WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a.addRemoveGroup, ripple: true, colored: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_mdl__["Icon"], { name: 'remove', __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          })
        ) : null,
        loaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DataTable"],
          {
            ref: 'groupsTable',
            selectable: true,
            sortable: true,
            shadow: 0,
            rowKeyColumn: 'id',
            rows: list,
            onSelectionChanged: this.onSelectionChanged,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
            {
              id: 'group-name',
              name: 'name',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            },
            'Name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
            {
              id: 'group-users-count',
              name: 'users',
              numeric: true,
              cellFormatter: function cellFormatter(users) {
                return users.length;
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            },
            'Users Count'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
            {
              id: 'group-users-list',
              name: 'link',
              cellFormatter: function cellFormatter(link) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
                  { to: link, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 176
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-users', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 176
                    },
                    __self: _this2
                  })
                );
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 173
              },
              __self: this
            },
            'Link'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Dialog"],
          { open: showDialog, __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              },
              __self: this
            },
            'Group Information'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 183
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_mdl__["Textfield"], {
              onChange: function onChange(e) {
                _this2.setState({ newGroupName: e.target.value });
              },
              label: 'GroupName',
              value: newGroupName,
              floatingLabel: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              },
              __self: this
            }),
            errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a.errorMessage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 190
                },
                __self: this
              },
              errorMessage
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
              { onClick: this.createUserGroup, type: 'button', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 193
                },
                __self: this
              },
              'Save'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
              { type: 'button', onClick: this.hideGroupDialog, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 194
                },
                __self: this
              },
              'Cancel'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Dialog"],
          { open: showRemoveConfirm, __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198
              },
              __self: this
            },
            'Remove selected groups'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199
              },
              __self: this
            },
            removeError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a.errorMessage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 201
                },
                __self: this
              },
              removeError
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 202
                },
                __self: this
              },
              'You can only remove groups which have no users! Are you sure you want to remove them'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
              { onClick: this.removeSelectedUserGroups, type: 'button', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                },
                __self: this
              },
              'Remove'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
              { type: 'button', onClick: this.hideRemoveConfirm, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 207
                },
                __self: this
              },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return Groups;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.groups);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux__["a" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_1__actions_groups__, dispatch),
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a)(Groups));

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Groups__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_Users__ = __webpack_require__(217);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/groups/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var title = 'Groups';

/* harmony default export */ __webpack_exports__["default"] = [{
  path: '/groups/:name',
  action: function action(_ref) {
    var _this = this;

    var params = _ref.params,
        store = _ref.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadUsersList */])(store);

            case 2:
              _context.next = 4;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* loadGroupUsersList */])(store, params.name);

            case 4:
              return _context.abrupt('return', {
                title: title,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__users_Users__["a" /* default */], { selectedGroup: params.name, title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
}, {
  path: '/groups',
  action: function action(_ref2) {
    var _this2 = this;

    var store = _ref2.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* loadUserGroupsList */])(store);

            case 2:
              return _context2.abrupt('return', {
                title: title,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Groups__["a" /* default */], { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: _this2
                  })
                )
              });

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
}];

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Home_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/home/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          groups = _props.groups,
          users = _props.users;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { width: '90%', margin: 'auto' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Grid"],
            { className: 'demo-grid-1', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Cell"],
              { style: { paddingTop: '30px' }, col: 6, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Card"],
                { shadow: 0, style: { width: '90%', margin: 'auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardTitle"],
                  { style: { color: '#fff', height: '100px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  'Users'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardText"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  'There are ',
                  users.list.length,
                  ' users in this system!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardActions"],
                  { border: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
                    { colored: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/users', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 32
                        },
                        __self: this
                      },
                      'Go to list'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Cell"],
              { style: { paddingTop: '30px' }, col: 6, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Card"],
                { shadow: 0, style: { width: '90%', margin: 'auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardTitle"],
                  { style: { color: '#fff', height: '100px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  'Groups'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardText"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: this
                  },
                  'There are ',
                  groups.list.length,
                  ' groups in this system!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_mdl__["CardActions"],
                  { border: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_mdl__["Button"],
                    { colored: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/groups', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 45
                        },
                        __self: this
                      },
                      'Go to list'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    users: state.users
  };
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Home_css___default.a)(Home));

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(107);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* harmony default export */ __webpack_exports__["default"] = {

  path: '/',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* loadUsersList */])(store);

            case 2:
              _context.next = 4;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* loadUserGroupsList */])(store);

            case 4:
              return _context.abrupt('return', {
                title: 'React Starter Kit',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["default"] = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(325).default, __webpack_require__(329).default].concat(_toConsumableArray(__webpack_require__(323).default), [

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(328).default]),

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = 'InterNations: ' + (route.title || 'Untitled Page');
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/notFound/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(327);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = {

  path: '*',

  action: function action() {
    return {
      title: title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }
};

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users__ = __webpack_require__(217);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/users/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var title = 'Users';

/* harmony default export */ __webpack_exports__["default"] = {

  path: '/users',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadUsersList */])(store);

            case 2:
              return _context.abrupt('return', {
                title: title,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Users__["a" /* default */], { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: _this
                  })
                )
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(332);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* applyMiddleware */].apply(undefined, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(undefined, middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(140);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetchKnowingCookie('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createFetchKnowingCookie(_ref2) {
  var cookie = _ref2.cookie;

  if (false) {
    return function (url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        var headers = _extends({}, options.headers, {
          cookie: cookie
        });
        return fetch(url, _extends({}, options, { headers: headers }));
      }

      return fetch(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  var fetchKnowingCookie = createFetchKnowingCookie(config);
  var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest: graphqlRequest,
    history: config.history
  };
}

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;


function createLogger() {
  return __WEBPACK_IMPORTED_MODULE_0_redux_logger___default()({
    collapsed: true
  });
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 20px !important;\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nnav>a:hover{\n  color: #000 !important;\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n.Layout-logo-E-aBC{\n  width: 185px;\n}", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/base.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADlcD,yEAAyE;;AEVzE;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,2BAA8B;EAA9B,8BAA8B;CAC/B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,uBAAuB;CACxB;;AFhCD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF;;AAED;EACE,aAAa;CACd","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../base.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n.logo{\n  width: 185px;\n}","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"logo": "Layout-logo-E-aBC"
};

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "\n.UsersDataTable-usersDataTable-2cS8f{\n\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(3), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(3),\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(4), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(4),\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(5), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(5){\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 761px) and (max-width: 1024px) {\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(5), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(5){\n    display: none;\n  }\n}", "", {"version":3,"sources":["/./components/UsersDataTable/UsersDataTable.css"],"names":[],"mappings":";AACA;;CAEC;;AAED;EACE;;;IAGE,cAAc;GACf;CACF;;AAED;EACE;IACE,cAAc;GACf;CACF","file":"UsersDataTable.css","sourcesContent":["\n.usersDataTable{\n\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .usersDataTable td:nth-of-type(3), .usersDataTable th:nth-of-type(3),\n  .usersDataTable td:nth-of-type(4), .usersDataTable th:nth-of-type(4),\n  .usersDataTable td:nth-of-type(5), .usersDataTable th:nth-of-type(5){\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 761px) and (max-width: 1024px) {\n  .usersDataTable td:nth-of-type(5), .usersDataTable th:nth-of-type(5){\n    display: none;\n  }\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"usersDataTable": "UsersDataTable-usersDataTable-2cS8f"
};

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "\n.Groups-groupsContainer-G3FMp{\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n.Groups-addRemoveGroup-FLfHK{\n  position: relative;\n  top: -60px;\n  margin-right: 20px;\n  float: right;\n}\n\n.Groups-errorMessage-saUX9{\n  display: block;\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .Groups-groupsContainer-G3FMp td:nth-of-type(3), .Groups-groupsContainer-G3FMp th:nth-of-type(3){\n    display: none;\n  }\n}", "", {"version":3,"sources":["/./routes/groups/Groups.css"],"names":[],"mappings":";AACA;EACE,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,aAAa;CACd;;AAED;EACE,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;EACE;IACE,cAAc;GACf;CACF","file":"Groups.css","sourcesContent":["\n.groupsContainer{\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n.addRemoveGroup :local{\n  position: relative;\n  top: -60px;\n  margin-right: 20px;\n  float: right;\n}\n\n.errorMessage :local{\n  display: block;\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .groupsContainer td:nth-of-type(3), .groupsContainer th:nth-of-type(3){\n    display: none;\n  }\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"groupsContainer": "Groups-groupsContainer-G3FMp",
	"addRemoveGroup": "Groups-addRemoveGroup-FLfHK",
	"errorMessage": "Groups-errorMessage-saUX9"
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\ndialog {\n  width: 380px !important;\n}\ndialog h4 {\n  font-size: 20px !important;\n  font-size: 1.25rem !important;\n}\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}\n.Home-root-2IMq2 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Home-container-2Yejq {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n.Home-newsItem-3Ob1N {\n  margin: 0 0 32px;\n  margin: 0 0 2rem;\n}\n.Home-newsTitle-1yWVz {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\n.Home-newsDesc-21LXz h1,\n.Home-newsDesc-21LXz h2,\n.Home-newsDesc-21LXz h3,\n.Home-newsDesc-21LXz h4,\n.Home-newsDesc-21LXz h5,\n.Home-newsDesc-21LXz h6 {\n  font-size: 18px;\n  font-size: 1.125rem;\n}\n.Home-newsDesc-21LXz pre {\n  white-space: pre-wrap;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.Home-newsDesc-21LXz img {\n  max-width: 100%;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/base.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;AAED;EACE,wBAAwB;CACzB;AAED;EACE,2BAA8B;EAA9B,8BAA8B;CAC/B;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;AACD;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;AACD;EACE,uBAAuB;CACxB;ADpCD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;AAED;EACE,iBAAiB;EAAjB,iBAAiB;CAClB;AAED;EACE,gBAAkB;EAAlB,kBAAkB;CACnB;AAED;;;;;;EAME,gBAAoB;EAApB,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,gBAAoB;EAApB,oBAAoB;CACrB;AAED;EACE,gBAAgB;CACjB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/base.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.newsItem {\n  margin: 0 0 2rem;\n}\n\n.newsTitle {\n  font-size: 1.5rem;\n}\n\n.newsDesc h1,\n.newsDesc h2,\n.newsDesc h3,\n.newsDesc h4,\n.newsDesc h5,\n.newsDesc h6 {\n  font-size: 1.125rem;\n}\n\n.newsDesc pre {\n  white-space: pre-wrap;\n  font-size: 0.875rem;\n}\n\n.newsDesc img {\n  max-width: 100%;\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "Home-root-2IMq2",
	"container": "Home-container-2Yejq",
	"newsItem": "Home-newsItem-3Ob1N",
	"newsTitle": "Home-newsTitle-1yWVz",
	"newsDesc": "Home-newsDesc-21LXz"
};

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 20px !important;\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nnav>a:hover{\n  color: #000 !important;\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/base.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,2BAA8B;EAA9B,8BAA8B;CAC/B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,uBAAuB;CACxB;;ADnCD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/base.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "NotFound-root-3whbd",
	"container": "NotFound-container-1BOHG"
};

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "\n.Users-usersContainer-2qCdh{\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n.Users-addRemoveUser-1eCXE{\n  position: relative;\n  top: -60px;\n  margin-right: 20px;\n  float: right;\n}\n\n.Users-errorMessage-11f0Y{\n  display: block;\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}", "", {"version":3,"sources":["/./routes/users/Users.css"],"names":[],"mappings":";AACA;EACE,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,aAAa;CACd;;AAED;EACE,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,gBAAgB;CACjB","file":"Users.css","sourcesContent":["\n.usersContainer{\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n.addRemoveUser :local{\n  position: relative;\n  top: -60px;\n  margin-right: 20px;\n  float: right;\n}\n\n.errorMessage :local{\n  display: block;\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"usersContainer": "Users-usersContainer-2qCdh",
	"addRemoveUser": "Users-addRemoveUser-1eCXE",
	"errorMessage": "Users-errorMessage-11f0Y"
};

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(582);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(583);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./UsersDataTable.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./UsersDataTable.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(584);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Groups.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Groups.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(585);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(586);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(587);
    var insertCss = __webpack_require__(81);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Users.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Users.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(312);
module.exports = __webpack_require__(311);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SET_RUNTIME_VARIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_USER_GROUPS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_USER_GROUPS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_USER_GROUPS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_GROUP_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_GROUP_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_GROUP_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_USER_GROUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CREATE_USER_GROUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CREATE_USER_GROUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REMOVE_USER_GROUPS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REMOVE_USER_GROUPS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REMOVE_USER_GROUPS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_USERS_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_USERS_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_USERS_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CREATE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return CREATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CREATE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return REMOVE_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return REMOVE_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return REMOVE_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ASSIGN_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ASSIGN_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ASSIGN_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UNASSIGN_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UNASSIGN_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UNASSIGN_USERS_FAILURE; });
/* eslint-disable import/prefer-default-export */

var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
var GET_USER_GROUPS_REQUEST = 'GET_USER_GROUPS_REQUEST';
var GET_USER_GROUPS_SUCCESS = 'GET_USER_GROUPS_SUCCESS';
var GET_USER_GROUPS_FAILURE = 'GET_USER_GROUPS_FAILURE';
var GET_GROUP_USERS_REQUEST = 'GET_GROUP_USERS_REQUEST';
var GET_GROUP_USERS_SUCCESS = 'GET_GROUP_USERS_SUCCESS';
var GET_GROUP_USERS_FAILURE = 'GET_GROUP_USERS_FAILURE';
var CREATE_USER_GROUP_REQUEST = 'CREATE_USER_GROUP_REQUEST';
var CREATE_USER_GROUP_SUCCESS = 'CREATE_USER_GROUP_SUCCESS';
var CREATE_USER_GROUP_FAILURE = 'CREATE_USER_GROUP_FAILURE';
var REMOVE_USER_GROUPS_REQUEST = 'REMOVE_USER_GROUPS_REQUEST';
var REMOVE_USER_GROUPS_SUCCESS = 'REMOVE_USER_GROUPS_SUCCESS';
var REMOVE_USER_GROUPS_FAILURE = 'REMOVE_USER_GROUPS_FAILURE';
var GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
var GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
var GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE';
var CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
var CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
var CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
var REMOVE_USERS_REQUEST = 'REMOVE_USERS_REQUEST';
var REMOVE_USERS_SUCCESS = 'REMOVE_USERS_SUCCESS';
var REMOVE_USERS_FAILURE = 'REMOVE_USERS_FAILURE';
var ASSIGN_USERS_REQUEST = 'ASSIGN_USERS_REQUEST';
var ASSIGN_USERS_SUCCESS = 'ASSIGN_USERS_SUCCESS';
var ASSIGN_USERS_FAILURE = 'ASSIGN_USERS_FAILURE';
var UNASSIGN_USERS_REQUEST = 'UNASSIGN_USERS_REQUEST';
var UNASSIGN_USERS_SUCCESS = 'UNASSIGN_USERS_SUCCESS';
var UNASSIGN_USERS_FAILURE = 'UNASSIGN_USERS_FAILURE';

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apis_users__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_users__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_groups__ = __webpack_require__(106);
/* unused harmony export createConstants */
/* harmony export (immutable) */ __webpack_exports__["d"] = createReducer;
/* unused harmony export checkHttpStatus */
/* unused harmony export parseJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadUserGroupsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadGroupUsersList; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








function createConstants() {
  for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
    constants[_key] = arguments[_key];
  }

  return constants.reduce(function (acc, constant) {
    acc[constant] = constant;
    return acc;
  }, {});
}

function createReducer(initialState, reducerMap) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

var loadUsersList = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(store) {
    var list;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            list = store.getState().users.list;

            if (!(!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_apis_users__["a" /* getUsers */])();

          case 4:
            list = _context.sent;

            store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_users__["getUsersListSuccess"])(list));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadUsersList(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var loadUserGroupsList = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(store) {
    var list;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            list = store.getState().groups.list;

            if (!(!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length)) {
              _context2.next = 6;
              break;
            }

            _context2.next = 4;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__["a" /* getUserGroups */])();

          case 4:
            list = _context2.sent;

            store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_groups__["getUserGroupsSuccess"])(list));

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function loadUserGroupsList(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var loadGroupUsersList = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(store, name) {
    var list;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            list = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(store.getState(), 'groups.groupUsers[name].list');

            if (!(!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length)) {
              _context3.next = 6;
              break;
            }

            _context3.next = 4;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__["d" /* loadGroupUsers */])(name);

          case 4:
            list = _context3.sent;

            store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_groups__["getGroupUsersSuccess"])(name, list));

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function loadGroupUsersList(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ })

},[786]);
//# sourceMappingURL=client.js.map