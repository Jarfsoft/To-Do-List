class Task{
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// Create new task and push it inside its project:
export function newTask(){
  const title = document.querySelector('#task-title').value;
  const description = document.querySelector('#task-description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const newT = new Task(title,description,dueDate,priority);
  return newT
  ;}


// Clear inputs of the task:
export function clearInputs(){
  document.querySelector('#task-title').value = '';
  document.querySelector('#task-description').value = '';
  document.querySelector('#dueDate').value = '';
  document.querySelector('#priority').value = '';
}


export  default newTask
