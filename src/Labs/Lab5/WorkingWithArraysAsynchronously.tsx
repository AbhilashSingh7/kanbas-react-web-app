// src/Labs/Lab5/WorkingWithArraysAsynchronously.tsx
import { useEffect, useState } from "react";
import {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodoTitle,
  completeTodo,
  updateTodoDescription,
  updateTodo,
} from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const fetchAndSetTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const handleCreate = async () => {
    const newTodo = await createTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Delete failed.");
    }
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

  const handleFullUpdate = async (todo: any) => {
    try {
      await updateTodo(todo);
      setEditingTodoId(null);
      fetchAndSetTodos(); // refresh
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Update failed.");
    }
  };
  

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger">
          {errorMessage}
        </div>
      )}
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
              {editingTodoId === todo.id ? (
                <input
                  className="form-control form-control-sm mb-1"
                  value={todo.title}
                  onChange={(e) =>
                    setTodos(todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t
                    ))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleFullUpdate(todo);
                    }
                  }}
                  autoFocus
                />
              ) : (
                <>
                  <strong>{todo.title}</strong>
                  <button
                    onClick={() => setEditingTodoId(todo.id)}
                    className="btn btn-sm btn-outline-primary ms-2"
                  >
                    ✏️
                  </button>
                </>
              )}

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
