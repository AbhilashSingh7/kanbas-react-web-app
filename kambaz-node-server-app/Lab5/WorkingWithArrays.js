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

  // Get todo by ID
  app.get("/labs/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });

  // Get only completed todos
  app.get("/labs/todos/completed=true", (req, res) => {
    const completedTodos = todos.filter((t) => t.completed === true);
    res.json(completedTodos);
  });

  // Create a new todo (POST)
  app.post("/labs/todos", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
      description: "New todo description",
    };
    todos.push(newTodo);
    res.json(newTodo);
  });

  // Delete a todo (DELETE)
  app.delete("/labs/todos", (req, res) => {
    const { id } = req.body;
    todos = todos.filter((t) => t.id !== id);
    res.json(todos);
  });

  // Update title (PUT)
  app.put("/labs/todos/title", (req, res) => {
    const { id, title } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, title } : todo
    );
    res.json(todos);
  });

  // Update completed status (PUT)
  app.put("/labs/todos/completed", (req, res) => {
    const { id, completed } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    res.json(todos);
  });

  // Update description (PUT)
  app.put("/labs/todos/description", (req, res) => {
    const { id, description } = req.body;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, description } : todo
    );
    res.json(todos);
  });
}
