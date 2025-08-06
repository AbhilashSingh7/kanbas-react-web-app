// Lab5/WorkingWithArrays.js
let todos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
  ];
  
  export default function WorkingWithArrays(app) {
    // 5.2.4.1 – Retrieve all
    app.get("/lab5/todos", (req, res) => {
      res.json(todos);
    });
  
    // 5.2.4.2 – Retrieve by ID
    app.get("/lab5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      res.json(todo);
    });
  
    // 5.2.4.3 – Filter by query string (e.g., ?completed=true)
    app.get("/lab5/todosCompletedTrue", (req, res) => {
      const completed = req.query.completed === "true";
      const completedTodos = todos.filter((t) => t.completed === completed);
      res.json(completedTodos);
    });
  }
  