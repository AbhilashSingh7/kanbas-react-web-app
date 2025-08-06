// src/Kambaz/Courses.tsx
import { Routes, Route } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseHome from "./CourseHome";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import CoursesDashboard from "./CoursesDashboard";
import "./Courses.css";

export default function Courses() {
  return (
    <div className="courses-page">
      <CourseNavigation />
      <div className="courses-content">
        <Routes>
          <Route path="/" element={<CoursesDashboard />} />
          <Route path="home" element={<CourseHome />} />
          <Route path="modules" element={<Modules />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="piazza" element={<Piazza />} />
          <Route path="zoom" element={<Zoom />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
