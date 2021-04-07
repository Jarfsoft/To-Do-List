export let projectsArray = [];

function setProjects() {
  if (localStorage.length !== 0) {
    projectsArray = JSON.parse(localStorage.getItem('array'));
  }
}

class Builder {
  constructor(title) {
    this.title = title;
    this.taskArray = [];
  }
}

function saveProject() {
  localStorage.clear();
  localStorage.setItem('array', JSON.stringify(projectsArray));
}

export function addNewProject() {
  const title = document.querySelector('#project-title').value;
  const newProject = new Builder(title);
  projectsArray.push(newProject);
  saveProject();
}

export function addTask(project, task) {
  project.taskArray.push(task);
  saveProject();
}

export function printProject() {
  const title = document.querySelector('#project-title').value;
  const projectList = document.querySelector('.project-list');
  const projectName = document.createElement('h5');
  projectName.innerText = title;
  projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
  projectList.appendChild(projectName);
}

export function loadProjects() {
  setProjects();
  const box = document.querySelector('#project-container');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  for (let i = 0; i < projectsArray.length; i += 1) {
    const projectList = document.querySelector('.project-list');
    const projectName = document.createElement('h5');
    projectName.innerText = projectsArray[i].title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectList.appendChild(projectName);
  }
}

loadProjects();

function editTask(task) {
  const editTitle = document.querySelector('#task-title-edit');
  const editDes = document.querySelector('#task-description-edit');
  const editDate = document.querySelector('#dueDate-edit');
  const editPriority = document.querySelector('#priority-edit');
  const requiredFields = document.querySelector('#required-fields-edit-task');
  if (!editTitle.value || !editDes.value || !editDate.value || !editPriority.value) {
    requiredFields.classList.add('show');
    requiredFields.classList.remove('hide');
  } else {
    document.querySelector('#edit-task-div').classList.add('hide');
    requiredFields.classList.add('hide');
    requiredFields.classList.remove('show');
    task.title = editTitle.value;
    task.description = editDes.value;
    task.dueDate = editDate.value;
    task.priority = editPriority.value;
  }
}

export function loadTasks(index) {
  let x = document.querySelector('.task-box');
  while (x != null) {
    x.remove(x.selectedIndex);
    x = document.querySelector('.task-box');
  }
  for (const task of projectsArray[index].taskArray) {
    // Create elemetns:
    const taskMainDiv = document.createElement('div');
    const taskCardHeader = document.createElement('div');
    const taskCardDiv = document.createElement('div');
    const taskCardTitle = document.createElement('h1');
    const taskCardDescription = document.createElement('p');
    const taskCardDate = document.createElement('p');
    const taskCardPriority = document.createElement('div');
    const taskCardEdit = document.createElement('button');
    const taskCardDelete = document.createElement('button');

    // Style
    taskMainDiv.classList = 'card m-1 task-card task-box';
    taskCardHeader.classList = 'card-header bg-primary';
    taskCardDiv.classList = 'card-body';
    taskCardTitle.classList = 'card-title';
    taskCardDescription.classList = 'card-text';
    taskCardDate.classList = 'card-text';
    taskCardPriority.classList = 'card-body';
    taskCardEdit.classList = 'btn btn-secondary p-1 m-1 edit-task';
    taskCardDelete.classList = 'btn btn-danger p-1 m-1 delete-task';

    // Structure:
    document.querySelector('.col-6').appendChild(taskMainDiv);
    taskMainDiv.appendChild(taskCardHeader);
    taskMainDiv.appendChild(taskCardDiv);
    taskCardDiv.appendChild(taskCardTitle);
    taskCardDiv.appendChild(taskCardDescription);
    taskCardDiv.appendChild(taskCardDate);
    taskCardDiv.appendChild(taskCardPriority);
    taskCardDiv.appendChild(taskCardEdit);
    taskCardDiv.appendChild(taskCardDelete);


    // Fill the data
    taskCardEdit.innerText = 'Edit This Task';
    taskCardDelete.innerText = 'Delete This Task';
    taskCardHeader.innerText = `Task Title : ${task.title}`;
    taskCardDescription.innerText = `Task Details: ${task.description}`;
    taskCardDate.innerText = `Due date : ${task.dueDate}`;
    if (task.priority === '1') {
      taskCardPriority.innerText = 'Not That Important';
      taskCardPriority.classList.add('bg-light');
      taskCardPriority.classList.remove('bg-danger', 'bg-warning');
    } else if (task.priority === '2') {
      taskCardPriority.innerText = 'Important';
      taskCardPriority.classList.add('bg-warning');
      taskCardPriority.classList.remove('bg-danger', 'bg-light');
    } else if (task.priority === '3') {
      taskCardPriority.innerText = 'Very Important';
      taskCardPriority.classList.add('bg-danger');
      taskCardPriority.classList.remove('bg-warning', 'bg-light');
    }
    taskCardEdit.addEventListener('click', () => {
      document.querySelector('#edit-task-div').classList.remove('hide');
      const editTaskBtn = document.querySelector('#edit-task-btn');
      editTaskBtn.addEventListener('click', () => {
        editTask(task);
        saveProject();

        taskCardHeader.innerText = `Task Title : ${task.title}`;
        taskCardDescription.innerText = `Task Details: ${task.description}`;
        taskCardDate.innerText = `Due date : ${task.dueDate}`;
        if (task.priority === '1') {
          taskCardPriority.innerText = 'Not That Important';
          taskCardPriority.classList.add('bg-light');
          taskCardPriority.classList.remove('bg-danger', 'bg-warning');
        } else if (task.priority === '2') {
          taskCardPriority.innerText = 'Important';
          taskCardPriority.classList.add('bg-warning');
          taskCardPriority.classList.remove('bg-danger', 'bg-light');
        } else if (task.priority === '3') {
          taskCardPriority.innerText = 'Very Important';
          taskCardPriority.classList.add('bg-danger');
          taskCardPriority.classList.remove('bg-warning', 'bg-light');
        }
      });
    });
    taskCardDelete.addEventListener('click', () => {
      projectsArray[index].taskArray.splice(index, 1);
      saveProject();
      taskMainDiv.remove();
    });
  }
}

export default projectsArray;