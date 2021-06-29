/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const city = 'barranquilla'\nconst url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`\nconst dom = document.querySelector('#content')\n\nfetch(url, {mode: 'cors'})\n.then(response => response.json())\n.then(data => {\n        const p = document.createElement('p')\n        p.innerHTML = data.main.temp - 273.15\n        dom.appendChild(p)\n    })\n.catch(err => console.log(err))\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;