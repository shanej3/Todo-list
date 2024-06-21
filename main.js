function project() {
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
        deleteTodo(title) {
            todos = todos.filter(t => t.title !== title); // Filter out todos with the specified title
        }
    }
}

function createTodo(title, description, priority) {
    return {
        title: title,
        description: description,
        priority: priority
    };
}

const project_test = project('one');
project_test.addTodo('test titlefdsa', 'test description', 2);
project_test.addTodo('test titlefdas', 'test description', 2);
project_test.addTodo('test title', 'test description', 2);
project_test.deleteTodo('test title');
const test = createTodo('test title', 'description', 1);
const test2 = createTodo('test title', 'description', 1);
console.log(project_test.getTodos());