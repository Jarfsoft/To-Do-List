import {addNewProject , projectsArray , printProject , taskList , addProjectToLocal}  from './createProject';
import {newTask , clearInputs} from './createTask';


// Declatre main elements: 
const newProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section');
const addProjectBtn = document.querySelector('#add-project-btn');
const newTaskSection = document.querySelector('#new-task-card')
const newTaskBtn = document.querySelector('#add-task-btn');
const fieldsRequired = document.querySelector('#required-fields');
const titleRequired = document.querySelector('#required-title');




// Style
fieldsRequired.classList.add('hide');
titleRequired.classList.add('hide');
newProjectSection.classList.add('hide');
newTaskSection.classList.add('hide');


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
  }
   
  console.log(JSON.parse(localStorage.getItem(title)))
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
    project.addTask();
    let storageTask = JSON.parse(localStorage.getItem(projectName))
    storageTask.taskArray.push(project.taskArray);
    localStorage.setItem(projectName, JSON.stringify(storageTask))
    console.log(storageTask);
    clearInputs();
    taskList();
    console.log(project.taskArray);
    fieldsRequired.classList.add('hide');
    fieldsRequired.classList.remove('show');
    // console.log(JSON.parse(localStorage.getItem('projects')))
  }
});




// Add Html h5 for validation text
// Add validation



