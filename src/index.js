// import createHome from './home';
// import  createNew from './project'
// createHome()
import {addNewProject , projectsArray , printProject , taskList}  from './createProject';
import newTask from './createTask';

function clearInputs(){
  document.querySelector('#task-title').value = '';
  document.querySelector('#task-description').value = '';
  document.querySelector('#dueDate').value = '';
  document.querySelector('#priority').value = '';
}

const newProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section');
const addProjectBtn = document.querySelector('#add-project-btn');
const newTaskSection = document.querySelector('#new-task-card')
const newTaskBtn = document.querySelector('#add-task-btn');
const fieldsRequired = document.querySelector('#required-fields');
fieldsRequired.classList.add('hide');
const titleRequired = document.querySelector('#required-title');
titleRequired.classList.add('hide');


// Style
newProjectSection.classList.add('hide');
newTaskSection.classList.add('hide');


// Events
newProjectBtn.addEventListener('click' , ()=>{
newProjectSection.classList.add('show');
newProjectSection.classList.remove('hide');
newTaskSection.classList.remove('show');
newTaskSection.classList.add('hide');
} )

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
    clearInputs();
    taskList();
    console.log(project.taskArray);
    fieldsRequired.classList.add('hide');
    fieldsRequired.classList.remove('show');
  }
});

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
 
})



// Add Html h5 for validation text
// Add validation
