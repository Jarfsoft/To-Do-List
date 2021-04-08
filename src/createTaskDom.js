import Task from './createTask';

export function clearInputs() {
  document.querySelector('#task-title').value = '';
  document.querySelector('#task-description').value = '';
  document.querySelector('#dueDate').value = '';
  document.querySelector('#priority').value = '';
}

export function newTask() {
  const title = document.querySelector('#task-title').value;
  const description = document.querySelector('#task-description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const newT = new Task(title, description, dueDate, priority);
  clearInputs();
  return newT;
}
