// "todo" factory

let todoID = 1;
export function createTodo(title, description, priority) {
    const id = todoID++; // unique IDs for each todo
    return {
        id,
        title,
        description,
        priority
    };
}
