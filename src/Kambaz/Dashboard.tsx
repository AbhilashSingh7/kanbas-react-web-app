// src/Kambaz/Dashboard.tsx
import { useState } from "react";
import { FaTachometerAlt, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "./Dashboard.css";

interface Course {
  id: number;
  title: string;
  description: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "CS5610: Web Development",
      description: "Full Stack Dev, Summer 2025",
    },
    {
      id: 2,
      title: "CS5800: Algorithms",
      description: "Advanced algorithmic techniques",
    },
    {
      id: 3,
      title: "CS5520: Mobile App Dev",
      description: "React Native & Android Projects",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addCourse = () => {
    if (!newTitle.trim()) return;
    const newCourse: Course = {
      id: Date.now(),
      title: newTitle,
      description: newDesc,
    };
    setCourses([...courses, newCourse]);
    setNewTitle("");
    setNewDesc("");
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const editCourse = (id: number, updatedTitle: string, updatedDesc: string) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? { ...course, title: updatedTitle, description: updatedDesc }
          : course
      )
    );
  };

  return (
    <div className="dashboard-page">
      <NavigationSidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-header">
          <FaTachometerAlt className="dashboard-icon" />
          Dashboard
        </h1>

        <h2 className="published-title">Published Courses</h2>

        {/* New course form */}
        <div className="new-course-form">
          <input
            type="text"
            placeholder="Course Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course Description"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button onClick={addCourse}>
            <FaPlus /> Add Course
          </button>
        </div>

        {/* Course Grid */}
        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>
                <Link to={`/kambaz/courses/${course.id}`} className="course-link">
                  {course.title}
                </Link>
              </h3>
              <p>{course.description}</p>
              <div className="course-actions">
                <button
                  className="btn-edit"
                  onClick={() =>
                    editCourse(
                      course.id,
                      prompt("New title:", course.title) || course.title,
                      prompt("New description:", course.description) || course.description
                    )
                  }
                >
                  <FaEdit /> Edit
                </button>
                <button className="btn-delete" onClick={() => deleteCourse(course.id)}>
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
