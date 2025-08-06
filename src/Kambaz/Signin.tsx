// src/Kambaz/Signin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

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
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
