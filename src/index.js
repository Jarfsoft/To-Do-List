// import createHome from './home';
// import  createNew from './project'
// createHome()

const addProjectBtn = document.querySelector('#new-project-btn');
const newProjectSection = document.querySelector('#new-project-section')
newProjectSection.classList.add('hide');

addProjectBtn.addEventListener('click' , ()=>{
newProjectSection.classList.add('show');
newProjectSection.classList.remove('hide');
} )
