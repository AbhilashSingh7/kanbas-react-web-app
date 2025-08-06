// src/Kambaz/CourseNavigation.tsx
import { NavLink } from "react-router-dom";
import "./Courses.css";

export default function CourseNavigation() {
  return (
    <div className="course-nav">
      <NavLink to="home" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>🏠 Home</NavLink>
      <NavLink to="modules" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>📦 Modules</NavLink>
      <NavLink to="piazza" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>💬 Piazza</NavLink>
      <NavLink to="zoom" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>🎥 Zoom</NavLink>
      <NavLink to="assignments" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>📝 Assignments</NavLink>
      <NavLink to="quizzes" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>❓ Quizzes</NavLink>
      <NavLink to="grades" className={({ isActive }) => isActive ? "course-nav-item active" : "course-nav-item"}>📊 Grades</NavLink>
    </div>
  );
}
