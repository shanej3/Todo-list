// "project" factory

import { createTodo } from "./createTodo.js";
export function project() {
    let todos = [];
    return {
        addTodo(title, description, priority) {
            const todo = createTodo(title, description, priority);
            todos.push(todo);
            return todo;
        },
        getTodos() {
            return todos;
        },
        deleteTodo(title) {  // delete todo given title
            todos = todos.filter(t => t.title !== title); 
        }
    }
}


