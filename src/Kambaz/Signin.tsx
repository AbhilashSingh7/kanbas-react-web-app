import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    // For now, no real auth — just redirect
    navigate("/profile");
  };

  return (
    <div>
      <h2>Sign In</h2>
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
      <button onClick={handleSignin}>Sign In</button>
      <p>
        Don't have an account?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}