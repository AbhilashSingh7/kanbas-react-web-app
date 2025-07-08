// src/Kambaz/KambazApp.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import NavigationSidebar from "./NavigationSidebar";
import CourseHome from "./CourseHome";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import Grades from "./Grades";
import Zoom from "./Zoom";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";

// Placeholder components
const Calendar = () => <h2>Calendar Placeholder</h2>;
const Labs = () => <h2>Labs Placeholder</h2>;
const Home = () => <h2>Course Home Placeholder</h2>;
const Inbox = () => <h2>Inbox Placeholder</h2>;

export default function KambazApp() {
  return (
    <div>
      <NavigationSidebar />
      <div style={{ marginLeft: "400px", padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/kambaz/signin" />} />
          <Route path="account" element={<Navigate to="/kambaz/signin" />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="coursehome" element={<CourseHome />} />
          <Route path="modules" element={<Modules />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/editor" element={<AssignmentEditor />} />
          <Route path="grades" element={<Grades />} />
          <Route path="zoom" element={<Zoom />} />
          <Route path="piazza" element={<Piazza />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="labs" element={<Labs />} />
          <Route path="home" element={<Home />} />
          <Route path="inbox" element={<Inbox />} />
        </Routes>
      </div>
    </div>
  );
}
