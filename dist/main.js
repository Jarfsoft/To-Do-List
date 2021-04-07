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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"printProject\": () => (/* binding */ printProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\nlet projectsArray = [];\r\nif(localStorage.length != 0)\r\n{\r\n  projectsArray = JSON.parse(localStorage.getItem(\"array\"));\r\n  console.log(projectsArray);\r\n}\r\n\r\nclass Builder{\r\n  constructor(title){\r\n    this.title = title\r\n    this.taskArray = [];\r\n  }\r\n\r\n  addProject(){\r\n    projectsArray.push(this);\r\n    localStorage.clear();\r\n    localStorage.setItem('array', JSON.stringify(projectsArray));\r\n  }\r\n\r\n  addTask(){\r\n    this.taskArray.push((0,_createTask__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n    localStorage.clear();\r\n    localStorage.setItem('array', JSON.stringify(projectsArray));\r\n  }\r\n}\r\n\r\n\r\n// Create New project\r\nfunction addNewProject(){\r\n  let taskArray = [];\r\n  const title = document.querySelector('#project-title').value;\r\n  const newProject = new Builder(title , taskArray );\r\n  newProject.addProject();\r\n}\r\n\r\n\r\n// Print the projects on the project's list:\r\n// We will make it: add new project:\r\nfunction printProject() {\r\n   \r\n  // for (let project in projectsArray) \r\n  // for (let i = 0 ; i < projectsArray.length ; i++)\r\n  // {\r\n    const title = document.querySelector('#project-title').value;\r\n    let projectList = document.querySelector('.project-list');\r\n    let projectName = document.createElement('h5');\r\n    projectName.innerText = title;\r\n    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\r\n    projectList.appendChild(projectName);\r\n  }\r\n\r\n\r\n\r\n// We need to isolate loading last projects from adding new projects:\r\nfunction loadProjects(){\r\n  for (let i = 0 ; i < projectsArray.length ; i++)\r\n  {\r\n    let projectList = document.querySelector('.project-list');\r\n    let projectName = document.createElement('h5');\r\n    projectName.innerText = projectsArray[i].title;\r\n    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\r\n    projectList.appendChild(projectName);\r\n  }\r\n}\r\n\r\n// Create Task list inside the project:\r\n function taskList(){\r\n  const projectName = document.querySelector('#new-project-task').innerText;\r\n  const project = projectsArray.find(name => name.title == projectName);\r\n  const taskMainDiv = document.createElement('div');\r\n  const taskCardHeader = document.createElement('div');\r\n  const taskCardDiv = document.createElement('div');\r\n  const taskCardTitle = document.createElement('h1');\r\n  const taskCardDescription = document.createElement('p');\r\n  const taskCardDate =  document.createElement('p');\r\n  const taskCardPriority = document.createElement('div')\r\n\r\n  // Style\r\n  taskMainDiv.classList = 'card m-1 task-card';\r\n  taskCardHeader.classList = 'card-header bg-primary';\r\n  taskCardDiv.classList = 'card-body';\r\n  taskCardTitle.classList = 'card-title';\r\n  taskCardDescription.classList = 'card-text';\r\n  taskCardDate.classList = 'card-text';\r\n  taskCardPriority.classList = 'card-body'\r\n\r\n\r\n  // Structure:\r\n  document.querySelector('.col-6').appendChild(taskMainDiv);\r\n  taskMainDiv.appendChild(taskCardHeader);\r\n  taskMainDiv.appendChild(taskCardDiv);\r\n  taskCardDiv.appendChild(taskCardTitle);\r\n  taskCardDiv.appendChild(taskCardDescription);\r\n  taskCardDiv.appendChild(taskCardDate);\r\n  taskCardDiv.appendChild(taskCardPriority);\r\n  \r\n  // Loop to create task cards:\r\n  for (let task of project.taskArray)\r\n \r\n  {\r\n    taskCardHeader.innerText = `Task Title : ${task.title}`;\r\n    taskCardDescription.innerText = `Task Details: ${task.description}`;\r\n    taskCardDate.innerText = `Due date : ${task.dueDate}` \r\n    if (task.priority === \"1\")\r\n     {\r\n      taskCardPriority.innerText = \"Not That Important\";\r\n      taskCardPriority.classList.add('bg-light');\r\n      taskCardPriority.classList.remove('bg-danger', 'bg-warning')\r\n    }\r\n     else if (task.priority.priority === \"2\") \r\n     {\r\n      taskCardPriority.innerText = \"Important\";\r\n      taskCardPriority.classList.add('bg-warning');\r\n      taskCardPriority.classList.remove('bg-danger', 'bg-light')\r\n    } \r\n    else if (task.priority.priority === \"3\")  {\r\n      taskCardPriority.innerText = \"Very Important\";\r\n      taskCardPriority.classList.add('bg-danger');\r\n      taskCardPriority.classList.remove('bg-warning', 'bg-light')\r\n    }\r\n    }\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsArray);\r\n\r\n\r\n// const projectCards = document.querySelectorAll('.project-name-card')\r\n\r\n\r\n\r\n   // projectName.addEventListener('click', () => {\r\n    //   taskList()\r\n    //   const tasks = document.querySelector('#new-task-card');\r\n    //   const proj = document.querySelector('#new-project-task');\r\n    //   proj.textContent = projectsArray[i].title;\r\n    //   tasks.classList.remove('hide');\r\n    //   document.querySelector('#new-project-section').classList.add('hide');\r\n    //   document.querySelector('#new-project-section').classList.remove('show');\r\n    //   tasks.classList.add('show');\r\n    // });\r\n\r\n\r\n       // projectName.addEventListener('click', () => {\r\n    //   taskList()\r\n    //   const tasks = document.querySelector('#new-task-card');\r\n    //   const proj = document.querySelector('#new-project-task');\r\n    //   proj.textContent = projectsArray[i].title;\r\n    //   tasks.classList.remove('hide');\r\n    //   document.querySelector('#new-project-section').classList.add('hide');\r\n    //   document.querySelector('#new-project-section').classList.remove('show');\r\n    //   tasks.classList.add('show');\r\n    // });\n\n//# sourceURL=webpack://To-Do-List/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"clearInputs\": () => (/* binding */ clearInputs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\r\n  constructor(title, description, dueDate, priority){\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\n// Create new task and push it inside its project:\r\nfunction newTask(){\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const newT = new Task(title,description,dueDate,priority);\r\n  return newT\r\n  ;}\r\n\r\n\r\n// Clear inputs of the task:\r\nfunction clearInputs(){\r\n  document.querySelector('#task-title').value = '';\r\n  document.querySelector('#task-description').value = '';\r\n  document.querySelector('#dueDate').value = '';\r\n  document.querySelector('#priority').value = '';\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\r\n\n\n//# sourceURL=webpack://To-Do-List/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\n\r\n// printProject();\r\n// taskList()\r\n\r\n(0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)()\r\n// Declatre main elements: \r\nconst newProjectBtn = document.querySelector('#new-project-btn');\r\nconst newProjectSection = document.querySelector('#new-project-section');\r\nconst addProjectBtn = document.querySelector('#add-project-btn');\r\nconst newTaskSection = document.querySelector('#new-task-card')\r\nconst newTaskBtn = document.querySelector('#add-task-btn');\r\nconst fieldsRequired = document.querySelector('#required-fields');\r\nconst titleRequired = document.querySelector('#required-title');\r\n\r\n\r\n\r\n\r\n// Style\r\nfieldsRequired.classList.add('hide');\r\ntitleRequired.classList.add('hide');\r\nnewProjectSection.classList.add('hide');\r\nnewTaskSection.classList.add('hide');\r\n\r\n\r\n// Events\r\n// 1- Add new project btn:\r\nnewProjectBtn.addEventListener('click' , ()=>{\r\nnewProjectSection.classList.add('show');\r\nnewProjectSection.classList.remove('hide');\r\nnewTaskSection.classList.remove('show');\r\nnewTaskSection.classList.add('hide');\r\n} )\r\n\r\n// 2- Add the project\r\naddProjectBtn.addEventListener('click' , ()=>{\r\n  const title = document.querySelector('#project-title').value;\r\n  if (!title) {\r\n    titleRequired.classList.add('show');\r\n    titleRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n  titleRequired.classList.add('hide');\r\n  titleRequired.classList.remove('show');\r\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\r\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.printProject)();\r\n  newProjectSection.classList.add('hide');\r\n  newProjectSection.classList.remove('show');\r\n  document.querySelector('#project-title').value = '';\r\n  }\r\n})\r\n\r\n\r\n\r\n// 3- Add new task:\r\nnewTaskBtn.addEventListener('click', () => {\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const projectName = document.querySelector('#new-project-task').innerText;\r\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectName);\r\n  if (!title || !description || !dueDate ||!priority) {\r\n    fieldsRequired.classList.add('show');\r\n    fieldsRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n    project.taskArray.push((0,_createTask__WEBPACK_IMPORTED_MODULE_1__.newTask)());\r\n    localStorage.clear();\r\n    localStorage.setItem('array', JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray));\r\n    // project.addTask();\r\n    // let storageTask = JSON.parse(localStorage.getItem(projectName))\r\n    // storageTask.taskArray.push(project.taskArray);\r\n    // localStorage.setItem(projectName, storageTask)\r\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearInputs)();\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.taskList)();\r\n    // console.log(project.taskArray);\r\n    fieldsRequired.classList.add('hide');\r\n    fieldsRequired.classList.remove('show');\r\n  }\r\n});\r\n\r\n\r\n\r\n// const projectCards = document.querySelectorAll('.project-name-card');\r\n\r\n// projectCards.addEventListener('click' , (e) => {\r\n//   e.target.style.fontSize = '50px'\r\n// })\n\n//# sourceURL=webpack://To-Do-List/./src/index.js?");

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