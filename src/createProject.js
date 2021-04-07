import newTask from './createTask';

export let projectsArray = [];

function setProjects(){
  if (localStorage.length != 0)
  {
    projectsArray = JSON.parse(localStorage.getItem("array"));
  }
}

class Builder{
  constructor(title){
    this.title = title
    this.taskArray = [];
  }
}

function saveProject(){
  localStorage.clear();
  localStorage.setItem('array', JSON.stringify(projectsArray));
}

export function addNewProject(){
  const title = document.querySelector('#project-title').value;
  const newProject = new Builder(title);
  projectsArray.push(newProject);
  saveProject();
}

export function addTask(project, task){
  project.taskArray.push(task);
  saveProject();
}

export function printProject() {
  const title = document.querySelector('#project-title').value;
  let projectList = document.querySelector('.project-list');
  let projectName = document.createElement('h5');
  projectName.innerText = title;
  projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
  projectList.appendChild(projectName);
}

export function loadProjects(){
  setProjects();
  const box = document.querySelector('#project-container');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  for (let i = 0 ; i < projectsArray.length ; i++)
  {
    let projectList = document.querySelector('.project-list');
    let projectName = document.createElement('h5');
    projectName.innerText = projectsArray[i].title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectList.appendChild(projectName);
  }
}

loadProjects();

export function loadTasks(index){
  let x = document.querySelector('.task-box');
  while(x != null)
  {
    x.remove(x.selectedIndex);
    x = document.querySelector('.task-box');
  }
  for (let task of projectsArray[index].taskArray)
  { 
    // Create elemetns:
    const taskMainDiv = document.createElement('div');
    const taskCardHeader = document.createElement('div');
    const taskCardDiv = document.createElement('div');
    const taskCardTitle = document.createElement('h1');
    const taskCardDescription = document.createElement('p');
    const taskCardDate =  document.createElement('p');
    const taskCardPriority = document.createElement('div');

    // Style
    taskMainDiv.classList = 'card m-1 task-card task-box';
    taskCardHeader.classList = 'card-header bg-primary';
    taskCardDiv.classList = 'card-body';
    taskCardTitle.classList = 'card-title';
    taskCardDescription.classList = 'card-text';
    taskCardDate.classList = 'card-text';
    taskCardPriority.classList = 'card-body';

    // Structure:
    document.querySelector('.col-6').appendChild(taskMainDiv);
    taskMainDiv.appendChild(taskCardHeader);
    taskMainDiv.appendChild(taskCardDiv);
    taskCardDiv.appendChild(taskCardTitle);
    taskCardDiv.appendChild(taskCardDescription);
    taskCardDiv.appendChild(taskCardDate);
    taskCardDiv.appendChild(taskCardPriority);

    // Fill the data
    taskCardHeader.innerText = `Task Title : ${task.title}`;
    taskCardDescription.innerText = `Task Details: ${task.description}`;
    taskCardDate.innerText = `Due date : ${task.dueDate}` ;
    if (task.priority === "1")
     {
      taskCardPriority.innerText = "Not That Important";
      taskCardPriority.classList.add('bg-light');
      taskCardPriority.classList.remove('bg-danger', 'bg-warning')
    }
     else if (task.priority === "2") 
     {
      taskCardPriority.innerText = "Important";
      taskCardPriority.classList.add('bg-warning');
      taskCardPriority.classList.remove('bg-danger', 'bg-light')
    } 
    else if (task.priority === "3")  {
      taskCardPriority.innerText = "Very Important";
      taskCardPriority.classList.add('bg-danger');
      taskCardPriority.classList.remove('bg-warning', 'bg-light')
    }
  }
}

export default projectsArray;