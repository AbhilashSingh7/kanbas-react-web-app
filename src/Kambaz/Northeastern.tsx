// src/Kambaz/Northeastern.tsx
import northeasternLogo from "./northeasternlogo.png";
import { FaUniversity } from "react-icons/fa";

export default function Northeastern() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: "200px", // 👈 This ensures it doesn't overlap the sidebar
      }}
    >
      <div style={{ textAlign: "center" }}>
        <FaUniversity size={32} color="red" style={{ marginBottom: "0.5rem" }} />
        <h2 style={{ color: "white" }}>Northeastern University</h2>
        <a
          href="https://www.northeastern.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={northeasternLogo}
            alt="Northeastern Logo"
            style={{ width: "200px", height: "auto", marginTop: "1rem" }}
          />
        </a>
      </div>
    </div>
  );
}