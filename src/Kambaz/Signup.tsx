// src/Kambaz/Signup.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "./UserContext";
import "./Account.css";

export default function Signup() {
  const [username, setUsername] = useState("iron_man");
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("Stark");
  const [email, setEmail] = useState("ironman@stark.com");
  const [password, setPassword] = useState("stark123");
  const [verifyPassword, setVerifyPassword] = useState("stark123");
  const [dob, setDob] = useState("1970-05-29");
  const [role, setRole] = useState("Student");

  const { signUp } = useUser();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !verifyPassword ||
      !dob ||
      !role
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== verifyPassword) {
      alert("Passwords do not match.");
      return;
    }

    const fullName = `${firstName} ${lastName}`;
    signUp(fullName, email, password, {
      username,
      firstName,
      lastName,
      dob,
      role,
    });

    navigate("/kambaz/account/profile");
  };

  return (
    <div className="account-content">
      <div style={{ maxWidth: "400px", marginLeft: "0" }}>
        <h2 style={{ color: "white", marginBottom: "1rem" }}>Sign Up</h2>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Verify Password:</label>
          <input
            type="password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="TA">TA</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          onClick={handleSignUp}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: "1rem", color: "white" }}>
          Already a member?{" "}
          <Link
            to="/kambaz/account/signin"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
}
