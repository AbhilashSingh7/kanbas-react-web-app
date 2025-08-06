// src/Kambaz/Profile.tsx
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { user, signOut } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/kambaz/account/signin");
    }
  }, [user, navigate]);

  const handleSignOut = () => {
    signOut();
    navigate("/kambaz/account/signin");
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
