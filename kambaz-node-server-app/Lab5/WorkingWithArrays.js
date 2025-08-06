let todos = [
  { id: 1, title: "Task 1", completed: false, description: "First task" },
  { id: 2, title: "Task 2", completed: true, description: "Second task" },
  { id: 3, title: "Task 3", completed: false, description: "Third task" },
  { id: 4, title: "Task 4", completed: true, description: "Fourth task" },
];

export default function WorkingWithArrays(app) {
  // 5.2.4.1 – Get all todos
  app.get("/lab5/todos", (req, res) => {
    res.json(todos);
  });

  // 5.2.4.2 – Get todo by ID
  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });

  // 5.2.4.3 – Get completed todos
  app.get("/lab5/todos/completed=true", (req, res) => {
    const completedTodos = todos.filter((t) => t.completed === true);
    res.json(completedTodos);
  });

  // 5.2.4.4 – Create new todo
  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
      description: "New todo description",
    };
    todos.push(newTodo);
    res.json(newTodo);
  });

  // 5.2.4.5 – Delete todo by ID
  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id !== parseInt(id));
    res.json(todos);
  });

  // 5.2.4.6 – Update todo title by ID
  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) todo.title = title;
    res.json(todos);
  });

  // 5.2.4.7 – Update completed status
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.completed = completed === "true";
    }
    res.json(todo);
  });

  // 5.2.4.7 – Update description
  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.description = decodeURIComponent(description);
    }
    res.json(todo);
  });
}
