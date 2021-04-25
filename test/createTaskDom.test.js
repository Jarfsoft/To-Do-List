import { clearInputs, newTask } from '../src/createTaskDom';

describe('Test', () => {
  test('Return new task', () => {
    newTask();
    expect(document.querySelector('#task-title').value).toEqual('');
    expect(document.querySelector('#priority').value).not.toEqual('3');
  });
  test('Check clear the data from the inputs', () => {
    clearInputs();
    expect(document.querySelector('#task-title').value).toEqual('');
    expect(document.querySelector('#priority').value).not.toEqual('3');
  });
  beforeEach(() => {
    document.body.innerHTML = '<input id="task-title">'
      + '  <input id="task-description" />'
      + '  <input id="dueDate" />'
      + '  <select id="priority" />'
      + '  <option value="3"> Very Important </option>'
      + '  <option value="2">Important </option> '
      + '  <option value="1">Not That Important</option>'
      + '</select>';
    document.querySelector('#task-title').value = 'Task';
    document.querySelector('#task-description').value = 'Description';
    document.querySelector('#dueDate').value = '2021-04-21';
    document.querySelector('#priority').value = '3';
  });
});
