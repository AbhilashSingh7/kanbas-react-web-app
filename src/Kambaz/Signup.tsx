// src/Kambaz/Signup.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUser();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    signUp(name, email, password);
    navigate("/kambaz/account/profile");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <button onClick={handleSignUp}>Create Account</button>
    </div>
  );
}
