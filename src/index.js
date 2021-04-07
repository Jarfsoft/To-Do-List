import {addNewProject , projectsArray, addTask , loadProjects , loadTasks }  from './createProject';
import {newTask , clearInputs } from './createTask';

loadProjects();

const newProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section');
const addProjectBtn = document.querySelector('#add-project-btn');
const newTaskSection = document.querySelector('#new-task-card')
const newTaskBtn = document.querySelector('#add-task-btn');
const fieldsRequired = document.querySelector('#required-fields');
const titleRequired = document.querySelector('#required-title');

fieldsRequired.classList.add('hide');
titleRequired.classList.add('hide');
newProjectSection.classList.add('hide');
newTaskSection.classList.add('hide');

function makeLoop() {
  const projectCards = document.querySelectorAll('.project-name-card');
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
      const index = projectsArray.indexOf(project);
      loadTasks(index);
    })
  }
}

makeLoop();

newProjectBtn.addEventListener('click' , ()=>{
  fieldsRequired.classList.add('hide');
  fieldsRequired.classList.remove('show');
  let x = document.querySelector('.task-box');
  while(x != null)
  {
    x.remove(x.selectedIndex);
    x = document.querySelector('.task-box');
  }
  newProjectSection.classList.add('show');
  newProjectSection.classList.remove('hide');
  newTaskSection.classList.remove('show');
  newTaskSection.classList.add('hide');
})

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
      loadProjects();
      newProjectSection.classList.add('hide');
      newProjectSection.classList.remove('show');
      document.querySelector('#project-title').value = '';
      makeLoop();
    }
  }
})

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
    addTask(project,newTask());
    let x = document.querySelector('.task-box');
    while(x != null)
    {
      x.remove(x.selectedIndex);
      x = document.querySelector('.task-box');
    }
    const index = projectsArray.indexOf(project);
    loadTasks(index);
    clearInputs();
    fieldsRequired.classList.add('hide');
    fieldsRequired.classList.remove('show');
  }
});