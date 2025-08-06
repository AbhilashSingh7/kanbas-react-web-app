// src/Kambaz/Signin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import "./Account.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useUser();
  const navigate = useNavigate();

  const handleSignIn = () => {
    const success = signIn(email, password);
    if (success) {
      navigate("/kambaz/account/profile");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="account-content">
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button onClick={handleSignIn} className="btn-primary">
        Sign In
      </button>
    </div>
  );
}
