import newTask from './createTask';

export let projectsArray = [];
if (localStorage.length != 0)
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
// We will make it: add new project:
export function printProject() {
    const title = document.querySelector('#project-title').value;
    let projectList = document.querySelector('.project-list');
    let projectName = document.createElement('h5');
    projectName.innerText = title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectList.appendChild(projectName);
  }



// We need to isolate loading last projects from adding new projects:
export function loadProjects(){
  for (let i = 0 ; i < projectsArray.length ; i++)
  {
    let projectList = document.querySelector('.project-list');
    let projectName = document.createElement('h5');
    projectName.innerText = projectsArray[i].title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectList.appendChild(projectName);
  }
}

// Create New Task  inside the project:
 export function taskList(title , description , dueDate , priority){
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

    // We need here just add the data:
   taskCardHeader.innerText = `Task Title : ${title}`;
   taskCardDescription.innerText = `Task Details: ${description}`;
   taskCardDate.innerText = `Due date : ${dueDate}` ;
     if (priority === "1")
     {
      taskCardPriority.innerText = "Not That Important";
      taskCardPriority.classList.add('bg-light');
      taskCardPriority.classList.remove('bg-danger', 'bg-warning')
    }
     else if (priority === "2") 
     {
      taskCardPriority.innerText = "Important";
      taskCardPriority.classList.add('bg-warning');
      taskCardPriority.classList.remove('bg-danger', 'bg-light')
    } 
    else if (priority === "3")  {
      taskCardPriority.innerText = "Very Important";
      taskCardPriority.classList.add('bg-danger');
      taskCardPriority.classList.remove('bg-warning', 'bg-light')
    }
  }


 
export function loadTasks(index){
  console.log(projectsArray[index]);
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
  taskMainDiv.classList = 'card m-1 task-card';
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
    }}

}

// Here i am trying to make a function to eliminate all other tasks
export function hideTaks(index){
  let otherProjectsArray = projectsArray.splice(projectsArray[index] , 1)
  console.log(otherProjectsArray)
}




export default projectsArray;

//  taskList();
  // const project = projectsArray.find(name => name.title == title);
  // const index = projectsArray.indexOf(project);
  // loadTasks(index)