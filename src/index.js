import {addNewProject , projectsArray , printProject , taskList , loadProjects , loadTasks , showTaks}  from './createProject';
import {newTask , clearInputs } from './createTask';

// Run Main Functions:
loadProjects();

// Declatre main elements: 
const newProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section');
const addProjectBtn = document.querySelector('#add-project-btn');
const newTaskSection = document.querySelector('#new-task-card')
const newTaskBtn = document.querySelector('#add-task-btn');
const fieldsRequired = document.querySelector('#required-fields');
const titleRequired = document.querySelector('#required-title');
const projectCards = document.querySelectorAll('.project-name-card');

// Style
fieldsRequired.classList.add('hide');
titleRequired.classList.add('hide');
newProjectSection.classList.add('hide');
newTaskSection.classList.add('hide');

function makeLoop() {
  for (let card of projectCards) {
  card.addEventListener('click' , ()=> {
      const taskCard = document.querySelector('#new-task-card');
      const projectTitleInTaskCard = document.querySelector('#new-project-task');
      projectTitleInTaskCard.textContent = card.innerText;
      taskCard.classList.remove('hide');
      document.querySelector('#new-project-section').classList.add('hide');
      document.querySelector('#new-project-section').classList.remove('show');
      taskCard.classList.add('show');
      const project = projectsArray.find(name => name.title == projectTitleInTaskCard.textContent);
      // console.log(projectsArray.indexOf(project));
      const index = projectsArray.indexOf(project);
      loadTasks(index);
     }) 
}}

makeLoop();

// Events
// 1- Add new project btn:
newProjectBtn.addEventListener('click' , ()=>{
newProjectSection.classList.add('show');
newProjectSection.classList.remove('hide');
newTaskSection.classList.remove('show');
newTaskSection.classList.add('hide');
} )

// 2- Add the project
addProjectBtn.addEventListener('click' , ()=>{
  const title = document.querySelector('#project-title').value;
  const isPresent = (project) => project.title === title;
  if (projectsArray.some(isPresent)) {
    titleRequired.innerText = "The name of the project is present before!";
    titleRequired.classList.add('show');
    titleRequired.classList.remove('hide');
  }
  else {
  if (!title) {
    titleRequired.classList.add('show');
    titleRequired.classList.remove('hide');
  }
  else {
  titleRequired.classList.add('hide');
  titleRequired.classList.remove('show');
  addNewProject();
  printProject();
  newProjectSection.classList.add('hide');
  newProjectSection.classList.remove('show');
  document.querySelector('#project-title').value = '';
  } }
  
})


// 3- Add new task:
newTaskBtn.addEventListener('click', () => {
  const title = document.querySelector('#task-title').value;
  const description = document.querySelector('#task-description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const projectName = document.querySelector('#new-project-task').innerText;
  const project = projectsArray.find(name => name.title == projectName);
  if (!title || !description || !dueDate ||!priority) {
    fieldsRequired.classList.add('show');
    fieldsRequired.classList.remove('hide');
  }
  else {
    project.taskArray.push(newTask());
    localStorage.clear();
    localStorage.setItem('array', JSON.stringify(projectsArray));
    taskList(title , description , dueDate , priority);
    // project.addTask();
    // let storageTask = JSON.parse(localStorage.getItem(projectName))
    // storageTask.taskArray.push(project.taskArray);
    // localStorage.setItem(projectName, storageTask)
    clearInputs();
    // console.log(project.taskArray);
    fieldsRequired.classList.add('hide');
    fieldsRequired.classList.remove('show');
  }
});






