// import createHome from './home';
// import  createNew from './project'
// createHome()
import {addNewProject , projectsArray , printProject}  from './createProject';
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
  clearInputs();
  const projectName = document.querySelector('#new-project-task').innerText;
  const project = projectsArray.find(name => name.title == projectName);

  project.addTask();

  console.log(project.taskArray);
});

addProjectBtn.addEventListener('click' , ()=>{
  addNewProject();
  printProject();
  newProjectSection.classList.add('hide');
  newProjectSection.classList.remove('show');
   document.querySelector('#project-title').value = '';
})


