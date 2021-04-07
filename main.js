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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"printProject\": () => (/* binding */ printProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\nlet projectsArray = [];\n\nfunction setProjects(){\n  if (localStorage.length != 0)\n  {\n    projectsArray = JSON.parse(localStorage.getItem(\"array\"));\n  }\n}\n\nclass Builder{\n  constructor(title){\n    this.title = title\n    this.taskArray = [];\n  }\n}\n\nfunction saveProject(){\n  localStorage.clear();\n  localStorage.setItem('array', JSON.stringify(projectsArray));\n}\n\nfunction addNewProject(){\n  const title = document.querySelector('#project-title').value;\n  const newProject = new Builder(title);\n  projectsArray.push(newProject);\n  saveProject();\n}\n\nfunction addTask(project, task){\n  project.taskArray.push(task);\n  saveProject();\n}\n\nfunction printProject() {\n  const title = document.querySelector('#project-title').value;\n  let projectList = document.querySelector('.project-list');\n  let projectName = document.createElement('h5');\n  projectName.innerText = title;\n  projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\n  projectList.appendChild(projectName);\n}\n\nfunction loadProjects(){\n  setProjects();\n  const box = document.querySelector('#project-container');\n  while (box.firstChild) {\n    box.removeChild(box.firstChild);\n  }\n  for (let i = 0 ; i < projectsArray.length ; i++)\n  {\n    let projectList = document.querySelector('.project-list');\n    let projectName = document.createElement('h5');\n    projectName.innerText = projectsArray[i].title;\n    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\n    projectList.appendChild(projectName);\n  }\n}\n\nloadProjects();\n\nfunction loadTasks(index){\n  let x = document.querySelector('.task-box');\n  while(x != null)\n  {\n    x.remove(x.selectedIndex);\n    x = document.querySelector('.task-box');\n  }\n  for (let task of projectsArray[index].taskArray)\n  { \n    // Create elemetns:\n    const taskMainDiv = document.createElement('div');\n    const taskCardHeader = document.createElement('div');\n    const taskCardDiv = document.createElement('div');\n    const taskCardTitle = document.createElement('h1');\n    const taskCardDescription = document.createElement('p');\n    const taskCardDate =  document.createElement('p');\n    const taskCardPriority = document.createElement('div');\n\n    // Style\n    taskMainDiv.classList = 'card m-1 task-card task-box';\n    taskCardHeader.classList = 'card-header bg-primary';\n    taskCardDiv.classList = 'card-body';\n    taskCardTitle.classList = 'card-title';\n    taskCardDescription.classList = 'card-text';\n    taskCardDate.classList = 'card-text';\n    taskCardPriority.classList = 'card-body';\n\n    // Structure:\n    document.querySelector('.col-6').appendChild(taskMainDiv);\n    taskMainDiv.appendChild(taskCardHeader);\n    taskMainDiv.appendChild(taskCardDiv);\n    taskCardDiv.appendChild(taskCardTitle);\n    taskCardDiv.appendChild(taskCardDescription);\n    taskCardDiv.appendChild(taskCardDate);\n    taskCardDiv.appendChild(taskCardPriority);\n\n    // Fill the data\n    taskCardHeader.innerText = `Task Title : ${task.title}`;\n    taskCardDescription.innerText = `Task Details: ${task.description}`;\n    taskCardDate.innerText = `Due date : ${task.dueDate}` ;\n    if (task.priority === \"1\")\n     {\n      taskCardPriority.innerText = \"Not That Important\";\n      taskCardPriority.classList.add('bg-light');\n      taskCardPriority.classList.remove('bg-danger', 'bg-warning')\n    }\n     else if (task.priority === \"2\") \n     {\n      taskCardPriority.innerText = \"Important\";\n      taskCardPriority.classList.add('bg-warning');\n      taskCardPriority.classList.remove('bg-danger', 'bg-light')\n    } \n    else if (task.priority === \"3\")  {\n      taskCardPriority.innerText = \"Very Important\";\n      taskCardPriority.classList.add('bg-danger');\n      taskCardPriority.classList.remove('bg-warning', 'bg-light')\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsArray);\n\n//# sourceURL=webpack://Second/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"clearInputs\": () => (/* binding */ clearInputs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\n  constructor(title, description, dueDate, priority){\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nfunction newTask(){\n  const title = document.querySelector('#task-title').value;\n  const description = document.querySelector('#task-description').value;\n  const dueDate = document.querySelector('#dueDate').value;\n  const priority = document.querySelector('#priority').value;\n  const newT = new Task(title,description,dueDate,priority);\n  clearInputs();\n  return newT;\n}\n\nfunction clearInputs(){\n  document.querySelector('#task-title').value = '';\n  document.querySelector('#task-description').value = '';\n  document.querySelector('#dueDate').value = '';\n  document.querySelector('#priority').value = '';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://Second/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\n\n(0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\n\nconst newProjectBtn = document.querySelector('#new-project-btn');\nconst newProjectSection = document.querySelector('#new-project-section');\nconst addProjectBtn = document.querySelector('#add-project-btn');\nconst newTaskSection = document.querySelector('#new-task-card')\nconst newTaskBtn = document.querySelector('#add-task-btn');\nconst fieldsRequired = document.querySelector('#required-fields');\nconst titleRequired = document.querySelector('#required-title');\n\nfieldsRequired.classList.add('hide');\ntitleRequired.classList.add('hide');\nnewProjectSection.classList.add('hide');\nnewTaskSection.classList.add('hide');\n\nfunction makeLoop() {\n  const projectCards = document.querySelectorAll('.project-name-card');\n  for (let card of projectCards) {\n    card.addEventListener('click' , ()=> {\n      const taskCard = document.querySelector('#new-task-card');\n      const projectTitleInTaskCard = document.querySelector('#new-project-task');\n      projectTitleInTaskCard.textContent = card.innerText;\n      taskCard.classList.remove('hide');\n      document.querySelector('#new-project-section').classList.add('hide');\n      document.querySelector('#new-project-section').classList.remove('show');\n      taskCard.classList.add('show');\n      const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectTitleInTaskCard.textContent);\n      const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\n    })\n  }\n}\n\nmakeLoop();\n\nnewProjectBtn.addEventListener('click' , ()=>{\n  fieldsRequired.classList.add('hide');\n  fieldsRequired.classList.remove('show');\n  let x = document.querySelector('.task-box');\n  while(x != null)\n  {\n    x.remove(x.selectedIndex);\n    x = document.querySelector('.task-box');\n  }\n  newProjectSection.classList.add('show');\n  newProjectSection.classList.remove('hide');\n  newTaskSection.classList.remove('show');\n  newTaskSection.classList.add('hide');\n})\n\naddProjectBtn.addEventListener('click' , ()=>{\n  const title = document.querySelector('#project-title').value;\n  const isPresent = (project) => project.title === title;\n  if (_createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.some(isPresent)) {\n    titleRequired.innerText = \"The name of the project is present before!\";\n    titleRequired.classList.add('show');\n    titleRequired.classList.remove('hide');\n  }\n  else {\n    if (!title) {\n      titleRequired.classList.add('show');\n      titleRequired.classList.remove('hide');\n    }\n    else {\n      titleRequired.classList.add('hide');\n      titleRequired.classList.remove('show');\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\n      newProjectSection.classList.add('hide');\n      newProjectSection.classList.remove('show');\n      document.querySelector('#project-title').value = '';\n      makeLoop();\n    }\n  }\n})\n\nnewTaskBtn.addEventListener('click', () => {\n  const title = document.querySelector('#task-title').value;\n  const description = document.querySelector('#task-description').value;\n  const dueDate = document.querySelector('#dueDate').value;\n  const priority = document.querySelector('#priority').value;\n  const projectName = document.querySelector('#new-project-task').innerText;\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectName);\n  if (!title || !description || !dueDate ||!priority) {\n    fieldsRequired.classList.add('show');\n    fieldsRequired.classList.remove('hide');\n  }\n  else {\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTask)(project,(0,_createTask__WEBPACK_IMPORTED_MODULE_1__.newTask)());\n    let x = document.querySelector('.task-box');\n    while(x != null)\n    {\n      x.remove(x.selectedIndex);\n      x = document.querySelector('.task-box');\n    }\n    const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearInputs)();\n    fieldsRequired.classList.add('hide');\n    fieldsRequired.classList.remove('show');\n  }\n});\n\n//# sourceURL=webpack://Second/./src/index.js?");

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