// "todo" factory

let todoID = 1;
export function createTodo(title, priority, completed) {
    const id = todoID++; // unique IDs for each todo
    return {
        id,
        title,
        priority,
        completed
    };
}
