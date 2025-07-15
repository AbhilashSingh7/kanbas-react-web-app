// src/Kambaz/Modules.tsx
import { FaLayerGroup } from "react-icons/fa";
import "./Modules.css";

export default function Modules() {
  return (
    <div className="modules-container">
      <h2 className="modules-title">
        <FaLayerGroup className="modules-icon" />
        Modules
      </h2>

      <div className="mb-3">
        <h4>Module 1: Introduction</h4>
        <ul>
          <li>Lesson: Welcome</li>
          <li>Lesson: What is Kambaz?</li>
        </ul>
      </div>

      <div className="mb-3">
        <h4>Module 2: Advanced React</h4>
        <ul>
          <li>Lesson: useEffect and useState</li>
          <li>Lesson: React Router</li>
        </ul>
      </div>
    </div>
  );
}