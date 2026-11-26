/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
var defaultOptions = {
  loginsSkipped: 0,
  facebookWanted: true,
  instagramWanted: true,
  linkedinWanted: true,
  tumblrWanted: false,
  twitterWanted: true
};
// export const local = chrome.storage.local;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Debug: in about:debugging#/runtime/this-firefox, click on "Inspect" for the extension, disable popup auto-hide in the
// ••• menu, click on the extension symbol, click on the button to the left of the ••• menu, select "popup.html".


var local = chrome.storage.local;
function setElement(x, value) {
  var element = document.getElementById(x);
  local.get(x, function (data) {
    var d = data[x];
    if (d === undefined) {
      d = _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[x];
      local.set(_defineProperty({}, x, d));
    }
    element[value] = d;
  });
}
function addListener(x, value, conversion) {
  var element = document.getElementById(x);
  element.addEventListener('change', function (event) {
    var v = event.target[value];
    if (conversion === "int") {
      v = parseInt(v);
    }
    local.set(_defineProperty({}, x, v));
    console.log("Changed " + x + " to " + v);
  });
}
function setElementAndListener(x, value, conversion) {
  setElement(x, value);
  addListener(x, value, conversion);
}
function restoreDefaults() {
  for (var x in _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions) {
    local.set(_defineProperty({}, x, _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[x]));
    var element = document.getElementById(x);
    if (typeof _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[x] === "boolean") {
      element.checked = _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[x];
    } else {
      element.value = _utils_js__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[x];
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  setElement("loginsSkipped", "textContent");
  setElementAndListener("facebookWanted", "checked");
  setElementAndListener("instagramWanted", "checked");
  setElementAndListener("linkedinWanted", "checked");
  setElementAndListener("tumblrWanted", "checked");
  setElementAndListener("twitterWanted", "checked");
  document.getElementById("restoreDefaults").addEventListener('click', restoreDefaults);
});
})();

/******/ })()
;
//# sourceMappingURL=popup.bundle.js.map