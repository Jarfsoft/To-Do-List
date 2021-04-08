export const projectsArray = [];

export function setProjects() {
  if (localStorage.length !== 0) {
    const temp = JSON.parse(localStorage.getItem('array'));
    projectsArray.splice(0, projectsArray.length);
    for (let i = 0; i < temp.length; i += 1) projectsArray.push(temp[i]);
  }
}

class Builder {
  constructor(title) {
    this.title = title;
    this.taskArray = [];
  }
}

export function saveProject() {
  localStorage.clear();
  localStorage.setItem('array', JSON.stringify(projectsArray));
}

export function addNewProject(title) {
  const newProject = new Builder(title);
  projectsArray.push(newProject);
  saveProject();
}

export function addTask(project, task) {
  project.taskArray.push(task);
  saveProject();
}


export default projectsArray;