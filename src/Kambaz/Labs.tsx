// src/Kambaz/Labs.tsx
import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";

export default function Labs() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: 220,
      }}
    >
      <h1 style={{ color: "red", marginBottom: "1rem" }}>
        <FaFlask style={{ marginRight: "0.5rem" }} />
        Labs
      </h1>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link to="/kambaz/lab1" style={{ color: "white", textDecoration: "underline" }}>
            Lab 1
          </Link>
        </li>
        <li>
          <Link to="/lab2" style={{ color: "white", textDecoration: "underline" }}>
            Lab 2
          </Link>
        </li>
        <li>
          <Link to="/lab3" style={{ color: "white", textDecoration: "underline" }}>
            Lab 3
          </Link>
        </li>
        <li>
          <Link to="/lab4" style={{ color: "white", textDecoration: "underline" }}>
            Lab 4
          </Link>
        </li>
        <li>
          <Link to="/lab5" style={{ color: "white", textDecoration: "underline" }}>
            Lab 5
          </Link>
        </li>
      </ul>
    </div>
  );
}