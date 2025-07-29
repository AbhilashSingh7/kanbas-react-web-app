// src/Kambaz/Courses.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

  const deleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const editCourse = (id: number, newName: string) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, name: newName } : course
      )
    );
  };

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

        <div className="course-crud mt-5">
          <h3>Manage Courses</h3>
          <div className="mb-3 d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
              placeholder="New Course Name"
            />
            <button className="btn btn-primary" onClick={addCourse}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {courses.map((course) => (
              <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                <input
                  type="text"
                  className="form-control me-2"
                  value={course.name}
                  onChange={(e) => editCourse(course.id, e.target.value)}
                />
                <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}