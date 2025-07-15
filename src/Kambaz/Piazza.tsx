// src/Kambaz/Piazza.tsx
import { FaComments } from "react-icons/fa";
import "./Piazza.css";

const Piazza = () => {
  return (
    <div className="piazza-container">
      <h2 className="piazza-title">
        <FaComments className="piazza-icon" />
        Piazza
      </h2>
      <a
        href="http://piazza.com"
        target="_blank"
        rel="noopener noreferrer"
        className="piazza-link"
      >
        Visit Piazza Forum
      </a>
    </div>
  );
};

export default Piazza;