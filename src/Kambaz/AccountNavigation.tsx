// src/Kambaz/AccountNavigation.tsx
import { NavLink } from "react-router-dom";
import { useUser } from "./UserContext";
import "./Account.css";

export default function AccountNavigation() {
  const { user } = useUser();

  return (
    <nav className="account-nav">
      <h4>Account</h4>
      <ul>
        {!user && (
          <>
            <li>
              <NavLink
                to="/kambaz/account/signin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kambaz/account/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <NavLink
              to="/kambaz/account/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
