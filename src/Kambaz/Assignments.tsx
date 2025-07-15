// src/Kambaz/Assignments.tsx
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import "./Assignments.css";

export default function Assignments() {
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

      <button className="btn btn-primary mb-4">+ Assignment</button>

      <h4>Assignments</h4>
      <ul>
        <li>
          <Link to="/kambaz/courses/assignments/1" className="assignment-link">A1</Link>
        </li>
        <li>
          <Link to="/kambaz/courses/assignments/2" className="assignment-link">A2</Link>
        </li>
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