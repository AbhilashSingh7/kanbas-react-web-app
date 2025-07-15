// src/Kambaz/CourseHome.tsx
import TopButtons from "./TopButtons";
import ModulesList from "./ModulesList";
import CourseStatus from "./CourseStatus";
import { FaHome } from "react-icons/fa";
import "./Courses.css";

export default function CourseHome() {
  return (
    <div className="course-home">
      <h2 className="course-home-title">
        <FaHome className="course-home-icon" />
        Course Home
      </h2>
      <div className="d-flex justify-content-between">
        {/* Left: Buttons + Modules */}
        <div style={{ width: "70%" }}>
          <TopButtons />
          <ModulesList />
        </div>

        {/* Right: Course Status box */}
        <div style={{ width: "28%" }}>
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
