import { project } from './project.js';

const project_test = project('one');
project_test.addTodo('test titlefdsa', 'test description', 2);
project_test.addTodo('test titlefdas', 'test description', 2);
project_test.addTodo('test title', 'test description', 2);
project_test.deleteTodo('test title');
console.log(project_test.getTodos());