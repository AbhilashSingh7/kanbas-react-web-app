// src/Kambaz/Assignments.tsx
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div>
      <h2>Assignments</h2>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search Assignments"
      />
      <button className="btn btn-primary mb-2">+ Assignment</button>
      <h4>Assignments</h4>
      <ul>
        <li>
          <Link to="/kambaz/courses/assignments/1">A1: HTML</Link>
        </li>
        <li>
          <Link to="/kambaz/courses/assignments/2">A2: CSS</Link>
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
