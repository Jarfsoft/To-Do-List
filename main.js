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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"printProject\": () => (/* binding */ printProject)\n/* harmony export */ });\nlet projectsArray = [];\r\n\r\n\r\nclass Builder{\r\n  constructor(title){\r\n    this.title = title\r\n  }\r\n  addProject(){\r\n    projectsArray.push(this)\r\n  }\r\n}\r\n\r\nfunction addNewProject(){\r\n  const title = document.querySelector('input').value;\r\n  const newProject = new Builder(title);\r\n  newProject.addProject();\r\n}\r\n\r\nfunction printProject() {\r\n  const projectList = document.querySelector('.project-list');\r\n  const projectName = document.createElement('h5');\r\n  for (let project of projectsArray) {\r\n    projectName.innerText = project.title;\r\n    projectName.classList = 'text-center text-primary bg-warning border border-light rounded m-1 p-1'\r\n    projectList.appendChild(projectName);\r\n\r\n  }\r\n}\r\n\r\n// export default addNewProject\n\n//# sourceURL=webpack://To-Do-List/./src/createProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n// import createHome from './home';\r\n// import  createNew from './project'\r\n// createHome()\r\n\r\n\r\nconst newProjectBtn = document.querySelector('#new-project-btn');\r\nconst newProjectSection = document.querySelector('#new-project-section');\r\nconst addProjectBtn = document.querySelector('#add-project-btn');\r\n\r\n// Style\r\nnewProjectSection.classList.add('hide');\r\n\r\n\r\n// Events\r\nnewProjectBtn.addEventListener('click' , ()=>{\r\nnewProjectSection.classList.add('show');\r\nnewProjectSection.classList.remove('hide');\r\n} )\r\n\r\naddProjectBtn.addEventListener('click' , ()=>{\r\n  ;(0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\r\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.printProject)();\r\n  newProjectSection.classList.add('hide');\r\n  newProjectSection.classList.remove('show');\r\n   document.querySelector('input').value = '';\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://To-Do-List/./src/index.js?");

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