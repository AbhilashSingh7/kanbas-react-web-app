// src/Kambaz/Account.tsx
import { Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import AccountNavigation from "./AccountNavigation";
import "./Account.css";

export default function Account() {
  return (
    <div className="account-page">
      {/* Sidebar */}
      <div className="account-nav">
        <AccountNavigation />
      </div>

      {/* Main content area */}
      <div className="account-main">
        <div className="account-title">
          <FaUser className="account-icon" />
          <h2>Account</h2>
        </div>

        <div className="account-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
