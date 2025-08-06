// src/Kambaz/Profile.tsx
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Account.css";

export default function Profile() {
  const { user, updateUser, signOut } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("Student");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/kambaz/account/signin");
    } else {
      setName(user.name || "");
      setEmail(user.email || "");
      setDob(user.dob || "");
      setRole(user.role || "Student");

    }
  }, [user, navigate]);

  if (!user) return null;

  const handleSave = () => {
    updateUser({ name, dob, role });
    alert("Profile updated!");
  };

  const handleSignOut = () => {
    signOut();
    navigate("/kambaz/account/signin");
  };

  return (
    <div className="account-content">
      <h2>Profile</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Student</option>
          <option>Faculty</option>
          <option>TA</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself..."
          rows={4}
        />
      </div>

      <button onClick={handleSave} className="btn-primary">
        Save Changes
      </button>

      <button onClick={handleSignOut} className="btn-secondary" style={{ marginLeft: "1rem" }}>
        Sign Out
      </button>
    </div>
  );
}
