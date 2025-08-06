// src/Labs/Lab5/HttpClientCRUD.tsx
import { useEffect, useState } from "react";
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// ✅ Define the shape of a Todo object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function HttpClientCRUD() {
  // ✅ Tell TypeScript that todos is an array of Todo objects
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos/create`);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id: number) => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos/${id}/delete`);
    setTodos(response.data);
  };

  const updateTodoTitle = async (id: number) => {
    if (!newTitle.trim()) return;
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos/${id}/title/${newTitle}`);
    setTodos(response.data);
    setNewTitle("");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Todos</h3>
      <button className="btn btn-success mb-2" onClick={createTodo}>
        Create New Todo
      </button>

      <ul className="list-group mb-2">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <div>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="New title"
                className="form-control form-control-sm d-inline-block me-2"
                style={{ width: 120 }}
              />
              <button
                className="btn btn-primary btn-sm"
                onClick={() => updateTodoTitle(todo.id)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
