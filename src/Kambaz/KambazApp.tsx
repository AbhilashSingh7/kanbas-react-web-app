// src/Kambaz/KambazApp.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Northeastern from "./Northeastern";
import Account from "./Account";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CalendarPage from "./Calendar";
import NavigationSidebar from "./NavigationSidebar";
import CourseHome from "./CourseHome";
import Inbox from "./Inbox";
import Labs from "./Labs";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import Grades from "./Grades";
import Zoom from "./Zoom";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import Lab1 from "../Labs/Lab1";
import Lab2 from "../Labs/Lab2";
import Home from "./Home";

// Placeholder components

export default function KambazApp() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NavigationSidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Routes>
          <Route path="northeastern" element={<Northeastern />} />
          <Route path="/" element={<Navigate to="/kambaz/signin" />} />

          {/* Updated Account routing */}
          <Route path="account" element={<Account />}>
            <Route index element={<Signin />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Legacy flat routes (still work if linked directly) */}
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
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="labs" element={<Labs />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2" element={<Lab2 />} />
          <Route path="home" element={<Home />} />
          <Route path="inbox" element={<Inbox />} />
        </Routes>
      </div>
    </div>
  );
}