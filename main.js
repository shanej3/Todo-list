import { project } from './project.js';
import { createTodo } from './createTodo.js';

const container = document.getElementById('container');
const nameFromInput = document.getElementById('todo-name');
const listContent = document.getElementById('list-content');

const testButton = document.getElementById('create-todo-button');
const testProjectButton = document.getElementById('generic-button');

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

testButton.addEventListener("click", function() {
    createTodoCard(project_generic);
    
});

testProjectButton.addEventListener("click", function() {
    displayProject(currentProject);
})

