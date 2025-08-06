// src/Kambaz/Signup.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

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
    <div className="signup-container">
      <h2>Sign Up</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Verify Password:</label>
        <input
          type="password"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="TA">TA</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <button onClick={handleSignUp}>Create Account</button>
    </div>
  );
}
