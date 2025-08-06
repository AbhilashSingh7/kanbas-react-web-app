// src/Labs/index.tsx

import { Routes, Route, Navigate } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";


export default function Labs() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="lab1" />} />
      <Route path="lab1" element={<Lab1 />} />
      <Route path="lab2" element={<Lab2 />} />
      <Route path="lab3" element={<Lab3 />} />
      <Route path="lab4" element={<Lab4 />} />
      <Route path="lab5" element={<Lab5 />} />
    </Routes>
  );
}