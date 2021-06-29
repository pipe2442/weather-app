/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_apiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiRequest */ \"./src/modules/apiRequest.js\");\n\n\n\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.dataForm)()\nconst btn = document.getElementById('formBtn')\nbtn.onclick = _modules_apiRequest__WEBPACK_IMPORTED_MODULE_1__.request\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiRequest.js":
/*!***********************************!*\
  !*** ./src/modules/apiRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"request\": () => (/* binding */ request)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/modules/card.js\");\n\n\nconst request = () =>  {\n\n    const city = userCity.value\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`\n    \n    fetch(url, {mode: 'cors'})\n    .then(response => response.json())\n    .then(data => {\n        const icon = data.weather[0].icon\n        const temp = data.main.temp - 273.15\n        const description = data.weather[0].description\n        const main = data.weather[0].main\n        const name =  data.name\n        const country = data.sys.country\n\n        ;(0,_card__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(name, icon, temp, description, country, main)\n\n        })\n    .catch(err => console.log(err))\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/apiRequest.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayWeather\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/modules/form.js\");\n\n\nconst displayWeather = (city, icon, temp, description, country, main) => {\n    const dom = document.querySelector('#content')\n\n    const div = document.createElement('div')\n    div.setAttribute(\"id\", \"weatherCard\");\n    const src = `https://openweathermap.org/img/w/${icon}.png`\n \n    div.innerHTML = `\n    <h2> ${city} </h2>\n    <h2> ${country} </h2>\n    <h3> ${temp} </h3>\n    <p> ${main} </p>\n    <p> ${description} </p>\n    <img src=\"${src}\" alt=\"icon\"\">\n    `\n    if (dom.hasChildNodes()) {\n        dom.removeChild(document.getElementById('weatherCard'))   \n    }\n    dom.appendChild(div)   \n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataForm\": () => (/* binding */ dataForm)\n/* harmony export */ });\nconst dataForm = () =>  {\n    const dom = document.querySelector('#content')\n    const form = document.createElement('div')\n    \n    form.innerHTML = `\n    <form>\n        <input type=\"text\" id =\"userCity\" placeholder=\"City\"></input>\n        <button type=\"button\" id=\"formBtn\" >Submit</button>\n    </form>`\n\n    document.body.insertBefore(form, document.body.firstChild);\n\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/form.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;