// src/App.tsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Lab3 from "./Labs/Lab3";
import Lab4 from "./Labs/Lab4";
import Lab5 from "./Labs/Lab5";
import KambazApp from "./Kambaz/KambazApp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/lab1" element={<Lab1 />} />
      <Route path="/lab2" element={<Lab2 />} />
      <Route path="/lab3" element={<Lab3 />} />
      <Route path="/lab4" element={<Lab4 />} />
      <Route path="/lab5" element={<Lab5 />} />
      <Route path="/kambaz/*" element={<KambazApp />} />
    </Routes>
  );
}
