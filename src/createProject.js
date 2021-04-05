export let projectsArray = [];


class Builder{
  constructor(title){
    this.title = title
  }
  addProject(){
    projectsArray.push(this)
  }
}

export function addNewProject(){
  const title = document.querySelector('input').value;
  const newProject = new Builder(title);
  newProject.addProject();
}

export function printProject() {
  const projectList = document.querySelector('.project-list');
  const projectName = document.createElement('h5');
  for (let project of projectsArray) {
    projectName.innerText = project.title;
    projectName.classList = 'text-center text-primary bg-warning border border-light rounded m-1 p-1'
    projectList.appendChild(projectName);

  }
}

// export default addNewProject