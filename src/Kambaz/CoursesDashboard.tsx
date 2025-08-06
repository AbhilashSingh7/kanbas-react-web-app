// src/Kambaz/CoursesDashboard.tsx
import { useState } from "react";
import "./CoursesDashboard.css";

export default function CoursesDashboard() {
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
    <div className="courses-dashboard">
      <h2 className="dashboard-title">Courses Dashboard</h2>

      <div className="course-crud">
        <h3 className="section-title">Manage Courses</h3>
        <div className="add-course-form">
          <input
            type="text"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            placeholder="New Course Name"
          />
          <button onClick={addCourse}>Add</button>
        </div>

        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <input
                type="text"
                value={course.name}
                onChange={(e) => editCourse(course.id, e.target.value)}
              />
              <button onClick={() => deleteCourse(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
