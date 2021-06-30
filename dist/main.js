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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_apiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiRequest */ \"./src/modules/apiRequest.js\");\n\n\n\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst btn = document.getElementById('formBtn');\nbtn.onclick = _modules_apiRequest__WEBPACK_IMPORTED_MODULE_1__.default;\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiRequest.js":
/*!***********************************!*\
  !*** ./src/modules/apiRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/modules/card.js\");\n\n\nconst request = () => {\n  const userInput = document.getElementById('userCity');\n  const city = userInput.value;\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`;\n\n  fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((data) => {\n      const { icon } = data.weather[0];\n      const { temp } = data.main;\n      const { description } = data.weather[0];\n      const { main } = data.weather[0];\n      const { name } = data;\n      const { country } = data.sys;\n\n      (0,_card__WEBPACK_IMPORTED_MODULE_0__.default)(name, icon, temp, description, country, main);\n\n      const cel = document.getElementById('option1');\n      const fa = document.getElementById('option2');\n      const cel2 = document.getElementById('cel2');\n      const fa2 = document.getElementById('fa2');\n      const showCel = () => {\n        fa2.style.visibility = 'hidden';\n        cel2.style.visibility = 'visible';\n      };\n      const showFa = () => {\n        cel2.style.visibility = 'hidden';\n        fa2.style.visibility = 'visible';\n      };\n      cel.onclick = showCel;\n      fa.onclick = showFa;\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/apiRequest.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayWeather = (city, icon, temp, description, country, main) => {\n  const dom = document.querySelector('#content');\n\n  const div = document.createElement('div');\n  div.setAttribute('id', 'weatherCard');\n  const src = `https://openweathermap.org/img/w/${icon}.png`;\n\n  let today = new Date();\n  const dd = String(today.getDate()).padStart(2, '0');\n  const mm = String(today.getMonth() + 1).padStart(2, '0');\n  const yyyy = today.getFullYear();\n\n  let time = new Date();\n  const minutes = time.getMinutes();\n  const hour = time.getHours();\n\n  today = `${mm}/${dd}/${yyyy}`;\n  time = `${hour}:${minutes}`;\n\n  function random(min, max) {\n    const number = Math.random() * (max - min) + min;\n    return Math.trunc(number);\n  }\n  const number = random(1, 8);\n  const body = document.getElementById('bd');\n  const tempcel = temp - 273.15;\n  const tempfa1 = tempcel * 9;\n  const tempfa = tempfa1 / 5 + 32;\n  body.style.backgroundImage = `url(../../dist/assets/images/bg${number}.jpg)`;\n\n  div.innerHTML = `\n  \n    <div class=\"btn-group btn-group-toggle d-flex justify-content-center toggleMargin\" data-toggle=\"buttons\">\n      <label class=\"btn btn-success\">\n        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Celcious\n      </label>\n      <label class=\"btn btn-success\">\n        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Faranheit\n      </label>\n    </div>\n\n    <div class=\"text-white text-center card-weather card-box\">\n        <h2> ${city} </h2>\n        <h2> ${country} </h2>\n        <h3> ${today} </h3>\n        <h3> ${time} </h3>\n        <h1 id=\"cel2\" class=\"position\"> ${Math.trunc(tempcel)}°C </h1>\n        <h1 id=\"fa2\" class=\"fa position\"> ${Math.trunc(tempfa)}°F </h1>\n        <p> ${main} </p>\n        <p> ${description} </p>\n        <img src=\"${src}\" alt=\"icon\"\">\n    </div>\n    `;\n\n  if (dom.hasChildNodes()) { dom.removeChild(document.getElementById('weatherCard')); }\n  dom.appendChild(div);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);\n\n//# sourceURL=webpack://weatherapp/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataForm = () => {\n  const form = document.createElement('div');\n\n  form.innerHTML = `\n    <h1 class=\"text-white text-center card-weather m-5\"> Free Weather App </h1>\n    <h4 class=\"text-white text-center card-weather m-5\"> Look for your city </h4>\n    <form class=\"d-flex justify-content-center m-5\">\n        <input type=\"text\" class=\"form-control\" id =\"userCity\" placeholder=\"City\"></input>\n        <button type=\"button\" class=\"btn btn-success\" id=\"formBtn\" >Submit</button>\n    </form>`;\n\n  document.body.insertBefore(form, document.body.firstChild);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataForm);\n\n//# sourceURL=webpack://weatherapp/./src/modules/form.js?");

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