// src/Kambaz/Northeastern.tsx
import { FaUniversity } from "react-icons/fa";

export default function Northeastern() {
  const northeasternLogo = "/Northeasternlogo.png";

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: "200px",
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
            style={{ width: "400px", height: "auto", marginTop: "1rem" }}
          />
        </a>
      </div>
    </div>
  );
}
