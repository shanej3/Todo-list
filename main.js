import { project } from './project.js';
import { createTodo } from './createTodo.js';

const container = document.getElementById('container');
const nameFromInput = document.getElementById('todo-name');
const listContent = document.getElementById('list-content');

const createTodoButton = document.getElementById('create-todo-button');
const genericButton = document.getElementById('generic-button');
const newProjectButton = document.getElementById('new-project-button');
const newProjectButtonInput = document.getElementById('new-project-button-input');
const newProjectArea = document.getElementById('new-projects');

const project_generic = project('one');
project_generic.addTodo('test titlefdsa', 'test description', 2);
project_generic.addTodo('test titlefdas', 'test description', 2);
project_generic.addTodo('test title', 'test description', 2);
project_generic.deleteTodo('test title');

let currentProject = project_generic;
displayProject(currentProject);


function createTodoCard(projectInstance) {
    const newTodoItem = projectInstance.addTodo(nameFromInput.value, 'test', 2);
    const newDiv = document.createElement('div');
    newDiv.className = 'new-todo';
    newDiv.textContent = newTodoItem.title;

    listContent.appendChild(newDiv);
    console.log(project_generic.getTodos());

}

function createProjectCard(name) {  // creates project and html "card" for it
    const newProject = project();

    const newProjectCard = document.createElement('button');
    newProjectCard.className = 'new-project';
    newProjectCard.textContent = name;
    newProjectCard.addEventListener("click", function() {
        currentProject = newProject;
        displayProject(currentProject);
    })
    
    newProjectArea.appendChild(newProjectCard);

}

function displayProject(projectInstance) {
    const todos = projectInstance.getTodos();
    listContent.innerHTML = ""; // clear previous project
    for (const todo of todos) {  // display each todo
        const newDiv = document.createElement('div');
        newDiv.className = 'new-todo';
        newDiv.textContent = todo.title;
        listContent.appendChild(newDiv);

    }
}

createTodoButton.addEventListener("click", function() {
    createTodoCard(currentProject);
    nameFromInput.value = '';
    
});

genericButton.addEventListener("click", function() {
    currentProject = project_generic;
    displayProject(currentProject);
})

newProjectButton.addEventListener("click", function() {
    createProjectCard(newProjectButtonInput.value);
})

