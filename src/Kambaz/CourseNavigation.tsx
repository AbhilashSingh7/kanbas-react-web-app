// src/Kambaz/CourseNavigation.tsx
import { NavLink } from "react-router-dom";
import "./Courses.css";

export default function CourseNavigation() {
  return (
    <div className="course-nav">
      <NavLink to="home" className="course-nav-item">🏠 Home</NavLink>
      <NavLink to="modules" className="course-nav-item">📦 Modules</NavLink>
      <NavLink to="#" className="course-nav-item">💬 Piazza</NavLink>
      <NavLink to="#" className="course-nav-item">🎥 Zoom</NavLink>
      <NavLink to="assignments" className="course-nav-item">📝 Assignments</NavLink>
      <NavLink to="#" className="course-nav-item">📊 Grades</NavLink>
    </div>
  );
}