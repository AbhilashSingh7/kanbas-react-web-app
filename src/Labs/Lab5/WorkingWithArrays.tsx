import React, { useState } from "react";
const API = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [id, setId] = useState(1);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Get all todos */}
      <a href={`${API}/lab5/todos`} className="btn btn-primary me-2" id="wd-get-todos">
        Get Todos
      </a>

      {/* Get todo by ID */}
      <input
        type="number"
        value={id}
        className="form-control w-25 mb-2"
        onChange={(e) => setId(Number(e.target.value))}
      />
      <a href={`${API}/lab5/todos/${id}`} className="btn btn-primary float-end">
        Get Todo by ID
      </a>

      <hr />

      {/* Create new todo */}
      <h5>Creating new Items in an Array</h5>
      <a href={`${API}/lab5/todos/create`} className="btn btn-danger" id="create-todo">
        Create Todo
      </a>

      <hr />

      {/* Delete todo */}
      <h5>Deleting from an Array</h5>
      <a
        href={`${API}/lab5/todos/${id}/delete`}
        className="btn btn-danger float-end"
        id="delete-todo"
      >
        Delete Todo with ID = {id}
      </a>

      <hr />

      {/* Update title */}
      <h5>Updating an Item in an Array (Title)</h5>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New Todo Title"
        className="form-control mb-2 w-50"
        id="new-title"
      />
      <a
        href={`${API}/lab5/todos/${id}/title/${newTitle}`}
        className="btn btn-primary"
        id="update-todo"
      >
        Update Todo
      </a>

      <hr />

      {/* Update completed */}
      <h5>Mark Todo as Completed</h5>
      <a
        href={`${API}/lab5/todos/${id}/completed/true`}
        className="btn btn-success"
      >
        Mark as Completed
      </a>

      <hr />

      {/* Update description */}
      <h5>Update Todo Description</h5>
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="New Description"
        className="form-control mb-2 w-50"
      />
      <a
        href={`${API}/lab5/todos/${id}/description/${encodeURIComponent(newDescription)}`}
        className="btn btn-info text-white"
      >
        Update Description
      </a>
    </div>
  );
}
