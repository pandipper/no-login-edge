/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForLogins: () => (/* binding */ checkForLogins),
/* harmony export */   closeTwitterLightbox: () => (/* binding */ closeTwitterLightbox),
/* harmony export */   getAttributes: () => (/* binding */ getAttributes),
/* harmony export */   getInstagramRedirectTarget: () => (/* binding */ getInstagramRedirectTarget),
/* harmony export */   getOverlayRoot: () => (/* binding */ getOverlayRoot),
/* harmony export */   getTwitterLargeImageUrl: () => (/* binding */ getTwitterLargeImageUrl),
/* harmony export */   getTwitterOriginalImageUrl: () => (/* binding */ getTwitterOriginalImageUrl),
/* harmony export */   intervalId: () => (/* binding */ intervalId),
/* harmony export */   isInstagramPostLink: () => (/* binding */ isInstagramPostLink),
/* harmony export */   isTwitterMediaImage: () => (/* binding */ isTwitterMediaImage),
/* harmony export */   onInstagramClick: () => (/* binding */ onInstagramClick),
/* harmony export */   onTwitterClick: () => (/* binding */ onTwitterClick),
/* harmony export */   onTwitterKeydown: () => (/* binding */ onTwitterKeydown),
/* harmony export */   openTwitterLightbox: () => (/* binding */ openTwitterLightbox)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var intervalId = {
  value: undefined
};
var closeTranslations = ["Close", "Cerrar", "Fermer", "Schließen", "Chiudere", "Fechar", "Закрыть", "关闭", "閉じる", "닫다", "إغلاق", "बंद करना", "Kapatmak", "Stänga", "Sluiten", "Sulkea", "Lukke", "Lukke", "Zavřít", "Bezárni", "ปิด", "Đóng", "לסגור", "Închide", "Затвори", "Zatvoriť", "Uždaryti", "Aizvērt", "Закрити"];
var closeSelector = "\"".concat(closeTranslations.join('"],[aria-label="'), "\"");
function log(x) {
  console.log('no-login - ' + x);
}
var strToHash = function strToHash(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
var readStorage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, storage) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            storage.get([key], function (result) {
              var value = result[key];
              if (value === undefined) {
                value = _utils__WEBPACK_IMPORTED_MODULE_0__.defaultOptions[key];
                storage.set(_defineProperty({}, key, value));
              }
              resolve(value);
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function readStorage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var readLocalStorage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", readStorage(key, chrome.storage.local));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function readLocalStorage(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var hashes = [];
function logOnce(x) {
  var hash = strToHash(x);
  if (!hashes.includes(hash)) {
    hashes.push(hash);
    log(x);
  }
}
function incrementSkipCounter() {
  chrome.runtime.sendMessage({
    loginsSkipped: true
  });
}
function getAttributes(element) {
  var array = Array.from(element.attributes).reduce(function (attrs, attr) {
    return _objectSpread(_objectSpread({}, attrs), {}, _defineProperty({}, attr.name, attr.value));
  }, {});
  return JSON.stringify(array);
}
function getLinkedinCloseButton() {
  var names = ["public_post_contextual-sign-in-modal_modal_dismiss", "public_profile_contextual-sign-in-modal_modal_dismiss"];
  for (var _i = 0, _names = names; _i < _names.length; _i++) {
    var name = _names[_i];
    var button = document.querySelector('[data-tracking-control-name="' + name + '"]');
    if (button) {
      return button;
    }
  }
}
function removeLinkedinLogin() {
  return _removeLinkedinLogin.apply(this, arguments);
}
function _removeLinkedinLogin() {
  _removeLinkedinLogin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var wanted, close_button, main_content, aria_hidden, catalog_sign_in, element, join_elem, skip_button, htmlString, cssString, styleElement, parser, doc, popupBanner, popupClose, url, params, sessionRedirect, showPopup, hidePopup;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          hidePopup = function _hidePopup() {
            popupBanner.classList.remove('show');
          };
          showPopup = function _showPopup() {
            popupBanner.classList.add('show');
          };
          if (window.location.href.includes('linkedin.com')) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return");
        case 4:
          _context4.next = 6;
          return readLocalStorage('linkedinWanted');
        case 6:
          wanted = _context4.sent;
          if (wanted) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return");
        case 9:
          close_button = getLinkedinCloseButton();
          if (!close_button) {
            _context4.next = 18;
            break;
          }
          main_content = document.getElementById('main-content');
          aria_hidden = main_content.getAttribute('aria-hidden');
          if (!(aria_hidden === 'true')) {
            _context4.next = 18;
            break;
          }
          close_button.click();
          log("Removed linkedin login banner: " + getAttributes(close_button));
          incrementSkipCounter();
          return _context4.abrupt("return");
        case 18:
          catalog_sign_in = document.querySelector('[aria-labelledby="base-contextual-sign-in-modal-modal-header"]');
          if (catalog_sign_in) {
            element = closestTo(catalog_sign_in, document.body);
            log("Removed linkedin login banner: " + getAttributes(element));
            element.remove();
            document.body.classList.remove('overflow-hidden');
            incrementSkipCounter();
          }
          join_elem = document.querySelector('[class="join-form"]');
          if (join_elem) {
            _context4.next = 23;
            break;
          }
          return _context4.abrupt("return");
        case 23:
          skip_button = document.getElementById('no-login-addon-linkedin-google');
          if (!skip_button) {
            _context4.next = 26;
            break;
          }
          return _context4.abrupt("return");
        case 26:
          htmlString = "\n      <div id=\"no-login-addon-popup-banner\" class=\"no-login-addon-popup-banner\">\n        <div class=\"popup-content\">\n          <div class=\"no-login-addon-popup-header\">\n            <span class=\"no-login-addon-close-button\" id=\"no-login-addon-popup-close\">&times;</span>\n          </div>\n          <div class=\"no-login-addon-popup-body\">\n            <h2>Message from your no-login add-on</h2>\n            <span id=\"popup-message\">To skip login, click below; then click on the first link.</span><br/><br/>\n            <a id=\"no-login-addon-linkedin-google\" href=\"\" class=\"no-login-addon-button\">Skip Login</a>\n          </div>\n        </div>\n      </div>\n    ";
          cssString = "\n        .no-login-addon-popup-banner {\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 50vw;\n            height: 50vh;\n            background-color: #f0f0f0;\n            border: 1px solid #ccc;\n            padding: 20px;\n            text-align: center;\n            display: none;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            z-index: 1000; /* Bring the banner to the front */\n        }\n\n        .no-login-addon-popup-banner.show {\n            display: flex;\n        }\n\n        .no-login-addon-popup-banner .popup-content {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n\n        .no-login-addon-popup-banner .no-login-addon-popup-header {\n            width: 100%;\n            height: 40px;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            padding: 10px;\n            border-bottom: 1px solid #ccc;\n        }\n\n        .no-login-addon-popup-banner .no-login-addon-popup-header .no-login-addon-close-button {\n            cursor: pointer;\n            font-size: 18px;\n            font-weight: bold;\n        }\n\n        .no-login-addon-popup-banner .no-login-addon-popup-body {\n            width: 100%;\n            height: calc(100%);\n            padding: 20px;\n            /*display: flex;*/\n            justify-content: center;\n            align-items: center;\n        }\n\n\n        .no-login-addon-button {\n            display: inline-block;\n            padding: 10px 20px;\n            font-size: 16px;\n            color: white;\n            background-color: #007bff;\n            border: none;\n            border-radius: 5px;\n            text-align: center;\n            text-decoration: none;\n        }\n\n        .no-login-addon-button:hover {\n            background-color: #0056b3;\n        }\n    ";
          styleElement = document.createElement('style');
          styleElement.textContent = cssString;
          document.head.appendChild(styleElement);
          parser = new DOMParser();
          doc = parser.parseFromString(htmlString, 'text/html');
          popupBanner = doc.body.firstChild;
          document.body.appendChild(popupBanner);
          popupClose = document.getElementById('no-login-addon-popup-close');
          skip_button = document.getElementById('no-login-addon-linkedin-google');
          url = new URL(window.location.href);
          params = new URLSearchParams(url.search);
          sessionRedirect = params.get('sessionRedirect');
          if (!(sessionRedirect == null)) {
            _context4.next = 42;
            break;
          }
          return _context4.abrupt("return");
        case 42:
          skip_button.href = 'https://www.google.com/search?q=' + sessionRedirect;
          popupClose.addEventListener('click', hidePopup);
          showPopup();
          log("Added linkedin login banner for " + sessionRedirect);
        case 46:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _removeLinkedinLogin.apply(this, arguments);
}
function closestTo(element, to) {
  var parent = element;
  while (parent.parentNode && parent.parentNode !== to) {
    parent = parent.parentNode;
  }
  return parent;
}
var LANDMARK_SELECTOR = '[role="main"], [role="banner"], [role="navigation"], [role="feed"], article, main, nav';
function hasContent(element) {
  return (element.textContent || '').trim().length > 0 || element.querySelector(LANDMARK_SELECTOR);
}

// Climb from a login dialog to the root of the overlay layer that wraps it: the highest ancestor whose
// siblings are all empty (backdrops, spacers). Stops as soon as removing the next ancestor would also
// remove page content, so a login dialog nested inside the app's React mount root never takes the whole
// page down with it (see issue #9).
function getOverlayRoot(element) {
  var current = element;
  while (current.parentElement && current.parentElement !== document.body) {
    var parent = current.parentElement;
    if (parent.querySelector(LANDMARK_SELECTOR) && !current.querySelector(LANDMARK_SELECTOR)) break;
    var siblings = Array.from(parent.children).filter(function (child) {
      return child !== current;
    });
    if (siblings.some(hasContent)) break;
    current = parent;
  }
  return current;
}
function clickButton(close_button) {
  log("Clicking facebook center dialog close button: " + getAttributes(close_button));
  log(close_button.outerHTML);
  close_button.click();
  incrementSkipCounter();
  return true;
}
function checkAllButtons() {
  var close_buttons = document.querySelectorAll('[role="button"]');
  var _iterator = _createForOfIteratorHelper(close_buttons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var close_button = _step.value;
      var text = close_button.querySelector('[class="native-text"]');
      if (text && text.textContent === '󱤅') {
        return clickButton(close_button);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function getFacebookLoginDialog() {
  // Facebook may open several dialogs at once (e.g. the post itself on /posts/ urls, the cookie consent),
  // so pick the one that actually holds the login form instead of the first dialog on the page.
  var form = document.getElementById('login_popup_cta_form');
  if (!form) return null;
  return form.closest('[role="dialog"]');
}
function removeFacebookCenterDialogButton() {
  checkAllButtons();
  var dialog = getFacebookLoginDialog();
  if (!dialog) return;
  var close_buttons = dialog.querySelectorAll('[role="button"]');
  var _iterator2 = _createForOfIteratorHelper(close_buttons),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var close_button = _step2.value;
      if (close_button.querySelector('[data-visualcompletion="css-img"]')) {
        return clickButton(close_button);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function removeFacebookLogin() {
  return _removeFacebookLogin.apply(this, arguments);
}
function _removeFacebookLogin() {
  _removeFacebookLogin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var wanted, banner, skipped, form, element;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (window.location.href.includes('facebook.com')) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return");
        case 2:
          _context5.next = 4;
          return readLocalStorage('facebookWanted');
        case 4:
          wanted = _context5.sent;
          if (wanted) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return");
        case 7:
          // Bottom banner
          banner = document.querySelector('[data-nosnippet=""]');
          if (banner) {
            log("Removed facebook bottom login banner: " + getAttributes(banner));
            banner.remove();
            incrementSkipCounter();
          }

          // Log in center dialog with close button
          skipped = removeFacebookCenterDialogButton();
          if (!skipped) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return");
        case 12:
          // Log in center dialog without close button
          form = document.getElementById('login_popup_cta_form');
          if (form) {
            element = getOverlayRoot(form.closest('[role="dialog"]') || form);
            log("Removed facebook center login dialog login_popup_cta_form: " + getAttributes(element));
            element.remove();
            incrementSkipCounter();
          }
          form = document.querySelector('[class="m fixed-container bottom"]');
          if (form) {
            log("Removed facebook center login banner m fixed-container bottom: " + getAttributes(form));
            form.remove();
            incrementSkipCounter();
          }
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _removeFacebookLogin.apply(this, arguments);
}
function getInstagramRedirectTarget(href) {
  var next;
  try {
    next = new URL(href).searchParams.get('next');
  } catch (e) {
    return null;
  }
  if (!next || !next.startsWith('/')) return null;
  // Drop the tracking query string that instagram appends to the "next" url
  var path = next.split('?')[0].replace(/\/+$/, '');
  if (!path) return null;
  return "https://www.instagram.com" + path + "/";
}
var REDIRECT_COOLDOWN_MS = 10000;
var REDIRECT_TIMESTAMP_KEY = 'no-login-last-redirect';

// Instagram sometimes sends the browser straight back to the login page after we leave it. Without a
// cooldown the add-on and the website would bounce the tab back and forth forever (see issue #4); with it
// the user lands on the login page at most once every few seconds and can act on it themselves.
function redirectedRecently() {
  var last = 0;
  try {
    last = parseInt(window.sessionStorage.getItem(REDIRECT_TIMESTAMP_KEY)) || 0;
  } catch (e) {
    // sessionStorage can be unavailable (e.g. storage disabled); fall back to always redirecting
  }
  var elapsed = Date.now() - last;
  if (elapsed < REDIRECT_COOLDOWN_MS) {
    logOnce("Skipping instagram login redirect: already redirected " + elapsed + " ms ago");
    return true;
  }
  return false;
}
function markRedirected() {
  try {
    window.sessionStorage.setItem(REDIRECT_TIMESTAMP_KEY, String(Date.now()));
  } catch (e) {}
}

// Clicking a post in a profile grid or in the "more posts" strip asks instagram's single-page app to open it in a
// modal, which logged-out visitors are not allowed to do: the app shows the login dialog instead (which the add-on then
// closes, so nothing seems to happen). The post page itself renders fine when loaded directly, so turn a plain left
// click on a post link into a regular same-tab navigation. Modified clicks keep their browser behaviour (new tab, ...).
function isInstagramPostLink(anchor) {
  if (!anchor || !anchor.getAttribute) return false;
  var href = anchor.getAttribute('href') || '';
  return /^(https?:\/\/(www\.)?instagram\.com)?\/([^/?#]+\/)?(p|reel|reels)\/[^/?#]+/.test(href);
}
function onInstagramClick(event) {
  var navigate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (url) {
    return window.location.assign(url);
  };
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (event.defaultPrevented) return;
  var anchor = event.target.closest ? event.target.closest('a[href]') : null;
  if (!isInstagramPostLink(anchor)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  log("Opening instagram post in the same tab instead of the login-gated modal: " + anchor.href);
  navigate(anchor.href);
}
var instagramClickHandlerInstalled = false;
function installInstagramClickHandler() {
  if (instagramClickHandlerInstalled) return;
  instagramClickHandlerInstalled = true;
  // Capture phase, so the handler runs before the single-page app's own click handling.
  document.addEventListener('click', onInstagramClick, true);
}
function removeInstagramLogin() {
  return _removeInstagramLogin.apply(this, arguments);
}
function _removeInstagramLogin() {
  _removeInstagramLogin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var wanted, url, buttons, _iterator3, _step3, button, banner, close_buttons, _iterator4, _step4, close_button, form, element, articles, article, _element;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (window.location.href.includes('instagram.com')) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return");
        case 2:
          _context6.next = 4;
          return readLocalStorage('instagramWanted');
        case 4:
          wanted = _context6.sent;
          if (wanted) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return");
        case 7:
          installInstagramClickHandler();
          if (!window.location.href.includes('login/?next')) {
            _context6.next = 12;
            break;
          }
          url = getInstagramRedirectTarget(window.location.href);
          if (url && !redirectedRecently()) {
            markRedirected();
            log("Redirecting to " + url);
            clearInterval(intervalId.value);
            window.location.replace(url);
          }
          return _context6.abrupt("return");
        case 12:
          buttons = document.getElementsByTagName('button');
          _iterator3 = _createForOfIteratorHelper(buttons);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              button = _step3.value;
              banner = button.querySelector("[aria-label=".concat(closeSelector, "]"));
              if (banner && typeof button.click === 'function') {
                log("Removed instagram login banner: " + getAttributes(button));
                button.click();
                incrementSkipCounter();
              }
            }

            // let dialog = document.querySelector('[role="dialog"]');
            // if (dialog && !dialog.getAttribute('aria-label')) {
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          close_buttons = document.querySelectorAll('[role="button"]');
          _iterator4 = _createForOfIteratorHelper(close_buttons);
          _context6.prev = 17;
          _iterator4.s();
        case 19:
          if ((_step4 = _iterator4.n()).done) {
            _context6.next = 28;
            break;
          }
          close_button = _step4.value;
          if (!(close_button && close_button.getElementsByTagName('polyline').length > 0)) {
            _context6.next = 26;
            break;
          }
          log("Removed instagram center login banner: " + getAttributes(close_button));
          close_button.click();
          incrementSkipCounter();
          return _context6.abrupt("return");
        case 26:
          _context6.next = 19;
          break;
        case 28:
          _context6.next = 33;
          break;
        case 30:
          _context6.prev = 30;
          _context6.t0 = _context6["catch"](17);
          _iterator4.e(_context6.t0);
        case 33:
          _context6.prev = 33;
          _iterator4.f();
          return _context6.finish(33);
        case 36:
          // Log in center dialog without close button
          form = document.getElementById('loginForm');
          if (form) {
            element = getOverlayRoot(form.closest('[role="dialog"]') || form);
            log("Removed instagram center login dialog loginForm: " + getAttributes(element));
            element.remove();
            incrementSkipCounter();
          }
          form = document.querySelector('[href="/accounts/signup/phone"]');
          if (form) {
            articles = document.getElementsByTagName('article');
            if (articles.length > 0) {
              article = articles[articles.length - 1];
              _element = article.nextElementSibling;
              log("Removed instagram center login dialog href: " + getAttributes(_element));
              _element.remove();
              incrementSkipCounter();
            }
          }

          // }

          // let close_button = dialog.querySelector('[role="button"]');
          // if (!close_button) {
          //     return;
          // }
          // close_button.click();
          // log("Removed instagram login banner");
        case 40:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[17, 30, 33, 36]]);
  }));
  return _removeInstagramLogin.apply(this, arguments);
}
var LIGHTBOX_ID = 'no-login-addon-lightbox';
function isTwitterMediaImage(element) {
  return !!(element && element.tagName === 'IMG' && /pbs\.twimg\.com\/media\//.test(element.src || ''));
}

// X's CDN only serves the original size as jpg (the page itself uses webp for the resized variants).
function getTwitterOriginalImageUrl(src) {
  var url = new URL(src);
  url.searchParams.set('format', 'jpg');
  url.searchParams.set('name', 'orig');
  return url.toString();
}
function getTwitterLargeImageUrl(src) {
  var url = new URL(src);
  url.searchParams.set('name', 'large');
  return url.toString();
}
function closeTwitterLightbox() {
  var lightbox = document.getElementById(LIGHTBOX_ID);
  if (lightbox) lightbox.remove();
}
function openTwitterLightbox(src, fallbackSrc) {
  closeTwitterLightbox();
  var lightbox = document.createElement('div');
  lightbox.id = LIGHTBOX_ID;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Image');
  lightbox.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' + 'background:rgba(0,0,0,0.9);cursor:zoom-out;margin:0;padding:0;';
  var image = document.createElement('img');
  image.src = src;
  image.alt = '';
  if (fallbackSrc && fallbackSrc !== src) {
    image.addEventListener('error', function () {
      log("Original image unavailable, falling back to " + fallbackSrc);
      image.src = fallbackSrc;
    }, {
      once: true
    });
  }
  image.style.cssText = 'max-width:100vw;max-height:100vh;object-fit:contain;display:block;';
  var close = document.createElement('button');
  close.type = 'button';
  close.textContent = "\xD7";
  close.setAttribute('aria-label', 'Close');
  close.style.cssText = 'position:absolute;top:12px;right:16px;background:none;border:none;color:#fff;font-size:36px;line-height:1;cursor:pointer;';
  lightbox.appendChild(image);
  lightbox.appendChild(close);
  document.body.appendChild(lightbox);
  return lightbox;
}

// X (logged out) opens a "Don't miss what's happening" login card whenever a photo is clicked, since the media viewer
// needs an account. Show the full-size image in a simple lightbox of our own instead.
function onTwitterClick(event) {
  var navigate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (url) {
    return window.location.assign(url);
  };
  var target = event.target;
  if (!target || !target.closest) return;
  if (target.closest('#' + LIGHTBOX_ID)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    closeTwitterLightbox();
    return;
  }
  if (event.type === 'click' && (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) return;
  if (isTwitterMediaImage(target) && target.closest('article')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.type !== 'click') return;
    var src = getTwitterOriginalImageUrl(target.src);
    log("Opening twitter image in a lightbox instead of the login card: " + src);
    openTwitterLightbox(src, getTwitterLargeImageUrl(target.src));
    incrementSkipCounter();
    return;
  }
  // Clicking the body of a post would open it in place, which logged-out visitors are not allowed to do (the page
  // shows the login card instead). Open the post's own page, like a plain link would.
  if (target.closest('a[href], button, [role="button"], video, audio, input, textarea')) return;
  var post = target.closest('[data-href*="/status/"]');
  if (!post) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (event.type !== 'click') return;
  if (window.getSelection && String(window.getSelection()).length > 0) return;
  var url = new URL(post.getAttribute('data-href'), window.location.href).toString();
  if (url === window.location.href) return;
  log("Opening twitter post page instead of the login card: " + url);
  navigate(url);
}
function onTwitterKeydown(event) {
  if (event.key === 'Escape' && document.getElementById(LIGHTBOX_ID)) {
    event.stopImmediatePropagation();
    closeTwitterLightbox();
  }
}
var twitterClickHandlerInstalled = false;
function installTwitterClickHandler() {
  if (twitterClickHandlerInstalled) return;
  twitterClickHandlerInstalled = true;
  // Capture phase on the document runs before the page's own handlers on the media elements.
  for (var _i2 = 0, _arr = ['pointerdown', 'mousedown', 'click']; _i2 < _arr.length; _i2++) {
    var type = _arr[_i2];
    document.addEventListener(type, onTwitterClick, true);
  }
  document.addEventListener('keydown', onTwitterKeydown, true);
}

// The login card X shows after clicking on media, "Show more", etc. It has its own close button, which also
// restores the page's scrolling, so prefer clicking it over removing the card.
function closeTwitterEngagementModal() {
  var modal = document.querySelector('[data-engagement-modal]');
  if (!modal) return;
  var close_button = Array.from(modal.querySelectorAll('button')).find(function (button) {
    return button.querySelector('svg[data-icon="icon-close-md"]');
  }) || modal.querySelector('button');
  if (close_button) {
    log("Closing twitter login card: " + getAttributes(close_button));
    close_button.click();
  } else {
    log("Removing twitter login card: " + getAttributes(modal));
    modal.remove();
    document.body.style.overflow = '';
  }
  incrementSkipCounter();
}
function removeTwitterLogin() {
  return _removeTwitterLogin.apply(this, arguments);
}
function _removeTwitterLogin() {
  _removeTwitterLogin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var wanted, _iterator5, _step5, inert, parent, overlay, _iterator7, _step7, link, banners, _iterator6, _step6, banner;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(!window.location.href.includes('x.com') && !window.location.href.includes('twitter.com'))) {
            _context7.next = 2;
            break;
          }
          return _context7.abrupt("return");
        case 2:
          _context7.next = 4;
          return readLocalStorage('twitterWanted');
        case 4:
          wanted = _context7.sent;
          if (wanted) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return");
        case 7:
          installTwitterClickHandler();
          closeTwitterEngagementModal();

          // X freezes each photo/video with the "inert" attribute and lays a "View media"
          // link over it that opens the login gate when clicked. Remove that overlay and
          // un-freeze the media so its own controls (video player, gallery "Next" button)
          // work again, then strip the login-gated links on the media itself so clicking it
          // no longer opens the popup.
          _iterator5 = _createForOfIteratorHelper(document.querySelectorAll('[inert]'));
          _context7.prev = 10;
          _iterator5.s();
        case 12:
          if ((_step5 = _iterator5.n()).done) {
            _context7.next = 28;
            break;
          }
          inert = _step5.value;
          parent = inert.parentElement;
          if (parent) {
            _context7.next = 17;
            break;
          }
          return _context7.abrupt("continue", 26);
        case 17:
          overlay = parent.querySelector(':scope > a[href*="/photo/"], :scope > a[href*="/video/"]');
          if (overlay) {
            _context7.next = 20;
            break;
          }
          return _context7.abrupt("continue", 26);
        case 20:
          log("Disabled twitter media login gate: " + getAttributes(overlay));
          overlay.remove();
          inert.removeAttribute('inert');
          _iterator7 = _createForOfIteratorHelper(inert.querySelectorAll('a[href*="/photo/"], a[href*="/video/"]'));
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              link = _step7.value;
              link.removeAttribute('href');
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          incrementSkipCounter();
        case 26:
          _context7.next = 12;
          break;
        case 28:
          _context7.next = 33;
          break;
        case 30:
          _context7.prev = 30;
          _context7.t0 = _context7["catch"](10);
          _iterator5.e(_context7.t0);
        case 33:
          _context7.prev = 33;
          _iterator5.f();
          return _context7.finish(33);
        case 36:
          // Bottom "Don't miss what's happening" sign-up banner
          banners = document.querySelectorAll('.fixed.bottom-0');
          _iterator6 = _createForOfIteratorHelper(banners);
          _context7.prev = 38;
          _iterator6.s();
        case 40:
          if ((_step6 = _iterator6.n()).done) {
            _context7.next = 49;
            break;
          }
          banner = _step6.value;
          if (!banner.querySelector('[href*="/i/jf/onboarding/web"]')) {
            _context7.next = 47;
            break;
          }
          log("Removed twitter bottom login banner: " + getAttributes(banner));
          banner.remove();
          incrementSkipCounter();
          return _context7.abrupt("break", 49);
        case 47:
          _context7.next = 40;
          break;
        case 49:
          _context7.next = 54;
          break;
        case 51:
          _context7.prev = 51;
          _context7.t1 = _context7["catch"](38);
          _iterator6.e(_context7.t1);
        case 54:
          _context7.prev = 54;
          _iterator6.f();
          return _context7.finish(54);
        case 57:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[10, 30, 33, 36], [38, 51, 54, 57]]);
  }));
  return _removeTwitterLogin.apply(this, arguments);
}
function removeTumblrLogin() {
  return _removeTumblrLogin.apply(this, arguments);
}
function _removeTumblrLogin() {
  _removeTumblrLogin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var wanted;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (window.location.href.includes('tumblr.com')) {
            _context8.next = 2;
            break;
          }
          return _context8.abrupt("return");
        case 2:
          _context8.next = 4;
          return readLocalStorage('tumblrWanted');
        case 4:
          wanted = _context8.sent;
          if (wanted) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return");
        case 7:
          if (true) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return");
        case 11:
          log("Removed tumblr center login dialog from " /* node info, see other similar functions() */);
          // remove glass-container node
          // remove bottom login banner

          incrementSkipCounter(); // doublecheck what this is for
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _removeTumblrLogin.apply(this, arguments);
}
var checkIfActiveTab = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            chrome.runtime.sendMessage({
              message: "is_active_tab"
            }, function (response) {
              resolve(response.isActiveTab);
            });
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkIfActiveTab() {
    return _ref3.apply(this, arguments);
  };
}();
function checkForLogins() {
  return _checkForLogins.apply(this, arguments);
}
function _checkForLogins() {
  _checkForLogins = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var isActiveTab;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          logOnce("intervalId: " + intervalId.value);
          _context9.next = 3;
          return checkIfActiveTab();
        case 3:
          isActiveTab = _context9.sent;
          if (!isActiveTab) {
            _context9.next = 15;
            break;
          }
          _context9.next = 7;
          return removeLinkedinLogin();
        case 7:
          _context9.next = 9;
          return removeFacebookLogin();
        case 9:
          _context9.next = 11;
          return removeInstagramLogin();
        case 11:
          _context9.next = 13;
          return removeTwitterLogin();
        case 13:
          _context9.next = 15;
          return removeTumblrLogin();
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _checkForLogins.apply(this, arguments);
}

/***/ }),

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
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./src/core.js");
// Debug: ctrl+shift+i, click on the extension's tab.


if (!window.contentScriptInitialized) {
  window.contentScriptInitialized = true;
  _core_js__WEBPACK_IMPORTED_MODULE_0__.intervalId.value = setInterval(_core_js__WEBPACK_IMPORTED_MODULE_0__.checkForLogins, 200);
  console.log("no-login - Content script loaded: " + _core_js__WEBPACK_IMPORTED_MODULE_0__.intervalId.value);
}
})();

/******/ })()
;
//# sourceMappingURL=content.bundle.js.map