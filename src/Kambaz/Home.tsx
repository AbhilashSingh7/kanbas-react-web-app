// src/Kambaz/Home.tsx
import { FaHome, FaBook, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        <FaHome className="home-icon" />
        Welcome to Kambaz
      </h1>
      <p className="home-subtext">
        Your one-stop platform for managing courses, assignments, and more.
      </p>

      <ul className="home-links">
        <li>
          <Link to="/kambaz/dashboard">
            <FaUser className="home-link-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/kambaz/courses">
            <FaBook className="home-link-icon" />
            Courses
          </Link>
        </li>
        <li>
          <Link to="/kambaz/calendar">
            <FaCalendarAlt className="home-link-icon" />
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/kambaz/labs">
            <FaBook className="home-link-icon" />
            Labs
          </Link>
        </li>
      </ul>
    </div>
  );
}