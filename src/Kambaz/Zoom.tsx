// src/Kambaz/Zoom.tsx
import { FaVideo } from "react-icons/fa";
import "./Zoom.css";

const Zoom = () => {
  return (
    <div className="zoom-container">
      <h2 className="zoom-title">
        <FaVideo className="zoom-icon" />
        Zoom
      </h2>
      <a
        href="https://zoom.us"
        target="_blank"
        rel="noopener noreferrer"
        className="zoom-link"
      >
        Visit Zoom
      </a>
    </div>
  );
};

export default Zoom;