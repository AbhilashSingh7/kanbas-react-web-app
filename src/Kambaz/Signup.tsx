import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("NewUser123");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password === verifyPassword) {
      navigate("/profile");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Verify Password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      /><br />
      <button onClick={handleSignup}>Create Account</button>
      <p>
        Already have an account?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/")}>
          Sign In
        </span>
      </p>
    </div>
  );
}