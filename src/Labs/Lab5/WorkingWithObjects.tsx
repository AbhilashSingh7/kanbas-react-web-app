import React, { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({});
  const [title, setTitle] = useState("");

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <a
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
        id="wd-get-assignment"
      >
        Get Assignment
      </a>

      <a
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
        id="wd-get-assignment-title"
      >
        Get Title
      </a>

      <hr />
      <h5>Modifying Properties</h5>

      <input
        type="text"
        className="form-control mb-2"
        id="assignment-title"
        placeholder="New Assignment Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <a
        className="btn btn-primary"
        id="update-title"
        href={`${REMOTE_SERVER}/lab5/assignment/title/${title}`}
      >
        Update Title
      </a>
    </div>
  );
}
