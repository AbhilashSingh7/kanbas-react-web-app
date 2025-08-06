// src/Kambaz/CourseHome.tsx
import TopButtons from "./TopButtons";
import ModulesList from "./ModulesList";
import CourseStatus from "./CourseStatus";
import { FaHome } from "react-icons/fa";
import "./CourseHome.css";

export default function CourseHome() {
  return (
    <div className="course-home">
      <h2 className="course-home-title">
        <FaHome className="course-home-icon" />
        Course Home
      </h2>
      <div className="course-home-layout">
        <div className="course-home-left">
          <TopButtons />
          <ModulesList />
          <ModulesList />
        </div>
        <div className="course-home-right">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
