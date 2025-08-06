let todos = [
  { id: 1, title: "Task 1", completed: false, description: "First task" },
  { id: 2, title: "Task 2", completed: true, description: "Second task" },
  { id: 3, title: "Task 3", completed: false, description: "Third task" },
  { id: 4, title: "Task 4", completed: true, description: "Fourth task" },
];

export default function WorkingWithArrays(app) {
  // Get all todos
  app.get("/labs/todos", (req, res) => {
    res.json(todos);
  });

  // ✅ Update entire todo by ID (new PUT route)
  app.put("/labs/todos/:id", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      return res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
    }
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    res.sendStatus(200);
  });

  // ✅ Delete with error handling
  app.delete("/labs/todos/:id", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      return res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
    }
    todos.splice(todoIndex, 1);
    res.sendStatus(204);
  });

  // Get only completed todos
  app.get("/labs/todos/completed=true", (req, res) => {
    const completedTodos = todos.filter((t) => t.completed === true);
    res.json(completedTodos);
  });

  // ✅ JSON-based POST route
  app.post("/lab5/todos", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description,
    };
    todos.push(newTodo);
    res.json(newTodo);
  });

  // ✅ DELETE route with ID param
  app.delete("/lab5/todos/:tid", (req, res) => {
    const { tid } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(tid));
    res.sendStatus(204);
  });

  // ✅ Update title
  app.put("/labs/todos/title", (req, res) => {
    const { id, title } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, title } : todo
    );
    res.json(todos);
  });

  // ✅ Update completed status
  app.put("/labs/todos/completed", (req, res) => {
    const { id, completed } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    res.json(todos);
  });

  // ✅ Update description
  app.put("/labs/todos/description", (req, res) => {
    const { id, description } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, description } : todo
    );
    res.json(todos);
  });
}
