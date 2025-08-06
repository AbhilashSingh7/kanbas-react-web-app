// src/Kambaz/Signin.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      <div style={{ maxWidth: "400px", marginLeft: "0" }}>
        <h2 style={{ color: "white", marginBottom: "1rem" }}>Sign In</h2>
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

        <button
          onClick={handleSignIn}
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
          Sign In
        </button>

        <p style={{ marginTop: "1rem", color: "white" }}>
          New member?{" "}
          <Link
            to="/kambaz/account/signup"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}
