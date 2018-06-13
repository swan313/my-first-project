/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/webapp/views/index-index.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/webapp/views/index-index.entry.js":
/*!***********************************************!*\
  !*** ./src/webapp/views/index-index.entry.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/header/header.js */ \"./src/webapp/widgets/header/header.js\");\n\n_widgets_header_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/webapp/views/index-index.entry.js?");

/***/ }),

/***/ "./src/webapp/widgets/header/header.css":
/*!**********************************************!*\
  !*** ./src/webapp/widgets/header/header.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type.\\n| body {\\n|   background: #ccc;\\n|   & .next {\");\n\n//# sourceURL=webpack:///./src/webapp/widgets/header/header.css?");

/***/ }),

/***/ "./src/webapp/widgets/header/header.js":
/*!*********************************************!*\
  !*** ./src/webapp/widgets/header/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n__webpack_require__(/*! ./header.css */ \"./src/webapp/widgets/header/header.css\");\n\nconst header = {\n  init(){\n    console.log('header');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/webapp/widgets/header/header.js?");

/***/ })

/******/ });