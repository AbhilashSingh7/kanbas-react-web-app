// src/Kambaz/Grades.tsx
import { FaChartBar } from "react-icons/fa";
import "./Grades.css";

const Grades = () => {
  return (
    <div className="grades-container">
      <h2 className="grades-title">
        <FaChartBar className="grades-icon" />
        Grades
      </h2>
      <p>This is where student grades would be displayed.</p>
    </div>
  );
};

export default Grades;