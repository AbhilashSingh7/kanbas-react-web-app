// src/Kambaz/NavigationSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import "./NavigationSidebar.css";

const navItems = [
  { label: "← Back to Landing Page", path: "/" },
  { label: "Northeastern", path: "/kambaz/northeastern" },
  { label: "Account", path: "/kambaz/account" },
  { label: "Dashboard", path: "/kambaz/dashboard" },
  { label: "Courses", path: "/kambaz/courses" },
  { label: "Calendar", path: "/kambaz/calendar" },
  { label: "Inbox", path: "/kambaz/inbox" },
  { label: "Labs", path: "/kambaz/labs" },
  { label: "Home", path: "/kambaz/home" },
  { label: "Modules", path: "/kambaz/modules" },
  { label: "Piazza", path: "/kambaz/piazza" },
  { label: "Zoom", path: "/kambaz/zoom" },
  { label: "Quizzes", path: "/kambaz/quizzes" },
  { label: "Assignments", path: "/kambaz/assignments" },
  { label: "Grades", path: "/kambaz/grades" },
  { label: "People", path: "/kambaz/people" },
];

export default function NavigationSidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}