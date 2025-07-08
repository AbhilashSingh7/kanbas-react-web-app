// src/Kambaz/CourseHome.tsx
import TopButtons from "./TopButtons";
import ModulesList from "./ModulesList";
import CourseStatus from "./CourseStatus";

export default function CourseHome() {
  return (
    <div>
      <h2 className="mb-4">Course Home</h2>
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
