// src/Kambaz/Assignments.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import "./Assignments.css";

interface Assignment {
  id: number;
  name: string;
}

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, name: "A1" },
    { id: 2, name: "A2" },
  ]);

  const [newName, setNewName] = useState("");

  const addAssignment = () => {
    if (!newName.trim()) return;
    const newAssignment = {
      id: Date.now(),
      name: newName.trim(),
    };
    setAssignments([...assignments, newAssignment]);
    setNewName("");
  };

  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  const updateAssignmentName = (id: number, updatedName: string) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, name: updatedName } : a
      )
    );
  };

  return (
    <div className="assignments-container">
      <h2 className="assignments-title">
        <FaClipboardList className="assignments-icon" />
        Assignments
      </h2>

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search Assignments"
      />

      <div className="d-flex mb-3 gap-2">
        <input
          type="text"
          className="form-control"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New Assignment Name"
        />
        <button className="btn btn-primary" onClick={addAssignment}>
          + Assignment
        </button>
      </div>

      <h4>Assignments</h4>
      <ul className="list-group mb-4">
        {assignments.map((a) => (
          <li
            key={a.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <input
              type="text"
              className="form-control me-2"
              value={a.name}
              onChange={(e) => updateAssignmentName(a.id, e.target.value)}
            />
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/kambaz/courses/assignments/${a.id}`}
                className="btn btn-outline-secondary"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => deleteAssignment(a.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h4>Quizzes</h4>
      <ul>
        <li>Quiz 1</li>
      </ul>

      <h4>Exams</h4>
      <ul>
        <li>Midterm Exam</li>
      </ul>

      <h4>Projects</h4>
      <ul>
        <li>Final Project</li>
      </ul>
    </div>
  );
}