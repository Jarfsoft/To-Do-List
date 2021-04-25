import {
  Builder, projectsArray, saveProject, addNewProject, addTask, setProjects,
} from '../src/createProject';

test('array check', () => {
  expect(projectsArray).toBeTruthy();
  expect(projectsArray).toEqual([]);
});

describe('build project', () => {
  const project = new Builder('Test');
  test('check array increment', () => {
    expect(projectsArray.length).toEqual(0);
    addNewProject(project);
    expect(projectsArray.length).toEqual(1);
  });
  test('project title test', () => {
    expect(project.title).toBe('Test');
  });
  test('new project on array and localstorage check', () => {
    addNewProject('Test Two');
    expect(projectsArray.length).toEqual(2);
    expect(projectsArray[1].title).toEqual('Test Two');
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
  test('check empty array', () => {
    expect(project.taskArray).toEqual([]);
  });
  test('localstorage saving check', () => {
    saveProject();
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
  test('type of task check', () => {
    expect(typeof project.taskArray).toBe('object');
  });
  test('get projects from localstorage check', () => {
    setProjects();
    expect(projectsArray.length).toEqual(2);
  });
  test('add task and localstorage save check', () => {
    const task = {
      title: 'Task', description: 'Description', dueDate: '2021-04-21', priority: '3',
    };
    addTask(project, task);
    expect(project.title).toEqual('Test');
    expect(project.taskArray).toEqual([task]);
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
});