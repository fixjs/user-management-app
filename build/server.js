require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(69);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(70);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(68);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["B"] = SET_RUNTIME_VARIABLE;

const GET_USER_GROUPS_REQUEST = 'GET_USER_GROUPS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["a"] = GET_USER_GROUPS_REQUEST;

const GET_USER_GROUPS_SUCCESS = 'GET_USER_GROUPS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["b"] = GET_USER_GROUPS_SUCCESS;

const GET_USER_GROUPS_FAILURE = 'GET_USER_GROUPS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["f"] = GET_USER_GROUPS_FAILURE;

const GET_GROUP_USERS_REQUEST = 'GET_GROUP_USERS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["c"] = GET_GROUP_USERS_REQUEST;

const GET_GROUP_USERS_SUCCESS = 'GET_GROUP_USERS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["d"] = GET_GROUP_USERS_SUCCESS;

const GET_GROUP_USERS_FAILURE = 'GET_GROUP_USERS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["e"] = GET_GROUP_USERS_FAILURE;

const CREATE_USER_GROUP_REQUEST = 'CREATE_USER_GROUP_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["g"] = CREATE_USER_GROUP_REQUEST;

const CREATE_USER_GROUP_SUCCESS = 'CREATE_USER_GROUP_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["h"] = CREATE_USER_GROUP_SUCCESS;

const CREATE_USER_GROUP_FAILURE = 'CREATE_USER_GROUP_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["i"] = CREATE_USER_GROUP_FAILURE;

const REMOVE_USER_GROUPS_REQUEST = 'REMOVE_USER_GROUPS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["j"] = REMOVE_USER_GROUPS_REQUEST;

const REMOVE_USER_GROUPS_SUCCESS = 'REMOVE_USER_GROUPS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["k"] = REMOVE_USER_GROUPS_SUCCESS;

const REMOVE_USER_GROUPS_FAILURE = 'REMOVE_USER_GROUPS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["l"] = REMOVE_USER_GROUPS_FAILURE;

const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["m"] = GET_USERS_LIST_REQUEST;

const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["n"] = GET_USERS_LIST_SUCCESS;

const GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["o"] = GET_USERS_LIST_FAILURE;

const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["p"] = CREATE_USER_REQUEST;

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["q"] = CREATE_USER_SUCCESS;

const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["r"] = CREATE_USER_FAILURE;

const REMOVE_USERS_REQUEST = 'REMOVE_USERS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["s"] = REMOVE_USERS_REQUEST;

const REMOVE_USERS_SUCCESS = 'REMOVE_USERS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["t"] = REMOVE_USERS_SUCCESS;

const REMOVE_USERS_FAILURE = 'REMOVE_USERS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["u"] = REMOVE_USERS_FAILURE;

const ASSIGN_USERS_REQUEST = 'ASSIGN_USERS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["v"] = ASSIGN_USERS_REQUEST;

const ASSIGN_USERS_SUCCESS = 'ASSIGN_USERS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["w"] = ASSIGN_USERS_SUCCESS;

const ASSIGN_USERS_FAILURE = 'ASSIGN_USERS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["x"] = ASSIGN_USERS_FAILURE;

const UNASSIGN_USERS_REQUEST = 'UNASSIGN_USERS_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["y"] = UNASSIGN_USERS_REQUEST;

const UNASSIGN_USERS_SUCCESS = 'UNASSIGN_USERS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["z"] = UNASSIGN_USERS_SUCCESS;

const UNASSIGN_USERS_FAILURE = 'UNASSIGN_USERS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["A"] = UNASSIGN_USERS_FAILURE;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apis_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_users__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_groups__ = __webpack_require__(8);
/* unused harmony export createConstants */
/* harmony export (immutable) */ __webpack_exports__["d"] = createReducer;
/* unused harmony export checkHttpStatus */
/* unused harmony export parseJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadUserGroupsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadGroupUsersList; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

let loadUsersList = (() => {
  var _ref = _asyncToGenerator(function* (store) {
    let list = store.getState().users.list;
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length) {
      list = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_apis_users__["a" /* getUsers */])();
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_users__["getUsersListSuccess"])(list));
    }
  });

  return function loadUsersList(_x) {
    return _ref.apply(this, arguments);
  };
})();

let loadUserGroupsList = (() => {
  var _ref2 = _asyncToGenerator(function* (store) {
    let list = store.getState().groups.list;
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length) {
      list = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__["a" /* getUserGroups */])();
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_groups__["getUserGroupsSuccess"])(list));
    }
  });

  return function loadUserGroupsList(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

let loadGroupUsersList = (() => {
  var _ref3 = _asyncToGenerator(function* (store, name) {
    let list = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(store.getState(), 'groups.groupUsers[name].list');
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(list) || !list.length) {
      list = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_apis_groups__["d" /* loadGroupUsers */])(name);
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_groups__["getGroupUsersSuccess"])(name, list));
    }
  });

  return function loadGroupUsersList(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-mdl");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
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
      list
    }
  };
}

function getGroupUsersRequest(name) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* GET_GROUP_USERS_REQUEST */],
    payload: {
      name
    }
  };
}

function getGroupUsersSuccess(name, list) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* GET_GROUP_USERS_SUCCESS */],
    payload: {
      name,
      list
    }
  };
}

function getGroupUsersFailure(name, error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* GET_GROUP_USERS_FAILURE */],
    payload: {
      name,
      error
    }
  };
}

function getUserGroupsFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* GET_USER_GROUPS_FAILURE */],
    payload: {
      error
    }
  };
}

function createUserGroupRequest(newGroup) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* CREATE_USER_GROUP_REQUEST */],
    payload: {
      newGroup
    }
  };
}

function createUserGroupSuccess(newGroup) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* CREATE_USER_GROUP_SUCCESS */],
    payload: {
      newGroup
    }
  };
}

function createUserGroupFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* CREATE_USER_GROUP_FAILURE */],
    payload: {
      error
    }
  };
}

function removeUserGroupsRequest(selectedUserGroups) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* REMOVE_USER_GROUPS_REQUEST */],
    payload: {
      selectedUserGroups
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
      error
    }
  };
}

function loadUserGroups() {
  return (() => {
    var _ref = _asyncToGenerator(function* (dispatch) {
      dispatch(getUserGroupsRequest());
      try {
        let list = yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["a" /* getUserGroups */]();
        dispatch(getUserGroupsSuccess(list));
      } catch (error) {
        dispatch(getUserGroupsFailure(error));
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();
}

function createUserGroup(name) {
  return (() => {
    var _ref2 = _asyncToGenerator(function* (dispatch) {
      dispatch(createUserGroupRequest({ name }));
      try {
        let newGroup = yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["b" /* createUserGroup */](name);
        dispatch(createUserGroupSuccess(newGroup));
      } catch (error) {
        dispatch(createUserGroupFailure(error));
      }
    });

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
}

function removeSelectedUserGroups(selectedUserGroups) {
  return (() => {
    var _ref3 = _asyncToGenerator(function* (dispatch) {
      dispatch(removeUserGroupsRequest(selectedUserGroups));
      try {
        yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_groups__["c" /* removeUserGroups */](selectedUserGroups);
        dispatch(removeUserGroupsSuccess());
      } catch (error) {
        dispatch(removeUserGroupsFailure(error));
      }
    });

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_mdl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const title = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a.logo, src: '/logo.png', alt: 'InterNations', __source: {
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
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

const port = process.env.PORT || 3000;
/* harmony export (immutable) */ __webpack_exports__["b"] = port;

const host = process.env.WEBSITE_HOSTNAME || `user-management-app.herokuapp.com`;
/* harmony export (immutable) */ __webpack_exports__["d"] = host;


const databaseUrl = process.env.DATABASE_URL || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/user-management-app';
/* harmony export (immutable) */ __webpack_exports__["a"] = databaseUrl;


const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};
/* harmony export (immutable) */ __webpack_exports__["c"] = analytics;


const auth = {

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
/* unused harmony export auth */


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("awaitify");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  phoneNumber: String
});

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/Link/Link.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
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
}

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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(10);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conf__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return assignGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unassignGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createUserGroup; });
/* harmony export (immutable) */ __webpack_exports__["c"] = removeUserGroups;
let removeUserGroup = (() => {
  var _ref = _asyncToGenerator(function* (userGroup) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */]}/${userGroup._id}`, __WEBPACK_IMPORTED_MODULE_2__conf__["b" /* removeConfig */]);
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function removeUserGroup(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let getUserGroups = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */], __WEBPACK_IMPORTED_MODULE_2__conf__["c" /* getConfig */]);
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function getUserGroups() {
    return _ref2.apply(this, arguments);
  };
})();

let loadGroupUsers = (() => {
  var _ref3 = _asyncToGenerator(function* (groupName) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */]}/${groupName}/users`, __WEBPACK_IMPORTED_MODULE_2__conf__["c" /* getConfig */]);
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function loadGroupUsers(_x2) {
    return _ref3.apply(this, arguments);
  };
})();

let assignGroupUsers = (() => {
  var _ref4 = _asyncToGenerator(function* (groupName, selectedUsers) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */]}/${groupName}/users`, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["d" /* postConfig */])(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(selectedUsers, '_id')));
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function assignGroupUsers(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
})();

let unassignGroupUsers = (() => {
  var _ref5 = _asyncToGenerator(function* (groupName, selectedUsers) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */]}/${groupName}/users`, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["e" /* putConfig */])(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(selectedUsers, '_id')));
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function unassignGroupUsers(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
})();

let createUserGroup = (() => {
  var _ref6 = _asyncToGenerator(function* (name) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* GROUPS_API_PATH */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conf__["d" /* postConfig */])({ name }));
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function createUserGroup(_x7) {
    return _ref6.apply(this, arguments);
  };
})();

function removeUserGroups(selectedUserGroups) {
  return Promise.all(selectedUserGroups.map(removeUserGroup));
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);
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
      list
    }
  };
}

function getUsersListFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["o" /* GET_USERS_LIST_FAILURE */],
    payload: {
      error
    }
  };
}

function createUserRequest(newUser) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["p" /* CREATE_USER_REQUEST */],
    payload: {
      newUser
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["q" /* CREATE_USER_SUCCESS */],
    payload: {
      newUser
    }
  };
}

function createUserFailure(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["r" /* CREATE_USER_FAILURE */],
    payload: {
      error
    }
  };
}

function removeUsersRequest(selectedUsers) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["s" /* REMOVE_USERS_REQUEST */],
    payload: {
      selectedUsers
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
      error
    }
  };
}

function assignUsersRequest(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["v" /* ASSIGN_USERS_REQUEST */],
    payload
  };
}
function assignUsersSuccess(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["w" /* ASSIGN_USERS_SUCCESS */],
    payload
  };
}
function assignUsersFailure(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["x" /* ASSIGN_USERS_FAILURE */],
    payload
  };
}

function unassignUsersRequest(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["y" /* UNASSIGN_USERS_REQUEST */],
    payload
  };
}
function unassignUsersSuccess(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["z" /* UNASSIGN_USERS_SUCCESS */],
    payload
  };
}
function unassignUsersFailure(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__constants__["A" /* UNASSIGN_USERS_FAILURE */],
    payload
  };
}

function loadUsers() {
  return (() => {
    var _ref = _asyncToGenerator(function* (dispatch) {
      dispatch(getUsersListRequest());
      try {
        let list = yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["a" /* getUsers */]();
        dispatch(getUsersListSuccess(list));
      } catch (error) {
        dispatch(getUsersListFailure(error));
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();
}

function loadGroupUsers(name) {
  return (() => {
    var _ref2 = _asyncToGenerator(function* (dispatch) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersRequest"])(name));
      try {
        let list = yield __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["d" /* loadGroupUsers */](name);
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersSuccess"])(name, list));
      } catch (error) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__groups__["getGroupUsersFailure"])(name, error));
      }
    });

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
}

function createUser(newUser) {
  return (() => {
    var _ref3 = _asyncToGenerator(function* (dispatch) {
      dispatch(createUserRequest(newUser));
      try {
        let newGroup = yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["b" /* createUser */](newUser);
        dispatch(createUserSuccess(newUser));
      } catch (error) {
        dispatch(createUserFailure(error));
      }
    });

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}

function assignSelectedUsers(groupName, selectedUsers) {
  return (() => {
    var _ref4 = _asyncToGenerator(function* (dispatch) {
      dispatch(assignUsersRequest({ groupName, selectedUsers }));
      try {
        yield __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["e" /* assignGroupUsers */](groupName, selectedUsers);
        dispatch(assignUsersSuccess({ groupName, selectedUsers }));
      } catch (error) {
        dispatch(assignUsersFailure({ groupName, error }));
      }
    });

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  })();
}

function unassignSelectedUsers(groupName, selectedUsers) {
  return (() => {
    var _ref5 = _asyncToGenerator(function* (dispatch) {
      dispatch(unassignUsersRequest({ groupName, selectedUsers }));
      try {
        yield __WEBPACK_IMPORTED_MODULE_1__utils_apis_groups__["f" /* unassignGroupUsers */](groupName, selectedUsers);
        dispatch(unassignUsersSuccess({ groupName, selectedUsers }));
      } catch (error) {
        dispatch(unassignUsersFailure({ groupName, error }));
      }
    });

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  })();
}

function removeSelectedUsers(selectedUsers) {
  return (() => {
    var _ref6 = _asyncToGenerator(function* (dispatch) {
      dispatch(removeUsersRequest(selectedUsers));
      try {
        yield __WEBPACK_IMPORTED_MODULE_0__utils_apis_users__["c" /* removeUsers */](selectedUsers);
        dispatch(removeUsersSuccess());
      } catch (error) {
        dispatch(removeUsersFailure(error));
      }
    });

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  })();
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_awaitify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_awaitify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_awaitify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_group_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(14);






const Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;

const loadGroupUsers = __WEBPACK_IMPORTED_MODULE_0_awaitify___default()(function* (name) {
  const userGroup = yield __WEBPACK_IMPORTED_MODULE_3__models_user_group_model__["a" /* default */].findOne({ name }).exec();
  if (!userGroup) {
    return;
  }
  if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(userGroup.users) || !userGroup.users.length) {
    return [];
  }
  return __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* default */].find({ _id: { $in: userGroup.users.map(String) } }).exec();
});
/* harmony export (immutable) */ __webpack_exports__["b"] = loadGroupUsers;


const loadUserGroups = __WEBPACK_IMPORTED_MODULE_0_awaitify___default()(function* (id) {
  return __WEBPACK_IMPORTED_MODULE_3__models_user_group_model__["a" /* default */].find({ users: id }).exec();
});
/* harmony export (immutable) */ __webpack_exports__["a"] = loadUserGroups;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_awaitify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_awaitify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_awaitify__);


const asyncError = statusCode => {
  return __WEBPACK_IMPORTED_MODULE_0_awaitify___default()(function* (req, res) {
    let viewFilePath = String(statusCode),
        result = {
      status: statusCode
    };

    try {
      yield __WEBPACK_IMPORTED_MODULE_0_awaitify___default.a.cb(cb => res.render(viewFilePath, cb));
      res.render(viewFilePath);
    } catch (err) {
      return res.status(statusCode).json(result);
    }
  });
};

const notFound = asyncError(404);
/* harmony export (immutable) */ __webpack_exports__["a"] = notFound;

const invalidData = asyncError(500);
/* harmony export (immutable) */ __webpack_exports__["b"] = invalidData;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  users: [{ type: String, ref: 'User' }]
});

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('UserGroup', userSchema);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_users__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UsersDataTable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_mdl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_mdl__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/users/Users.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











const emptyUserInfo = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  birthDate: null
};

class Users extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props, context) {
    super(props, context);

    _initialiseProps.call(this);

    const { selectedGroup } = props;

    this.state = {
      newUser: _extends({}, emptyUserInfo),
      showCreateUserDialog: false,
      showAssignUserDialog: false,
      showRemoveConfirm: false,
      errorMessage: '',
      removeError: '',
      selectedGroup
    };

    this.createUser = this.createUser.bind(this);
    this.removeSelectedUsers = this.removeSelectedUsers.bind(this);
    this.assignSelectedUsers = this.assignSelectedUsers.bind(this);
    this.unassignSelectedUsersFromGroup = this.unassignSelectedUsersFromGroup.bind(this);
  }

  render() {
    const { selectedGroup } = this.props;
    const { list = [], loading, loaded, loadError } = this.props;
    let { usersList = [] } = this.props;
    const { showCreateUserDialog, showAssignUserDialog, showRemoveConfirm, errorMessage, selectedRows = [], removeError, newUser = emptyUserInfo } = this.state;
    let usersCanBeRemoved;

    if (selectedGroup) {
      usersCanBeRemoved = selectedRows.length;
      usersList = usersList.filter(({ email }) => !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(list, { email }));
    } else {
      usersCanBeRemoved = !!selectedRows.filter(item => !item.groups.length).length;
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
}

var _initialiseProps = function () {
  this.selectedUsers = [];
  this.createUser = _asyncToGenerator(function* () {
    const { newUser } = this.state;
    if (!newUser) {
      return;
    }
    yield this.props.actions.createUser(newUser);
    if (this.props.created) {
      this.hideCreateUserDialog();
      this.props.actions.loadUsers();
    } else {
      this.setState({
        errorMessage: 'This user can not be created!'
      });
    }
  });
  this.removeSelectedUsers = _asyncToGenerator(function* () {
    const { selectedGroup } = this.props;
    if (selectedGroup) {
      return this.unassignSelectedUsersFromGroup();
    }
    return this.removeUsers();
  });
  this.removeUsers = _asyncToGenerator(function* () {
    const { selectedRows } = this.state;
    yield this.props.actions.removeSelectedUsers(selectedRows.filter(function (item) {
      return !item.groups.length;
    }));
    if (this.props.removed) {
      this.hideRemoveConfirm();
      this.props.actions.loadUsers();
    } else {
      this.setState({
        removeError: 'One or more of these users can not be removed!'
      });
    }
  });

  this.showUserDialog = () => {
    const { selectedGroup } = this.props;
    if (selectedGroup) {
      return this.showAssignUserDialog();
    }
    return this.showCreateUserDialog();
  };

  this.showCreateUserDialog = () => {
    this.setState({
      showCreateUserDialog: true,
      newUser: _extends({}, emptyUserInfo)
    });
  };

  this.hideCreateUserDialog = () => {
    this.setState({
      showCreateUserDialog: false,
      newUser: _extends({}, emptyUserInfo),
      errorMessage: ''
    });
  };

  this.showAssignUserDialog = () => {
    this.setState({
      showAssignUserDialog: true
    });
  };

  this.hideAssignUserDialog = () => {
    this.setState({
      showAssignUserDialog: false
    });
  };

  this.assignSelectedUsers = _asyncToGenerator(function* () {
    const { selectedGroup } = this.props;
    yield this.props.actions.assignSelectedUsers(selectedGroup, this.selectedUsers);
    if (this.props.assigned) {
      this.hideAssignUserDialog();
      yield this.props.actions.loadUsers();
      yield this.props.actions.loadGroupUsers(selectedGroup);
      // await Promise.all([usersPromise, groupUsersPromise]);
    } else {
      this.setState({
        errorMessage: 'This user can not be created!'
      });
    }
  });
  this.unassignSelectedUsersFromGroup = _asyncToGenerator(function* () {
    const { selectedRows } = this.state;
    const { selectedGroup } = this.props;
    yield this.props.actions.unassignSelectedUsers(selectedGroup, selectedRows);
    if (this.props.unassigned) {
      this.hideRemoveConfirm();
      yield this.props.actions.loadUsers();
      yield this.props.actions.loadGroupUsers(selectedGroup);
      // await Promise.all([usersPromise, groupUsersPromise]);
    } else {
      this.setState({
        errorMessage: 'This user can not be unassigned!'
      });
    }
  });

  this.showRemoveConfirm = () => {
    this.setState({
      showRemoveConfirm: true
    });
  };

  this.hideRemoveConfirm = () => {
    this.setState({
      showRemoveConfirm: false,
      removeError: ''
    });
  };

  this.onSelectionChanged = selectedRows => {
    this.setState({
      selectedRows
    });
  };

  this.onInputChange = field => {
    return e => {
      const state = this.state;
      this.setState(_extends({}, state, {
        newUser: _extends({}, state.newUser, {
          [field]: e.target.value
        })
      }));
    };
  };

  this.confirmMessage = () => {
    const { selectedGroup } = this.props;
    if (selectedGroup) {
      return `Are you sure you want to remove the selected users from ${selectedGroup}?`;
    }
    return `You can only remove users which are not assigned to any groups! Are you sure you want to remove them?`;
  };
};

const mapStateToProps = (state, { selectedGroup }) => {
  let groupUsers;
  if (selectedGroup) {
    groupUsers = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, `groups.groupUsers[${selectedGroup}]`, {});
  }
  return _extends({}, state.users, {
    usersList: state.users.list
  }, selectedGroup ? {
    list: groupUsers.list || [],
    loading: !!groupUsers.loading,
    loaded: !!groupUsers.loaded
  } : null);
};

const mapDispatchToProps = dispatch => ({
  actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__actions_users__, dispatch),
  dispatch
});

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_5_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Users_css___default.a)(Users));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(10);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const GROUPS_API_PATH = `https://${__WEBPACK_IMPORTED_MODULE_0__config__["d" /* host */]}/apis/groups`;
/* harmony export (immutable) */ __webpack_exports__["a"] = GROUPS_API_PATH;

const USERS_API_PATH = `https://${__WEBPACK_IMPORTED_MODULE_0__config__["d" /* host */]}/apis/users`;
/* harmony export (immutable) */ __webpack_exports__["f"] = USERS_API_PATH;


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
/* unused harmony export headers */


const getConfig = {
  method: 'get',
  headers
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getConfig;

const removeConfig = {
  method: 'delete',
  headers
};
/* harmony export (immutable) */ __webpack_exports__["b"] = removeConfig;

const postConfig = body => _extends({
  method: 'post',
  headers
}, body ? {
  body: JSON.stringify(body)
} : null);
/* harmony export (immutable) */ __webpack_exports__["d"] = postConfig;


const putConfig = body => _extends({
  method: 'put',
  headers
}, body ? {
  body: JSON.stringify(body)
} : null);
/* harmony export (immutable) */ __webpack_exports__["e"] = putConfig;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf__ = __webpack_require__(24);
/* unused harmony export removeUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createUser; });
/* harmony export (immutable) */ __webpack_exports__["c"] = removeUsers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let removeUser = (() => {
  var _ref = _asyncToGenerator(function* (user) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */]}/${user._id}`, __WEBPACK_IMPORTED_MODULE_1__conf__["b" /* removeConfig */]);
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function removeUser(_x) {
    return _ref.apply(this, arguments);
  };
})();

let getUsers = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */], __WEBPACK_IMPORTED_MODULE_1__conf__["c" /* getConfig */]);
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function getUsers() {
    return _ref2.apply(this, arguments);
  };
})();

let createUser = (() => {
  var _ref3 = _asyncToGenerator(function* (newUser) {
    const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__conf__["f" /* USERS_API_PATH */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conf__["d" /* postConfig */])(newUser));
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  return function createUser(_x2) {
    return _ref3.apply(this, arguments);
  };
})();

function removeUsers(selectedUsers) {
  return Promise.all(selectedUsers.map(removeUser));
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(56);
    var insertCss = __webpack_require__(2);

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
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_mdl_extra_material_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_mdl_extra_material_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_mdl_extra_material_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_universal_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_App__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Html__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apis__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_json__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_configureStore__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__actions_runtime__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config__ = __webpack_require__(10);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/server.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

















 // eslint-disable-line import/no-unresolved




const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_3_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.json());

app.use('/apis', __WEBPACK_IMPORTED_MODULE_15__apis__["a" /* default */]);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__store_configureStore__["a" /* default */])({
        user: req.user || null
      }, {
        cookie: req.headers.cookie
      });

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_8_universal_router___default.a.resolve(__WEBPACK_IMPORTED_MODULE_14__routes__["a" /* default */], _extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10__components_App__["a" /* default */],
        { context: context, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: _this
        },
        route.component
      ));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_16__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_16__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_16__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_16__assets_json___default.a[route.chunk].js);
      }

      const html = __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: _this
      })));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_9_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_19__config__["a" /* databaseUrl */]);

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(__WEBPACK_IMPORTED_MODULE_19__config__["b" /* port */], () => {
  console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_19__config__["b" /* port */]}/`);
});
/* eslint-enable no-console */

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_group_api__ = __webpack_require__(32);




const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/groups', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["a" /* index */]);
router.get('/groups/:id', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["b" /* show */]);
router.post('/groups', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["c" /* create */]);
router.put('/groups/:id', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["d" /* update */]);
router.get('/groups/:name/users', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["e" /* users */]);
router.post('/groups/:name/users', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["f" /* assignUsersToGroup */]);
router.put('/groups/:name/users', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["g" /* unassignUsersFromGroup */]);
router.delete('/groups/:id', __WEBPACK_IMPORTED_MODULE_2__user_group_api__["h" /* destroy */]);

router.get('/users', __WEBPACK_IMPORTED_MODULE_1__user_api__["a" /* index */]);
router.get('/users/:id', __WEBPACK_IMPORTED_MODULE_1__user_api__["b" /* show */]);
router.post('/users', __WEBPACK_IMPORTED_MODULE_1__user_api__["c" /* create */]);
router.put('/users/:id', __WEBPACK_IMPORTED_MODULE_1__user_api__["d" /* update */]);
router.get('/users/:id/groups', __WEBPACK_IMPORTED_MODULE_1__user_api__["e" /* groups */]);
router.delete('/users/:id', __WEBPACK_IMPORTED_MODULE_1__user_api__["f" /* destroy */]);

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awaitify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awaitify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_awaitify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(14);
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */








const index = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const userGroups = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].find({}).exec();
    res.status(200).json(userGroups);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = index;


const show = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { params: { id } } = req;
    const userGroup = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findById(id).exec();
    if (!userGroup) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    res.status(200).json(userGroup);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = show;


const create = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { body: { name } } = req;
    if (!name) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    let userGroup = new __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */]();
    userGroup.name = name;
    userGroup.users = [];
    const result = yield userGroup.save();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = create;


const update = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { body: { name }, params: { id } } = req;
    if (!name || !id) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const userGroup = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findById(id).exec();
    if (!userGroup) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    userGroup.name = name;
    const result = yield userGroup.save().exec();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["d"] = update;


const users = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { params: { name } } = req;
    if (!name) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const result = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_utils__["b" /* loadGroupUsers */])(name);
    if (!result) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["e"] = users;


const assignUsersToGroup = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { body, params: { name } } = req;
    if (!name || !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(body)) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const userGroup = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findOne({ name }).exec();
    if (!userGroup) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    userGroup.users = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.uniq(userGroup.users.concat(body));
    userGroup.markModified('users');
    const result = yield userGroup.save();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["f"] = assignUsersToGroup;


const unassignUsersFromGroup = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { body, params: { name } } = req;
    if (!name || !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(body)) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const userGroup = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findOne({ name }).exec();
    if (!userGroup) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.remove(userGroup.users, id => __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.includes(body, String(id)));
    userGroup.markModified('users');
    const result = yield userGroup.save();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["g"] = unassignUsersFromGroup;


const destroy = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const userGroup = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findById(req.params.id).exec();
    if (!userGroup || userGroup.users.length) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const result = yield __WEBPACK_IMPORTED_MODULE_4__models_user_group_model__["a" /* default */].findByIdAndRemove(req.params.id).exec();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["h"] = destroy;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awaitify__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awaitify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_awaitify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(14);
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */






const index = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const users = yield __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* default */].find({}).exec();
    let result = users.map(({ _id, id, email, firstName, lastName, phoneNumber }) => ({
      _id, id,
      email, firstName, lastName, phoneNumber
    }));
    let i = 0;
    let length = result.length;

    for (; i < length; i += 1) {
      let user = result[i];
      user.groups = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_utils__["a" /* loadUserGroups */])(user.id);
    }
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = index;


const show = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const user = yield __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* default */].findById(req.params.id).exec();
    if (!user) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = show;


const groups = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const { params: { id } } = req;
    if (!id) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    const result = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_utils__["a" /* loadUserGroups */])(id);
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["e"] = groups;


const create = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* default */]();
    const { email, firstName, lastName, phoneNumber } = req.body;
    if (!email) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* invalidData */])(req, res);
    }
    user.email = email;
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }
    const result = yield user.save();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = create;


const update = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const user = yield __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* default */].findById(req.params.id).exec();
    if (!user) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* notFound */])(req, res);
    }
    user.name = req.body.name;
    const result = yield user.save();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["d"] = update;


const destroy = __WEBPACK_IMPORTED_MODULE_1_awaitify___default()(function* (req, res, next) {
  try {
    const result = yield __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* default */].findByIdAndRemove(req.params.id).exec();
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
/* harmony export (immutable) */ __webpack_exports__["f"] = destroy;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const ContextType = {
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
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(10);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/Html.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/css/material.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }),
        styles.map(style => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', {
          key: style.id,
          id: style.id
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: style.cssText },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }))
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        })),
        __WEBPACK_IMPORTED_MODULE_2__config__["c" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_2__config__["c" /* analytics */].google.trackingId}','auto');ga('send','pageview')` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_2__config__["c" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = Html;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/components/UsersDataTable/UsersDataTable.js';






const arrayPush = Array.prototype.push;

class UsersDataTable extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);

    _initialiseProps.call(this);

    const { list, selectedGroup, selectedRows = [] } = props;

    this.state = {
      list,
      selectedGroup,
      selectedRows
    };
  }

  componentWillReceiveProps({ list, selectedGroup }) {
    this.setState({
      list,
      selectedGroup
    });
  }

  render() {
    const { selectedGroup, list = [] } = this.state;
    const { mini = false } = this.props;

    let tableHeaders = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
      { key: 'email', name: 'email', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      },
      'Email'
    ), ...(mini ? [] : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
    )])];

    if (!mini && !selectedGroup) {
      tableHeaders.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_mdl__["TableHeader"],
        { key: 'groups', name: 'groups',
          cellFormatter: groups => groups && groups.length ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(groups, 'name').join(', ') : 'UnAssigned',
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
}

var _initialiseProps = function () {
  this.onSelectionChanged = rows => {
    const { list = [] } = this.state;
    const selectedRows = rows.map(_id => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(list, { _id }));
    this.setState({
      selectedRows
    });
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(this.props.selectedRows)) {
      this.props.selectedRows.splice(0);
      arrayPush.apply(this.props.selectedRows, selectedRows);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isFunction(this.props.onSelectionChanged)) {
      this.props.onSelectionChanged(selectedRows);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__UsersDataTable_css___default.a)(UsersDataTable);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(74);
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
/* harmony default export */ __webpack_exports__["a"] = false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()();

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const initialState = {
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

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* createReducer */])(initialState, {
  [__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* GET_USER_GROUPS_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      loading: true,
      loaded: false
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* GET_USER_GROUPS_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      loading: false,
      loaded: true,
      list: payload.list
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* GET_GROUP_USERS_REQUEST */]]: (state, { name }) => {
    return _extends({}, state, {
      groupUsers: {
        [name]: {
          loading: true,
          loaded: false
        }
      }
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["d" /* GET_GROUP_USERS_SUCCESS */]]: (state, { name, list }) => {
    return _extends({}, state, {
      groupUsers: {
        [name]: {
          loading: false,
          loaded: true,
          list
        }
      }
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* GET_GROUP_USERS_FAILURE */]]: (state, { name, error }) => {
    return _extends({}, state, {
      groupUsers: {
        [name]: {
          loading: false,
          loaded: false,
          list: [],
          error
        }
      }
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* GET_USER_GROUPS_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      loading: false,
      loaded: false,
      list: [],
      loadError: payload.error
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["g" /* CREATE_USER_GROUP_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      isCreating: true,
      created: false,
      newGroup: payload.newGroup
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["h" /* CREATE_USER_GROUP_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      isCreating: false,
      created: true,
      newGroup: payload.newGroup
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["i" /* CREATE_USER_GROUP_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: false,
      createError: payload.error
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["j" /* REMOVE_USER_GROUPS_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: true,
      removed: false,
      selectedUserGroups: payload.selectedUserGroups
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["k" /* REMOVE_USER_GROUPS_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: true
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["l" /* REMOVE_USER_GROUPS_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: false,
      removeError: payload.error
    });
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime__ = __webpack_require__(40);





/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  runtime: __WEBPACK_IMPORTED_MODULE_3__runtime__["a" /* default */],
  groups: __WEBPACK_IMPORTED_MODULE_1__groups__["a" /* default */],
  users: __WEBPACK_IMPORTED_MODULE_2__users__["a" /* default */]
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const initialState = {
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

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* createReducer */])(initialState, {
  [__WEBPACK_IMPORTED_MODULE_1__constants__["m" /* GET_USERS_LIST_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      loading: true,
      loaded: false
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["n" /* GET_USERS_LIST_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      loading: false,
      loaded: true,
      list: payload.list
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["o" /* GET_USERS_LIST_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      loading: false,
      loaded: false,
      list: [],
      loadError: payload.error
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["p" /* CREATE_USER_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      isCreating: true,
      created: false,
      newGroup: payload.newGroup
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["q" /* CREATE_USER_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      isCreating: false,
      created: true,
      newGroup: payload.newGroup
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["r" /* CREATE_USER_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: false,
      createError: payload.error
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["s" /* REMOVE_USERS_REQUEST */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: true,
      removed: false,
      selectedUsers: payload.selectedUsers
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["t" /* REMOVE_USERS_SUCCESS */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: true
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["u" /* REMOVE_USERS_FAILURE */]]: (state, payload) => {
    return _extends({}, state, {
      isRemoving: false,
      removed: false,
      removeError: payload.error
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["v" /* ASSIGN_USERS_REQUEST */]]: (state, { groupName, selectedUsers }) => {
    return _extends({}, state, {
      assigning: true,
      assigned: false,
      assignError: null,
      groupName,
      selectedUsers
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["w" /* ASSIGN_USERS_SUCCESS */]]: (state, { groupName, selectedUsers }) => {
    return _extends({}, state, {
      assigning: false,
      assigned: true,
      assignError: null,
      groupName,
      selectedUsers
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["x" /* ASSIGN_USERS_FAILURE */]]: (state, { groupName, error }) => {
    return _extends({}, state, {
      assigning: false,
      assigned: true,
      assignError: error,
      groupName
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["y" /* UNASSIGN_USERS_REQUEST */]]: (state, { groupName, selectedUsers }) => {
    return _extends({}, state, {
      unassigning: true,
      unassigned: false,
      unassignError: null,
      groupName,
      selectedUsers
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["z" /* UNASSIGN_USERS_SUCCESS */]]: (state, { groupName, selectedUsers }) => {
    return _extends({}, state, {
      unassigning: false,
      unassigned: true,
      unassignError: null,
      groupName,
      selectedUsers
    });
  },
  [__WEBPACK_IMPORTED_MODULE_1__constants__["A" /* UNASSIGN_USERS_FAILURE */]]: (state, { groupName, error }) => {
    return _extends({}, state, {
      unassigning: false,
      unassigned: true,
      unassignError: error,
      groupName
    });
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (true) {
      const { error } = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          error.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          error.message
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_groups__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Groups_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Groups_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Groups_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/groups/Groups.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











class Groups extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props, context) {
    super(props, context);

    // const {list} = props;


    // if(_.isArray(list) && list.length){
    //   context.store.dispatch(getUserGroupsSuccess(list));
    // }

    this.createUserGroup = _asyncToGenerator(function* () {
      const { newGroupName } = this.state;
      yield this.props.actions.createUserGroup(newGroupName);
      if (this.props.created) {
        this.hideGroupDialog();
        this.props.actions.loadUserGroups();
      } else {
        this.setState({
          errorMessage: 'This group can not be created!'
        });
      }
    });
    this.removeSelectedUserGroups = _asyncToGenerator(function* () {
      const { selectedRows } = this.state;
      yield this.props.actions.removeSelectedUserGroups(selectedRows.filter(function (item) {
        return !item.users.length;
      }));
      if (this.props.removed) {
        this.hideRemoveConfirm();
        this.props.actions.loadUserGroups();
      } else {
        this.setState({
          removeError: 'One or more of these groups can not be removed!'
        });
      }
    });

    this.showGroupDialog = () => {
      this.setState({
        showDialog: true,
        newGroupName: ''
      });
    };

    this.hideGroupDialog = () => {
      this.setState({
        showDialog: false,
        newGroupName: '',
        errorMessage: ''
      });
    };

    this.showRemoveConfirm = () => {
      this.setState({
        showRemoveConfirm: true
      });
    };

    this.hideRemoveConfirm = () => {
      this.setState({
        showRemoveConfirm: false,
        removeError: ''
      });
    };

    this.onSelectionChanged = rows => {
      const { list = [] } = this.props;
      const selectedRows = rows.map(i => list[i]);
      this.setState({
        selectedRows
      });
    };

    this.state = {
      newGroupName: '',
      showDialog: false,
      showRemoveConfirm: false,
      errorMessage: '',
      removeError: ''
      // list
    };

    this.createUserGroup = this.createUserGroup.bind(this);
    this.removeSelectedUserGroups = this.removeSelectedUserGroups.bind(this);
  }

  // componentWillReceiveProps({list}){
  //   this.setState({
  //     list
  //   });
  // }

  componentDidMount() {
    const { loaded } = this.props;
    if (!loaded) {
      // this.props.actions.loadUserGroups();
    }
  }

  getList() {
    let { list = [] } = this.props;
    list.forEach(item => {
      item.link = `/groups/${item.name}`;
    });
    return list;
  }

  render() {
    const list = this.getList();
    const { loading, loaded, loadError } = this.props;
    const { showDialog, showRemoveConfirm, errorMessage, selectedRows = [], removeError, newGroupName } = this.state;
    const groupsCanBeRemoved = !!selectedRows.filter(item => !item.users.length).length;

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
            cellFormatter: users => users.length,
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
            cellFormatter: link => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
              { to: link, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-users', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              })
            ),
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
            onChange: e => {
              this.setState({ newGroupName: e.target.value });
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
}

const mapStateToProps = state => {
  return _extends({}, state.groups);
};

const mapDispatchToProps = dispatch => ({
  actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_1__actions_groups__, dispatch),
  dispatch
});

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Groups_css___default.a)(Groups));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Groups__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_Users__ = __webpack_require__(23);
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







const title = 'Groups';

/* harmony default export */ __webpack_exports__["default"] = [{
  path: '/groups/:name',
  action({ params, store }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadUsersList */])(store);
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* loadGroupUsersList */])(store, params.name);
      return {
        title,
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
      };
    })();
  }
}, {
  path: '/groups',
  action({ store }) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* loadUserGroupsList */])(store);
      return {
        title,
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
      };
    })();
  }
}];

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Home_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/home/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { groups, users } = this.props;
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
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    users: state.users
  };
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Home_css___default.a)(Home));

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(9);
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

  action({ store }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* loadUsersList */])(store);
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* loadUserGroupsList */])(store);
      return {
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
      };
    })();
  }

};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
/* harmony default export */ __webpack_exports__["a"] = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(46).default, __webpack_require__(50).default, ...__webpack_require__(44).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(49).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `InterNations: ${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    })();
  }

};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
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
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(48);
var _jsxFileName = '/home/fixjs/Desktop/InterNations/user-management-app/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = {

  path: '*',

  action() {
    return {
      title,
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users__ = __webpack_require__(23);
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






const title = 'Users';

/* harmony default export */ __webpack_exports__["default"] = {

  path: '/users',

  action({ store }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadUsersList */])(store);
      return {
        title,
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
      };
    })();
  }

};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (false) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetchKnowingCookie('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createFetchKnowingCookie({ cookie }) {
  if (true) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        const headers = _extends({}, options.headers, {
          cookie
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, _extends({}, options, { headers }));
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  const fetchKnowingCookie = createFetchKnowingCookie(config);
  const graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest,
    history: config.history
  };
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;


// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    const formattedPayload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(action.payload, {
      colors: true
    });
    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 20px !important;\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nnav>a:hover{\n  color: #000 !important;\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n.Layout-logo-E-aBC{\n  width: 185px;\n}", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/base.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADlcD,yEAAyE;;AEVzE;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,2BAA8B;EAA9B,8BAA8B;CAC/B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,uBAAuB;CACxB;;AFhCD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF;;AAED;EACE,aAAa;CACd","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../base.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n.logo{\n  width: 185px;\n}","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"logo": "Layout-logo-E-aBC"
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.UsersDataTable-usersDataTable-2cS8f{\n\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(3), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(3),\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(4), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(4),\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(5), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(5){\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 761px) and (max-width: 1024px) {\n  .UsersDataTable-usersDataTable-2cS8f td:nth-of-type(5), .UsersDataTable-usersDataTable-2cS8f th:nth-of-type(5){\n    display: none;\n  }\n}", "", {"version":3,"sources":["/./components/UsersDataTable/UsersDataTable.css"],"names":[],"mappings":";AACA;;CAEC;;AAED;EACE;;;IAGE,cAAc;GACf;CACF;;AAED;EACE;IACE,cAAc;GACf;CACF","file":"UsersDataTable.css","sourcesContent":["\n.usersDataTable{\n\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  .usersDataTable td:nth-of-type(3), .usersDataTable th:nth-of-type(3),\n  .usersDataTable td:nth-of-type(4), .usersDataTable th:nth-of-type(4),\n  .usersDataTable td:nth-of-type(5), .usersDataTable th:nth-of-type(5){\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 761px) and (max-width: 1024px) {\n  .usersDataTable td:nth-of-type(5), .usersDataTable th:nth-of-type(5){\n    display: none;\n  }\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"usersDataTable": "UsersDataTable-usersDataTable-2cS8f"
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 20px !important;\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\n\nnav>a:hover{\n  color: #000 !important;\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/base.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,2BAA8B;EAA9B,8BAA8B;CAC/B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;;AAED;EACE,uBAAuB;EACvB,4BAA4B;CAC7B;;AACD;EACE,uBAAuB;CACxB;;ADnCD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/base.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\ndialog {\n  width: 380px !important;\n}\n\ndialog h4 {\n  font-size: 1.25rem !important;\n}\n\nheader nav a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nheader nav a:hover{\n  color: #ffb400 !important;\n  font-weight:bold !important;\n}\n\nnav>a{\n  color: #fff !important;\n  font-weight:bold !important;\n}\nnav>a:hover{\n  color: #000 !important;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "NotFound-root-3whbd",
	"container": "NotFound-container-1BOHG"
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(54);
    var insertCss = __webpack_require__(2);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(55);
    var insertCss = __webpack_require__(2);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(57);
    var insertCss = __webpack_require__(2);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(58);
    var insertCss = __webpack_require__(2);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(59);
    var insertCss = __webpack_require__(2);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(60);
    var insertCss = __webpack_require__(2);

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
/* 67 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-mdl/extra/material.js");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
module.exports = __webpack_require__(28);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map