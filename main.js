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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"printProject\": () => (/* binding */ printProject)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\nlet projectsArray = [];\n\n\nclass Builder{\n  constructor(title){\n    this.title = title\n    this.taskArray = [];\n  }\n  addProject(){\n    projectsArray.push(this)\n  }\n  addTask(){\n    this.taskArray.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.default)());\n  }\n}\n\nfunction addNewProject(){\n  const title = document.querySelector('#project-title').value;\n  const newProject = new Builder(title);\n  newProject.addProject();\n}\n\nfunction printProject() {\n  const projectList = document.querySelector('.project-list');\n  const projectName = document.createElement('h5');\n  for (let project of projectsArray) {\n    projectName.innerText = project.title;\n    projectName.classList = 'text-center text-primary bg-warning border border-light rounded m-1 p-1';\n    projectName.addEventListener('click', () => {\n      const tasks = document.querySelector('#new-task-card');\n      const proj = document.querySelector('#new-project-task');\n      proj.textContent = project.title;\n      tasks.classList.remove('hide');\n      document.querySelector('#new-project-section').classList.add('hide');\n      document.querySelector('#new-project-section').classList.remove('show');\n      tasks.classList.add('show');\n    });\n    projectList.appendChild(projectName);\n\n  }\n}\n\n// export default addNewProject\n\n//# sourceURL=webpack://To-Do-List/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\n  constructor(title, description, dueDate, priority){\n    this.title = title;\n    this.description = dueDate;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nfunction newTask(){\n  const title = document.querySelector('#task-title').value;\n  const description = document.querySelector('#task-description').value;\n  const dueDate = document.querySelector('#dueDate').value;\n  const priority = document.querySelector('#priority').value;\n\n  const newT = new Task(title,description,dueDate,priority);\n\n  return newT;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://To-Do-List/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n// import createHome from './home';\n// import  createNew from './project'\n// createHome()\n\n\n\nfunction clearInputs(){\n  document.querySelector('#task-title').value = '';\n  document.querySelector('#task-description').value = '';\n  document.querySelector('#dueDate').value = '';\n  document.querySelector('#priority').value = '';\n}\n\nconst newProjectBtn = document.querySelector('#new-project-btn');\nconst newProjectSection = document.querySelector('#new-project-section');\nconst addProjectBtn = document.querySelector('#add-project-btn');\nconst newTaskSection = document.querySelector('#new-task-card')\nconst newTaskBtn = document.querySelector('#add-task-btn');\n\n// Style\nnewProjectSection.classList.add('hide');\nnewTaskSection.classList.add('hide');\n\n\n// Events\nnewProjectBtn.addEventListener('click' , ()=>{\nnewProjectSection.classList.add('show');\nnewProjectSection.classList.remove('hide');\nnewTaskSection.classList.remove('show');\nnewTaskSection.classList.add('hide');\n} )\n\nnewTaskBtn.addEventListener('click', () => {\n  clearInputs();\n  const projectName = document.querySelector('#new-project-task').innerText;\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectName);\n\n  project.addTask();\n\n  console.log(project.taskArray);\n});\n\naddProjectBtn.addEventListener('click' , ()=>{\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.printProject)();\n  newProjectSection.classList.add('hide');\n  newProjectSection.classList.remove('show');\n   document.querySelector('#project-title').value = '';\n})\n\n\n\n\n//# sourceURL=webpack://To-Do-List/./src/index.js?");

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