import {
  printProject, loadProjects, editTask, loadTasks,
} from '../src/createProDom';
import { setProjects } from '../src/createProject';

describe('Test Project Dom file', () => {
  test('Edit Task', () => {
    document.body.innerHTML = `
     <div id="edit-task-div">
     <input id="task-title-edit" value="Edited task">
     <input id="task-description-edit"  value="Edited task Description">
     <input id="dueDate-edit" value="2021-04-22">
     <select id="priority-edit">
        <option value="3">Very Important</option>
        <option value="2">Important</option>
        <option value="1">Not That Important</option>
     </select>
     <h5 id="required-fields-edit-task">All fields are required</h5>
     </div>
    `;
    const editTitle = document.querySelector('#task-title-edit').value;
    const editDes = document.querySelector('#task-description-edit').value;
    const editDate = document.querySelector('#dueDate-edit').value;
    const requiredFields = document.querySelector('#required-fields-edit-task');
    const task = {
      title: 'Task', description: 'Description', dueDate: '2021-04-21', priority: '3',
    };
    editTask(task);
    expect(editTitle).toEqual('Edited task');
    expect(editDes).toEqual('Edited task Description');
    expect(editDate).not.toEqual('2021-04-21');
    expect(requiredFields.classList.contains('show')).toBeFalsy();
  });
  test('Edit Task with one of the values are empty', () => {
    document.body.innerHTML = `
     <input id="task-title-edit">
     <input id="task-description-edit"  value="Edited task Description">
     <input id="dueDate-edit">
     <select id="priority-edit">
        <option value="3">Very Important</option>
        <option value="2">Important</option>
        <option value="1">Not That Important</option>
     </select>
     <h5 id="required-fields-edit-task">All fields are required</h5>
    `;
    const editTitle = document.querySelector('#task-title-edit').value;
    const requiredFields = document.querySelector('#required-fields-edit-task');
    const task = {
      title: 'Task', description: 'Description', dueDate: '2021-04-21', priority: '3',
    };
    editTask(task);
    expect(editTitle).toBe('');
    expect(requiredFields.classList.contains('hide')).toBeFalsy();
  });

  test('Load Project', () => {
    document.body.innerHTML = ` <div id="project-container" class="project-list">
      </div>
    `;
    localStorage.setItem('array', JSON.stringify([{ title: 'Test', taskArray: [] }]));
    loadProjects();
    const el = document.querySelector('#project-container h5');
    const projectList = document.querySelector('.project-list h6');
    expect(el).toBeTruthy();
    expect(projectList).toBeTruthy();
    expect(projectList.innerText).toEqual('Test');
    expect(el.innerText).toEqual("Project's List");
  });

  test('Load Tasks', () => {
    const arr = [{
      title: 'Test',
      taskArray: [
        {
          title: 'Task', description: 'Description', dueDate: '2021-04-21', priority: '3',
        },
      ],
    }];
    localStorage.setItem('array', JSON.stringify(arr));
    setProjects();
    document.body.innerHTML = `
        <div id="edit-task-div"> 
           <input id="task-title-edit">
           <input id="task-description-edit"  value="Edited task Description">
           <input id="dueDate-edit">
           <select id="priority-edit">
              <option value="3">Very Important</option>
              <option value="2">Important</option>
              <option value="1">Not That Important</option>
           </select>
           <button class="btn btn-secondary m-1 p-1" id="edit-task-btn">Edit</button>
           <h5 id="required-fields-edit-task">All fields are required</h5>
        </div>
        <div class="col-6">
        </div>
       `;
    loadTasks(0);

    const taskCardHeader = document.querySelector('.card-header');
    const taskCardPriority = document.querySelector('.card-body div');
    const taskCardEdit = document.querySelector('.edit-task');
    const taskCardDelete = document.querySelector('.delete-task');
    const editTaskDiv = document.querySelector('#edit-task-div');

    expect(taskCardEdit).toBeTruthy();
    expect(taskCardEdit.innerText).toEqual('Edit This Task');
    expect(taskCardDelete.innerText).toEqual('Delete This Task');
    expect(taskCardHeader.innerText).toEqual('Task Title : Task');
    expect(taskCardPriority.innerText).toEqual('Very Important');

    taskCardEdit.click();
    expect(editTaskDiv.classList.contains('hide')).toBeFalsy();
    expect(document.querySelector('#task-title-edit').value).toEqual('Task');
  });

  test('print Project', () => {
    document.body.innerHTML = `<div class="project-list">
        <input id="project-title" value="Test">  
      </div>
      `;
    printProject();
    const el = document.querySelector('.project-list h6');
    expect(el).toBeTruthy();
    expect(el.innerText).toEqual('Test');
  });
});