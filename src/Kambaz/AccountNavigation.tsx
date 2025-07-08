// src/Kambaz/AccountNavigation.tsx
import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div className="list-group mb-3">
      <Link to="/kambaz/signin" className="list-group-item list-group-item-action">
        Sign In
      </Link>
      <Link to="/kambaz/signup" className="list-group-item list-group-item-action">
        Sign Up
      </Link>
      <Link to="/kambaz/profile" className="list-group-item list-group-item-action">
        Profile
      </Link>
    </div>
  );
}
