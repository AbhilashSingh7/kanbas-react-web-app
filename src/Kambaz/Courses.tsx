import { Routes, Route } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseHome from "./CourseHome";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";

export default function Courses() {
  return (
    <div className="d-flex">
      <CourseNavigation />
      <div className="flex-grow-1 p-3">
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
