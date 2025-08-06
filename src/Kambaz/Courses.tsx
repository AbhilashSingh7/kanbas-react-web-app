// src/Kambaz/Courses.tsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseHome from "./CourseHome";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import "./Courses.css";

export default function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, name: "CS5610 Web Development" },
    { id: 2, name: "CS5800 Algorithms" },
  ]);

  const [newCourseName, setNewCourseName] = useState("");

  const addCourse = () => {
    if (!newCourseName.trim()) return;
    const newCourse = {
      id: Date.now(),
      name: newCourseName.trim(),
    };
    setCourses([...courses, newCourse]);
    setNewCourseName("");
  };

  return (
    <div className="courses-page">
      <div className="courses-nav">
        <CourseNavigation />
      </div>

      <div className="courses-main">
        <Routes>
          {/* ✅ This makes CourseHome the default screen */}
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<CourseHome />} />
          <Route path="modules" element={<Modules />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:assignmentId" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}
