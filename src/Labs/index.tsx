// src/Labs/index.tsx

import { Routes, Route, Navigate } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="lab1" />} />
      <Route path="lab1" element={<Lab1 />} />
      <Route path="lab2" element={<Lab2 />} />
    </Routes>
  );
}