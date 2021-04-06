import newTask from './createTask';

export let projectsArray = [];
if(localStorage.length != 0)
{
  projectsArray = JSON.parse(localStorage.getItem("array"));
  console.log(projectsArray);
}

class Builder{
  constructor(title){
    this.title = title
    this.taskArray = [];
  }

  addProject(){
    projectsArray.push(this);
    localStorage.clear();
    localStorage.setItem('array', JSON.stringify(projectsArray));
  }

  addTask(){
    this.taskArray.push(newTask());
    localStorage.clear();
    localStorage.setItem('array', JSON.stringify(projectsArray));
  }
}


// Create New project
export function addNewProject(){
  let taskArray = [];
  const title = document.querySelector('#project-title').value;
  const newProject = new Builder(title , taskArray );
  newProject.addProject();
}


// Print the projects on the project's list:
export function printProject() {
  console.log(projectsArray);
 
  // for (let project in projectsArray) 
  for (let i = 0 ; i < projectsArray.length ; i++)
  {
    const projectList = document.querySelector('.project-list');
    const projectName = document.createElement('h5');
    projectName.innerText = projectsArray[i].title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectName.addEventListener('click', () => {
      taskList()
      const tasks = document.querySelector('#new-task-card');
      const proj = document.querySelector('#new-project-task');
      proj.textContent = projectsArray[i].title;
      tasks.classList.remove('hide');
      document.querySelector('#new-project-section').classList.add('hide');
      document.querySelector('#new-project-section').classList.remove('show');
      tasks.classList.add('show');
    });
    projectList.appendChild(projectName);
  }
}


// Create Task list inside the project:
 export function taskList(){
  const projectName = document.querySelector('#new-project-task').innerText;
  const project = projectsArray.find(name => name.title == projectName);
  const taskMainDiv = document.createElement('div');
  const taskCardHeader = document.createElement('div');
  const taskCardDiv = document.createElement('div');
  const taskCardTitle = document.createElement('h1');
  const taskCardDescription = document.createElement('p');
  const taskCardDate =  document.createElement('p');
  const taskCardPriority = document.createElement('div')

  // Style
  taskMainDiv.classList = 'card m-1 task-card';
  taskCardHeader.classList = 'card-header bg-primary';
  taskCardDiv.classList = 'card-body';
  taskCardTitle.classList = 'card-title';
  taskCardDescription.classList = 'card-text';
  taskCardDate.classList = 'card-text';
  taskCardPriority.classList = 'card-body'


  // Structure:
  document.querySelector('.col-6').appendChild(taskMainDiv);
  taskMainDiv.appendChild(taskCardHeader);
  taskMainDiv.appendChild(taskCardDiv);
  taskCardDiv.appendChild(taskCardTitle);
  taskCardDiv.appendChild(taskCardDescription);
  taskCardDiv.appendChild(taskCardDate);
  taskCardDiv.appendChild(taskCardPriority);
  
  // Loop to create task cards:
  // for (let task of project.taskArray)

  if (project) {
  for (let i = 0 ; i < projectsArray.length ; i++)
  {
    taskCardHeader.innerText = `Task Title : ${projectsArray[i].taskArray[i].title}`;
    taskCardDescription.innerText = `Task Details: ${projectsArray[i].taskArray[i].description}`;
    taskCardDate.innerText = `Due date : ${projectsArray[i].taskArray[i].dueDate}` 
    if (projectsArray[i].taskArray[i].priority === "1")
     {
      taskCardPriority.innerText = "Not That Important";
      taskCardPriority.classList.add('bg-light');
      taskCardPriority.classList.remove('bg-danger', 'bg-warning')
    }
     else if (projectsArray[i].taskArray[i].priority === "2") 
     {
      taskCardPriority.innerText = "Important";
      taskCardPriority.classList.add('bg-warning');
      taskCardPriority.classList.remove('bg-danger', 'bg-light')
    } 
    else if (projectsArray[i].taskArray[i].priority === "3")  {
      taskCardPriority.innerText = "Very Important";
      taskCardPriority.classList.add('bg-danger');
      taskCardPriority.classList.remove('bg-warning', 'bg-light')
    }
   } }
  }

export default projectsArray;
