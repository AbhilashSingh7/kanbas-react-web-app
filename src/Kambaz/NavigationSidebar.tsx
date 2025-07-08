import { Link } from "react-router-dom";
import "./NavigationSidebar.css";

export default function NavigationSidebar() {
  return (
    <div className="sidebar">
      <ul>
      <li><Link to="/">← Back to Landing Page</Link></li>
        <li><Link to="/kambaz/account">Account</Link></li>
        <li><Link to="/kambaz/dashboard">Dashboard</Link></li>
        <li><Link to="/kambaz/courses">Courses</Link></li>
        <li><Link to="/kambaz/calendar">Calendar</Link></li>
        <li><Link to="/kambaz/inbox">Inbox</Link></li>
        <li><Link to="/kambaz/labs">Labs</Link></li>
        <li><Link to="/kambaz/home">Home</Link></li>
        <li><Link to="/kambaz/modules">Modules</Link></li>
        <li><Link to="/kambaz/piazza">Piazza</Link></li>
        <li><Link to="/kambaz/zoom">Zoom</Link></li>
        <li><Link to="/kambaz/quizzes">Quizzes</Link></li>
        <li><Link to="/kambaz/assignments">Assignments</Link></li>
        <li><Link to="/kambaz/grades">Grades</Link></li>
      </ul>
    </div>
  );
}