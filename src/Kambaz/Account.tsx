// src/Kambaz/Account.tsx
import { Outlet, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Account() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: "200px", // Clear sidebar
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <FaUser size={32} color="white" style={{ marginRight: "0.5rem" }} />
        <h2 style={{ margin: 0 }}>Account</h2>
      </div>

      <nav style={{ marginBottom: "2rem" }}>
        <NavLink
          to="/kambaz/account/signin"
          style={({ isActive }) => ({
            marginRight: "1rem",
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/kambaz/account/signup"
          style={({ isActive }) => ({
            marginRight: "1rem",
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/kambaz/account/profile"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Profile
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}