// src/Labs/Lab5/WorkingWithArraysAsynchronously.tsx
import { useEffect, useState } from "react";
import {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodoTitle,
  completeTodo,
  updateTodoDescription,
} from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const fetchAndSetTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const handleCreate = async () => {
    const updated = await createTodo();
    setTodos(updated);
  };

  const handleDelete = async (id: number) => {
    const updated = await deleteTodo(id);
    setTodos(updated);
  };

  const handleUpdateTitle = async (id: number) => {
    if (!newTitle.trim()) return;
    const updated = await updateTodoTitle(id, newTitle);
    setTodos(updated);
    setNewTitle("");
  };

  const handleComplete = async (id: number, completed: boolean) => {
    const updated = await completeTodo(id, completed);
    setTodos(updated);
  };

  const handleUpdateDescription = async (id: number) => {
    if (!newDescription.trim()) return;
    const updated = await updateTodoDescription(id, newDescription);
    setTodos(updated);
    setNewDescription("");
  };

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>
        Working with Arrays Asynchronously
        <FaPlusCircle
          onClick={handleCreate}
          className="text-success float-end fs-3"
          id="wd-create-todo"
          role="button"
        />
      </h3>

      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{todo.title}</strong>
                <div>{todo.description}</div>
              </div>
              <div>
                <FaTrash
                  onClick={() => handleDelete(todo.id)}
                  className="text-danger float-end ms-1"
                  id="wd-remove-todo"
                  role="button"
                />
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="New title"
                  className="form-control form-control-sm d-inline-block me-2"
                  style={{ width: 120 }}
                />
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleUpdateTitle(todo.id)}>
                  Update Title
                </button>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="New desc"
                  className="form-control form-control-sm d-inline-block me-2"
                  style={{ width: 120 }}
                />
                <button className="btn btn-secondary btn-sm me-2" onClick={() => handleUpdateDescription(todo.id)}>
                  Update Desc
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleComplete(todo.id, !todo.completed)}
                >
                  {todo.completed ? "Undo Complete" : "Mark Complete"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
