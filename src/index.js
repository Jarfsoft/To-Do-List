// import createHome from './home';
// import  createNew from './project'
// createHome()
import {addNewProject , projectsArray , printProject}  from './createProject';

const newProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section');
const addProjectBtn = document.querySelector('#add-project-btn');

// Style
newProjectSection.classList.add('hide');


// Events
newProjectBtn.addEventListener('click' , ()=>{
newProjectSection.classList.add('show');
newProjectSection.classList.remove('hide');
} )

addProjectBtn.addEventListener('click' , ()=>{
  addNewProject();
  printProject();
  newProjectSection.classList.add('hide');
  newProjectSection.classList.remove('show');
   document.querySelector('input').value = '';
})


