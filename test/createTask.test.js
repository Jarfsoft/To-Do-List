import Task from '../src/createTask';

describe('New Task', () => {
  const tsk = new Task('Work', 'Do something', '2022-08-25', '3');
  test('Review title', () => {
    expect(tsk.title).toEqual('Work');
    expect(tsk.description).toEqual('Do something');
    expect(tsk.dueDate).toEqual('2022-08-25');
    expect(tsk.priority).toEqual('3');
  });
  test('Review variable type', () => {
    expect(typeof tsk.title).toEqual('string');
    expect(typeof tsk.description).toEqual('string');
    expect(typeof tsk.dueDate).toEqual('string');
    expect(typeof tsk.priority).toEqual('string');
  });
});