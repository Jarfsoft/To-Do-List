import newTask from './createTask';

export let projectsArray = [];


class Builder{
  constructor(title){
    this.title = title
    this.taskArray = [];
  }
  addProject(){
    projectsArray.push(this)
  }
  addTask(){
    this.taskArray.push(newTask());
  }
}

export function addNewProject(){
  const title = document.querySelector('#project-title').value;
  const newProject = new Builder(title);
  newProject.addProject();
}

export function printProject() {
  const projectList = document.querySelector('.project-list');
  const projectName = document.createElement('h5');
  for (let project of projectsArray) {
    projectName.innerText = project.title;
    projectName.classList = 'text-center text-primary bg-warning border border-light rounded m-1 p-1';
    projectName.addEventListener('click', () => {
      const tasks = document.querySelector('#new-task-card');
      const proj = document.querySelector('#new-project-task');
      proj.textContent = project.title;
      tasks.classList.remove('hide');
      document.querySelector('#new-project-section').classList.add('hide');
      document.querySelector('#new-project-section').classList.remove('show');
      tasks.classList.add('show');
    });
    projectList.appendChild(projectName);

  }
}

// export default addNewProject