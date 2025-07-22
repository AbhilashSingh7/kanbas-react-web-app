// src/Kambaz/Dashboard.tsx
import { FaTachometerAlt } from "react-icons/fa";
import NavigationSidebar from "./NavigationSidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const courses = [
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
  ];

  return (
    <div className="dashboard-page">
      <NavigationSidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-header">
          <FaTachometerAlt className="dashboard-icon" />
          Dashboard
        </h1>

        <h2 className="published-title">Published Courses</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}