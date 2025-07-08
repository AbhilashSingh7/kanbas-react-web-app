
import { NavLink } from "react-router-dom";

export default function CourseNavigation() {
  return (
    <div className="list-group" style={{ width: "200px" }}>
      <NavLink to="home" className="list-group-item">Home</NavLink>
      <NavLink to="modules" className="list-group-item">Modules</NavLink>
      <NavLink to="#" className="list-group-item">Piazza</NavLink>
      <NavLink to="#" className="list-group-item">Zoom</NavLink>
      <NavLink to="assignments" className="list-group-item">Assignments</NavLink>
      <NavLink to="#" className="list-group-item">Grades</NavLink>
    </div>
  );
}
