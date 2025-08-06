// src/Kambaz/KambazApp.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import Labs from "./Labs";
import Home from "./Home";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Assignments from "./Assignments";
import Grades from "./Grades";
import Account from "./Account";
import Northeastern from "./Northeastern";

export default function KambazApp() {
  return (
    <div className="d-flex">
      <NavigationSidebar />
      <div className="flex-grow-1 p-4">
        <Routes>
          {/* ✅ Redirect /kambaz to /kambaz/account */}
          <Route path="/" element={<Navigate to="northeastern" replace />} />

          <Route path="account/*" element={<Account />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses/*" element={<Courses />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="labs" element={<Labs />} />
          <Route path="home" element={<Home />} />
          <Route path="modules" element={<Modules />} />
          <Route path="piazza" element={<Piazza />} />
          <Route path="zoom" element={<Zoom />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="grades" element={<Grades />} />
          <Route path="northeastern" element={<Northeastern />} />
        </Routes>
      </div>
    </div>
  );
}
