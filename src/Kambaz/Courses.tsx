// src/Kambaz/Courses.tsx
import { Routes, Route } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseHome from "./CourseHome";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import "./Courses.css";

export default function Courses() {
  return (
    <div className="courses-page">
      <CourseNavigation />
      <div className="courses-content">
        <Routes>
          <Route path="/" element={<CourseHome />} />
          <Route path="home" element={<CourseHome />} />
          <Route path="modules" element={<Modules />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:assignmentId" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}