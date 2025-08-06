import React, { useState } from "react";
const API = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [id, setId] = useState(1);

  return (
    <div id="wd-working-with-arrays">
      <h3>Retrieving Arrays</h3>

      {/* 5.2.4.1 – All todos */}
      <a
        href={`${API}/lab5/todos`}
        className="btn btn-primary me-2"
        id="wd-get-todos"
      >
        Get Todos
      </a>

      {/* 5.2.4.2 – Get by ID */}
      <h5>Retrieving an Item from an Array by ID</h5>
      <input
        type="number"
        className="form-control w-25 mb-2"
        defaultValue={id}
        onChange={(e) => setId(e.target.valueAsNumber)}
      />
      <a
        href={`${API}/lab5/todos/${id}`}
        className="btn btn-primary float-end"
        id="wd-get-todo-by-id"
      >
        Get Todo {id}
      </a>

      <hr />

      {/* 5.2.4.3 – Filter by completed */}
      <h5>Filtering Array Items</h5>
      <a
        href={`${API}/lab5/todosCompletedTrue?completed=true`}
        className="btn btn-primary"
        id="wd-retrieve-completed-todos"
      >
        Get Completed Todos
      </a>
    </div>
  );
}
