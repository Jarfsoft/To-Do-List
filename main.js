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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"printProject\": () => (/* binding */ printProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\nlet projectsArray = [];\r\n\r\nfunction setProjects(){\r\n  if (localStorage.length != 0)\r\n  {\r\n    projectsArray = JSON.parse(localStorage.getItem(\"array\"));\r\n  }\r\n}\r\n\r\nclass Builder{\r\n  constructor(title){\r\n    this.title = title\r\n    this.taskArray = [];\r\n  }\r\n}\r\n\r\nfunction saveProject(){\r\n  localStorage.clear();\r\n  localStorage.setItem('array', JSON.stringify(projectsArray));\r\n}\r\n\r\nfunction addNewProject(){\r\n  const title = document.querySelector('#project-title').value;\r\n  const newProject = new Builder(title);\r\n  projectsArray.push(newProject);\r\n  saveProject();\r\n}\r\n\r\nfunction addTask(project, task){\r\n  project.taskArray.push(task);\r\n  saveProject();\r\n}\r\n\r\nfunction printProject() {\r\n  const title = document.querySelector('#project-title').value;\r\n  let projectList = document.querySelector('.project-list');\r\n  let projectName = document.createElement('h5');\r\n  projectName.innerText = title;\r\n  projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\r\n  projectList.appendChild(projectName);\r\n}\r\n\r\nfunction loadProjects(){\r\n  setProjects();\r\n  const box = document.querySelector('#project-container');\r\n  while (box.firstChild) {\r\n    box.removeChild(box.firstChild);\r\n  }\r\n  for (let i = 0 ; i < projectsArray.length ; i++)\r\n  {\r\n    let projectList = document.querySelector('.project-list');\r\n    let projectName = document.createElement('h5');\r\n    projectName.innerText = projectsArray[i].title;\r\n    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';\r\n    projectList.appendChild(projectName);\r\n  }\r\n}\r\n\r\nloadProjects();\r\n\r\nfunction loadTasks(index){\r\n  let x = document.querySelector('.task-box');\r\n  while(x != null)\r\n  {\r\n    x.remove(x.selectedIndex);\r\n    x = document.querySelector('.task-box');\r\n  }\r\n  for (let task of projectsArray[index].taskArray)\r\n  { \r\n    // Create elemetns:\r\n    const taskMainDiv = document.createElement('div');\r\n    const taskCardHeader = document.createElement('div');\r\n    const taskCardDiv = document.createElement('div');\r\n    const taskCardTitle = document.createElement('h1');\r\n    const taskCardDescription = document.createElement('p');\r\n    const taskCardDate =  document.createElement('p');\r\n    const taskCardPriority = document.createElement('div');\r\n    const taskCardEdit = document.createElement('button');\r\n    const taskCardDelete = document.createElement('button');\r\n\r\n    // Style\r\n    taskMainDiv.classList = 'card m-1 task-card task-box';\r\n    taskCardHeader.classList = 'card-header bg-primary';\r\n    taskCardDiv.classList = 'card-body';\r\n    taskCardTitle.classList = 'card-title';\r\n    taskCardDescription.classList = 'card-text';\r\n    taskCardDate.classList = 'card-text';\r\n    taskCardPriority.classList = 'card-body';\r\n    taskCardEdit.classList = 'btn btn-secondary p-1 m-1 edit-task';\r\n    taskCardDelete.classList = 'btn btn-danger p-1 m-1 delete-task'\r\n\r\n    // Structure:\r\n    document.querySelector('.col-6').appendChild(taskMainDiv);\r\n    taskMainDiv.appendChild(taskCardHeader);\r\n    taskMainDiv.appendChild(taskCardDiv);\r\n    taskCardDiv.appendChild(taskCardTitle);\r\n    taskCardDiv.appendChild(taskCardDescription);\r\n    taskCardDiv.appendChild(taskCardDate);\r\n    taskCardDiv.appendChild(taskCardPriority);\r\n    taskCardDiv.appendChild(taskCardEdit);\r\n    taskCardDiv.appendChild(taskCardDelete);\r\n    \r\n\r\n   \r\n\r\n    // Fill the data\r\n    taskCardEdit.innerText = 'Edit This Task';\r\n    taskCardDelete.innerText = 'Delete This Task';\r\n    taskCardHeader.innerText = `Task Title : ${task.title}`;\r\n    taskCardDescription.innerText = `Task Details: ${task.description}`;\r\n    taskCardDate.innerText = `Due date : ${task.dueDate}` ;\r\n    if (task.priority === \"1\")\r\n     {\r\n      taskCardPriority.innerText = \"Not That Important\";\r\n      taskCardPriority.classList.add('bg-light');\r\n      taskCardPriority.classList.remove('bg-danger', 'bg-warning')\r\n    }\r\n     else if (task.priority === \"2\") \r\n     {\r\n      taskCardPriority.innerText = \"Important\";\r\n      taskCardPriority.classList.add('bg-warning');\r\n      taskCardPriority.classList.remove('bg-danger', 'bg-light')\r\n    } \r\n    else if (task.priority === \"3\")  {\r\n      taskCardPriority.innerText = \"Very Important\";\r\n      taskCardPriority.classList.add('bg-danger');\r\n      taskCardPriority.classList.remove('bg-warning', 'bg-light')\r\n    }\r\n    taskCardEdit.addEventListener('click', () => {\r\n      document.querySelector('#edit-task-div').classList.remove('hide');\r\n      const editTaskBtn = document.querySelector('#edit-task-btn');\r\n      editTaskBtn.addEventListener('click', () => {\r\n        editTask(task);\r\n        saveProject();\r\n        document.querySelector('#edit-task-div').classList.add('hide');\r\n        taskCardHeader.innerText = `Task Title : ${task.title}`;\r\n        taskCardDescription.innerText = `Task Details: ${task.description}`;\r\n        taskCardDate.innerText = `Due date : ${task.dueDate}`;\r\n        if (task.priority === \"1\") {\r\n          taskCardPriority.innerText = \"Not That Important\";\r\n          taskCardPriority.classList.add('bg-light');\r\n          taskCardPriority.classList.remove('bg-danger', 'bg-warning')\r\n        }\r\n        else if (task.priority === \"2\") {\r\n          taskCardPriority.innerText = \"Important\";\r\n          taskCardPriority.classList.add('bg-warning');\r\n          taskCardPriority.classList.remove('bg-danger', 'bg-light')\r\n        }\r\n        else if (task.priority === \"3\") {\r\n          taskCardPriority.innerText = \"Very Important\";\r\n          taskCardPriority.classList.add('bg-danger');\r\n          taskCardPriority.classList.remove('bg-warning', 'bg-light')\r\n        }\r\n      })\r\n      \r\n    });\r\n    taskCardDelete.addEventListener('click' , ()=> {\r\n      projectsArray[index].taskArray.splice(index , 1);\r\n      saveProject();\r\n      taskMainDiv.remove();\r\n    })\r\n  }\r\n}\r\n\r\n\r\nfunction editTask(task) {\r\n  const editTitle = document.querySelector('#task-title-edit');\r\n  const editDes = document.querySelector('#task-description-edit');\r\n  const editDate = document.querySelector('#dueDate-edit');\r\n  const editPriority = document.querySelector('#priority-edit');\r\n  const requiredFields = document.querySelector('#required-fields-edit-task');\r\n  if (!editTitle.value || !editDes.value || !editDate.value || !editPriority.value) {\r\n    requiredFields.classList.add('show');\r\n    requiredFields.classList.remove('hide')\r\n  } else {\r\n  requiredFields.classList.add('hide');\r\n  requiredFields.classList.remove('show')\r\n  task.title = editTitle.value;\r\n  task.description = editDes.value;\r\n  task.dueDate = editDate.value;\r\n  task.priority = editPriority.value \r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsArray);\n\n//# sourceURL=webpack://Second/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"clearInputs\": () => (/* binding */ clearInputs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\r\n  constructor(title, description, dueDate, priority){\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nfunction newTask(){\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const newT = new Task(title,description,dueDate,priority);\r\n  clearInputs();\r\n  return newT;\r\n}\r\n\r\n\r\n\r\nfunction clearInputs(){\r\n  document.querySelector('#task-title').value = '';\r\n  document.querySelector('#task-description').value = '';\r\n  document.querySelector('#dueDate').value = '';\r\n  document.querySelector('#priority').value = '';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://Second/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\n\r\n(0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\r\n\r\nconst newProjectBtn = document.querySelector('#new-project-btn');\r\nconst newProjectSection = document.querySelector('#new-project-section');\r\nconst addProjectBtn = document.querySelector('#add-project-btn');\r\nconst newTaskSection = document.querySelector('#new-task-card')\r\nconst newTaskBtn = document.querySelector('#add-task-btn');\r\nconst fieldsRequired = document.querySelector('#required-fields');\r\nconst titleRequired = document.querySelector('#required-title');\r\nconst editTaskDiv = document.querySelector('#edit-task-div');\r\n\r\nfieldsRequired.classList.add('hide');\r\ntitleRequired.classList.add('hide');\r\nnewProjectSection.classList.add('hide');\r\nnewTaskSection.classList.add('hide');\r\neditTaskDiv.classList.add('hide')\r\n\r\nfunction makeLoop() {\r\n  const projectCards = document.querySelectorAll('.project-name-card');\r\n  for (let card of projectCards) {\r\n    card.addEventListener('click' , ()=> {\r\n      const taskCard = document.querySelector('#new-task-card');\r\n      const projectTitleInTaskCard = document.querySelector('#new-project-task');\r\n      projectTitleInTaskCard.textContent = card.innerText;\r\n      taskCard.classList.remove('hide');\r\n      document.querySelector('#new-project-section').classList.add('hide');\r\n      document.querySelector('#new-project-section').classList.remove('show');\r\n      taskCard.classList.add('show');\r\n      const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectTitleInTaskCard.textContent);\r\n      const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\r\n    })\r\n  }\r\n}\r\n\r\nmakeLoop();\r\n\r\nnewProjectBtn.addEventListener('click' , ()=>{\r\n  fieldsRequired.classList.add('hide');\r\n  fieldsRequired.classList.remove('show');\r\n  let x = document.querySelector('.task-box');\r\n  while(x != null)\r\n  {\r\n    x.remove(x.selectedIndex);\r\n    x = document.querySelector('.task-box');\r\n  }\r\n  newProjectSection.classList.add('show');\r\n  newProjectSection.classList.remove('hide');\r\n  newTaskSection.classList.remove('show');\r\n  newTaskSection.classList.add('hide');\r\n})\r\n\r\naddProjectBtn.addEventListener('click' , ()=>{\r\n  const title = document.querySelector('#project-title').value;\r\n  const isPresent = (project) => project.title === title;\r\n  if (_createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.some(isPresent)) {\r\n    titleRequired.innerText = \"The name of the project is present before!\";\r\n    titleRequired.classList.add('show');\r\n    titleRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n    if (!title) {\r\n      titleRequired.classList.add('show');\r\n      titleRequired.classList.remove('hide');\r\n    }\r\n    else {\r\n      titleRequired.classList.add('hide');\r\n      titleRequired.classList.remove('show');\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\r\n      newProjectSection.classList.add('hide');\r\n      newProjectSection.classList.remove('show');\r\n      document.querySelector('#project-title').value = '';\r\n      makeLoop();\r\n    }\r\n  }\r\n})\r\n\r\nnewTaskBtn.addEventListener('click', () => {\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const projectName = document.querySelector('#new-project-task').innerText;\r\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectName);\r\n  if (!title || !description || !dueDate ||!priority) {\r\n    fieldsRequired.classList.add('show');\r\n    fieldsRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTask)(project,(0,_createTask__WEBPACK_IMPORTED_MODULE_1__.newTask)());\r\n    let x = document.querySelector('.task-box');\r\n    while(x != null)\r\n    {\r\n      x.remove(x.selectedIndex);\r\n      x = document.querySelector('.task-box');\r\n    }\r\n    const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\r\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearInputs)();\r\n    fieldsRequired.classList.add('hide');\r\n    fieldsRequired.classList.remove('show');\r\n  }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://Second/./src/index.js?");

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