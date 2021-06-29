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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_showWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showWeather */ \"./src/modules/showWeather.js\");\n\n\n\n\n// Display user form\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.dataForm)()\n\n// Add button action to show weather\nconst btn = document.getElementById('formBtn')\n\nbtn.onclick = _modules_showWeather__WEBPACK_IMPORTED_MODULE_1__.showWeather\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataForm\": () => (/* binding */ dataForm)\n/* harmony export */ });\nconst dataForm = () =>  {\n    const dom = document.querySelector('#content')\n    const form = document.createElement('div')\n    form.innerHTML = `\n    <form>\n        <input type=\"text\" id =\"userCity\" placeholder=\"City\"></input>\n        <button type=\"button\" id=\"formBtn\" >Submit</button>\n    </form>`\n    dom.appendChild(form)\n\n\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/showWeather.js":
/*!************************************!*\
  !*** ./src/modules/showWeather.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showWeather\": () => (/* binding */ showWeather)\n/* harmony export */ });\nconst showWeather = () =>  {\n    // we assign user input to a variable\n\n    const city = userCity.value\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`\n    const dom = document.querySelector('#content')\n\n    fetch(url, {mode: 'cors'})\n    .then(response => response.json())\n    .then(data => {\n            //We create html elements\n            const name = document.createElement('h2')\n            const p = document.createElement('p')\n            const div = document.createElement('div')\n            const image = document.createElement('img')\n\n            // We request the city icon to the api\n            const icon = data.weather[0].icon\n            // We assign the icon to the created image\n            image.src = `https://openweathermap.org/img/w/${icon}.png`\n\n            name.innerText = city\n            p.innerHTML = data.main.temp - 273.15\n            div.innerHTML = image\n\n            dom.appendChild(name)\n            dom.appendChild(p)\n            dom.appendChild(image)\n        })\n    .catch(err => console.log(err))\n\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/showWeather.js?");

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